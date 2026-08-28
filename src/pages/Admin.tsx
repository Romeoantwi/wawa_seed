import { ChangeEvent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  Download,
  ImageUp,
  Inbox,
  Loader2,
  LogOut,
  Plus,
  RefreshCw,
  Save,
  Trash2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { defaultContent, SectionKey, SiteContent } from '@/content/defaults';
import { mergeContent } from '@/hooks/useSiteContent';
import { supabase } from '@/integrations/supabase/client';
import type { Json, Tables } from '@/integrations/supabase/types';
import { cn } from '@/lib/utils';
import logo from '@/assets/wasaf-logo.jpg';

type Path = Array<string | number>;
type Overrides = Partial<Record<SectionKey, unknown>>;
type ContactMessage = Tables<'contact_messages'>;

const sectionLabels: Record<SectionKey, string> = {
  hero: 'Homepage Hero',
  founder: 'Founder',
  team: 'Team',
  about: 'About',
  awards: 'Isaac Saki Awards',
  programs: 'Programs',
  gallery: 'Gallery',
  impact: 'Impact Numbers',
  partners: 'Partners',
  contact: 'Contact',
  donation: 'Donations',
  footer: 'Footer',
};

const sectionKeys = Object.keys(defaultContent) as SectionKey[];

const cloneValue = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const humanize = (key: string) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .replace(/^./, (letter) => letter.toUpperCase());

const isAssetField = (key: string) => /(image|logo|certificateUrl)$/i.test(key);

const acceptsForField = (key: string) => (key.toLowerCase().includes('certificate') ? '.pdf,image/*' : 'image/*');

const toJson = (value: unknown): Json => JSON.parse(JSON.stringify(value)) as Json;

const setValueAtPath = (source: unknown, path: Path, value: unknown): unknown => {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  const base: Record<string, unknown> | unknown[] = Array.isArray(source)
    ? [...source]
    : isRecord(source)
      ? { ...source }
      : typeof head === 'number'
        ? []
        : {};

  if (Array.isArray(base) && typeof head === 'number') {
    base[head] = setValueAtPath(base[head], rest, value);
  } else if (!Array.isArray(base) && typeof head === 'string') {
    base[head] = setValueAtPath(base[head], rest, value);
  }

  return base;
};

const updateArrayAtPath = (source: unknown, path: Path, updater: (items: unknown[]) => unknown[]): unknown => {
  const update = (value: unknown, remaining: Path): unknown => {
    if (remaining.length === 0) return updater(Array.isArray(value) ? value : []);
    const [head, ...rest] = remaining;
    const base: Record<string, unknown> | unknown[] = Array.isArray(value)
      ? [...value]
      : isRecord(value)
        ? { ...value }
        : typeof head === 'number'
          ? []
          : {};

    if (Array.isArray(base) && typeof head === 'number') {
      base[head] = update(base[head], rest);
    } else if (!Array.isArray(base) && typeof head === 'string') {
      base[head] = update(base[head], rest);
    }

    return base;
  };

  return update(source, path);
};

const createBlankValue = (sample: unknown): unknown => {
  if (typeof sample === 'string') return '';
  if (typeof sample === 'number') return 0;
  if (typeof sample === 'boolean') return false;
  if (Array.isArray(sample)) return [];
  if (isRecord(sample)) {
    return Object.fromEntries(Object.entries(sample).map(([key, value]) => [key, createBlankValue(value)]));
  }
  return '';
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));

const Admin = () => {
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);

  const [selectedSection, setSelectedSection] = useState<SectionKey>('hero');
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [draft, setDraft] = useState<unknown>(cloneValue(defaultContent.hero));
  const [loadingContent, setLoadingContent] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingPath, setUploadingPath] = useState<string | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const selectedLabel = sectionLabels[selectedSection];

  const loadContent = useCallback(async () => {
    setLoadingContent(true);
    const { data, error } = await supabase.from('site_content').select('key, data');
    if (error) {
      toast({ title: 'Content load failed', description: error.message, variant: 'destructive' });
      setLoadingContent(false);
      return;
    }

    const overrides: Overrides = {};
    for (const row of data ?? []) {
      overrides[row.key as SectionKey] = row.data;
    }
    const merged = mergeContent(overrides);
    setContent(merged);
    setDraft(cloneValue(merged[selectedSection]));
    setLoadingContent(false);
  }, [selectedSection, toast]);

  const loadMessages = useCallback(async () => {
    setLoadingMessages(true);
    const { data, error } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Inbox load failed', description: error.message, variant: 'destructive' });
      setLoadingMessages(false);
      return;
    }
    setMessages(data ?? []);
    setLoadingMessages(false);
  }, [toast]);

  useEffect(() => {
    const checkAccess = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/auth', { replace: true });
        return;
      }

      const { data: allowed, error } = await supabase.rpc('is_admin');
      if (error || !allowed) {
        setIsAdmin(false);
        setCheckingAccess(false);
        return;
      }

      setIsAdmin(true);
      setCheckingAccess(false);
    };

    checkAccess();
  }, [navigate]);

  useEffect(() => {
    if (!isAdmin) return;
    loadContent();
    loadMessages();
  }, [isAdmin, loadContent, loadMessages]);

  useEffect(() => {
    setDraft(cloneValue(content[selectedSection]));
  }, [content, selectedSection]);

  const unreadCount = useMemo(() => messages.filter((message) => !message.is_read).length, [messages]);

  const handleFieldChange = (path: Path, value: unknown) => {
    setDraft((current) => setValueAtPath(current, path, value));
  };

  const handleArrayChange = (path: Path, updater: (items: unknown[]) => unknown[]) => {
    setDraft((current) => updateArrayAtPath(current, path, updater));
  };

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>, path: Path, label: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const uploadKey = path.join('.');
    setUploadingPath(uploadKey);
    const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-');
    const storagePath = `${selectedSection}/${Date.now()}-${safeName}`;

    const { error: uploadError } = await supabase.storage.from('site-images').upload(storagePath, file, {
      contentType: file.type,
      upsert: true,
    });

    if (uploadError) {
      toast({ title: 'Upload failed', description: uploadError.message, variant: 'destructive' });
      setUploadingPath(null);
      event.target.value = '';
      return;
    }

    const tenYears = 60 * 60 * 24 * 365 * 10;
    const { data, error: signedUrlError } = await supabase.storage.from('site-images').createSignedUrl(storagePath, tenYears);
    if (signedUrlError || !data?.signedUrl) {
      toast({ title: 'Upload saved, link failed', description: signedUrlError?.message, variant: 'destructive' });
      setUploadingPath(null);
      event.target.value = '';
      return;
    }

    handleFieldChange(path, data.signedUrl);
    toast({ title: `${humanize(label)} uploaded`, description: 'Save this section to publish the new file.' });
    setUploadingPath(null);
    event.target.value = '';
  };

  const saveSection = async () => {
    setSaving(true);
    const { error } = await supabase.from('site_content').upsert({ key: selectedSection, data: toJson(draft) });
    setSaving(false);

    if (error) {
      toast({ title: 'Save failed', description: error.message, variant: 'destructive' });
      return;
    }

    setContent((current) => ({ ...current, [selectedSection]: cloneValue(draft) }));
    toast({ title: 'Section saved', description: `${selectedLabel} has been updated.` });
  };

  const resetSection = async () => {
    setSaving(true);
    const { error } = await supabase.from('site_content').delete().eq('key', selectedSection);
    setSaving(false);

    if (error) {
      toast({ title: 'Reset failed', description: error.message, variant: 'destructive' });
      return;
    }

    setDraft(cloneValue(defaultContent[selectedSection]));
    setContent((current) => ({ ...current, [selectedSection]: cloneValue(defaultContent[selectedSection]) }));
    toast({ title: 'Section reset', description: `${selectedLabel} is using the built-in website content again.` });
  };

  const markMessageRead = async (message: ContactMessage, isRead: boolean) => {
    const { error } = await supabase.from('contact_messages').update({ is_read: isRead }).eq('id', message.id);
    if (error) {
      toast({ title: 'Update failed', description: error.message, variant: 'destructive' });
      return;
    }
    setMessages((current) => current.map((item) => (item.id === message.id ? { ...item, is_read: isRead } : item)));
  };

  const deleteMessage = async (message: ContactMessage) => {
    const { error } = await supabase.from('contact_messages').delete().eq('id', message.id);
    if (error) {
      toast({ title: 'Delete failed', description: error.message, variant: 'destructive' });
      return;
    }
    setMessages((current) => current.filter((item) => item.id !== message.id));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth', { replace: true });
  };

  const renderField = (label: string, value: unknown, path: Path, level = 0): ReactNode => {
    const pathKey = path.join('.');

    if (typeof value === 'string') {
      const longText = value.length > 90 || /(intro|description|text|note|subtitle|about|bio|message)/i.test(label);
      const asset = isAssetField(label);

      if (asset) {
        const isImage = value && !label.toLowerCase().includes('certificate');
        return (
          <div key={pathKey} className="space-y-3 rounded-xl border border-border bg-background/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Label>{humanize(label)}</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept={acceptsForField(label)}
                  className="max-w-56"
                  onChange={(event) => handleUpload(event, path, label)}
                  disabled={uploadingPath === pathKey}
                />
                {uploadingPath === pathKey && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
              </div>
            </div>
            {isImage ? (
              <img src={value} alt={humanize(label)} className="h-36 w-full rounded-lg object-cover" />
            ) : value ? (
              <p className="text-sm text-muted-foreground">Current file link is set.</p>
            ) : (
              <p className="text-sm text-muted-foreground">No file uploaded.</p>
            )}
          </div>
        );
      }

      return (
        <div key={pathKey} className="space-y-2">
          <Label htmlFor={pathKey}>{humanize(label)}</Label>
          {longText ? (
            <Textarea
              id={pathKey}
              value={value}
              onChange={(event) => handleFieldChange(path, event.target.value)}
              rows={4}
            />
          ) : (
            <Input id={pathKey} value={value} onChange={(event) => handleFieldChange(path, event.target.value)} />
          )}
        </div>
      );
    }

    if (typeof value === 'number') {
      return (
        <div key={pathKey} className="space-y-2">
          <Label htmlFor={pathKey}>{humanize(label)}</Label>
          <Input
            id={pathKey}
            type="number"
            value={value}
            onChange={(event) => handleFieldChange(path, Number(event.target.value))}
          />
        </div>
      );
    }

    if (typeof value === 'boolean') {
      return (
        <div key={pathKey} className="flex items-center gap-3 rounded-lg border border-border p-3">
          <Checkbox checked={value} onCheckedChange={(checked) => handleFieldChange(path, checked === true)} />
          <Label>{humanize(label)}</Label>
        </div>
      );
    }

    if (Array.isArray(value)) {
      const primitive = value.every((item) => typeof item !== 'object' || item === null);
      if (primitive) {
        return (
          <div key={pathKey} className="space-y-2">
            <Label htmlFor={pathKey}>{humanize(label)}</Label>
            <Textarea
              id={pathKey}
              value={value.join('\n')}
              rows={Math.max(3, Math.min(value.length + 1, 8))}
              onChange={(event) => handleFieldChange(path, event.target.value.split('\n'))}
            />
          </div>
        );
      }

      return (
        <div key={pathKey} className={cn('space-y-4', level === 0 && 'rounded-xl border border-border p-4')}>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-xl font-bold text-foreground">{humanize(label)}</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                handleArrayChange(path, (items) => [...items, createBlankValue(items[0] ?? { title: '', description: '' })])
              }
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
          {value.map((item, index) => (
            <div key={`${pathKey}-${index}`} className="space-y-4 rounded-xl border border-border bg-card p-4 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <Badge variant="secondary">{humanize(label)} {index + 1}</Badge>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleArrayChange(path, (items) => items.filter((_, itemIndex) => itemIndex !== index))}
                  aria-label={`Remove ${humanize(label)} ${index + 1}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              {renderField(String(index), item, [...path, index], level + 1)}
            </div>
          ))}
        </div>
      );
    }

    if (isRecord(value)) {
      return (
        <div key={pathKey} className={cn('space-y-4', level > 0 && 'rounded-xl border border-border bg-background/60 p-4')}>
          {level > 0 && <h4 className="font-display text-lg font-bold text-foreground">{Number.isNaN(Number(label)) ? humanize(label) : 'Details'}</h4>}
          {Object.entries(value).map(([key, entry]) => renderField(key, entry, [...path, key], level + 1))}
        </div>
      );
    }

    return null;
  };

  if (checkingAccess) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          Checking access
        </div>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <section className="max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-card">
          <h1 className="font-display text-3xl font-bold text-primary-dark">This user is not registered as an admin</h1>
          <p className="mt-3 text-muted-foreground">
            {sessionEmail ? `${sessionEmail} does not have admin access. ` : ''}
            Please sign in with the correct admin email address.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button onClick={signOut}>Use a different email</Button>
            <Button variant="outline" onClick={() => navigate('/')}>Back to website</Button>
          </div>
        </section>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-soft">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="WASAF Logo" className="h-14 w-auto mix-blend-multiply" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">WASAF</p>
              <h1 className="font-display text-2xl font-bold text-primary-dark md:text-3xl">Admin Dashboard</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4" />
              Website
            </Button>
            <Button variant="ghost" onClick={signOut}>
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid h-auto w-full grid-cols-2 md:w-fit">
            <TabsTrigger value="content">Website Content</TabsTrigger>
            <TabsTrigger value="inbox" className="gap-2">
              <Inbox className="h-4 w-4" />
              Inbox
              {unreadCount > 0 && <Badge variant="secondary">{unreadCount}</Badge>}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
                <aside className="space-y-4">
                  <div className="space-y-2">
                    <Label>Section</Label>
                    <Select value={selectedSection} onValueChange={(value) => setSelectedSection(value as SectionKey)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sectionKeys.map((key) => (
                          <SelectItem key={key} value={key}>{sectionLabels[key]}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="hidden rounded-xl bg-accent p-4 text-sm text-accent-foreground lg:block">
                    Changes are saved one section at a time. Use image fields to upload new photos or PDFs.
                  </div>
                </aside>

                <div className="space-y-5">
                  <div className="flex flex-col gap-3 border-b border-border pb-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground">{selectedLabel}</h2>
                      <p className="text-sm text-muted-foreground">Edit the fields below, then save to update the live website.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" onClick={loadContent} disabled={loadingContent || saving}>
                        <RefreshCw className={cn('h-4 w-4', loadingContent && 'animate-spin')} />
                        Refresh
                      </Button>
                      <Button variant="outline" onClick={resetSection} disabled={saving}>
                        <Trash2 className="h-4 w-4" />
                        Reset
                      </Button>
                      <Button onClick={saveSection} disabled={saving || loadingContent}>
                        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        Save
                      </Button>
                    </div>
                  </div>

                  {loadingContent ? (
                    <div className="flex min-h-72 items-center justify-center rounded-xl border border-border text-muted-foreground">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin text-primary" />
                      Loading content
                    </div>
                  ) : (
                    <div className="space-y-5">{renderField(selectedSection, draft, [])}</div>
                  )}
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="inbox" className="space-y-4">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Contact Messages</h2>
                  <p className="text-sm text-muted-foreground">Messages submitted through the website contact form.</p>
                </div>
                <Button variant="outline" onClick={loadMessages} disabled={loadingMessages}>
                  <RefreshCw className={cn('h-4 w-4', loadingMessages && 'animate-spin')} />
                  Refresh
                </Button>
              </div>

              {loadingMessages ? (
                <div className="flex min-h-56 items-center justify-center text-muted-foreground">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin text-primary" />
                  Loading inbox
                </div>
              ) : messages.length === 0 ? (
                <div className="rounded-xl border border-border bg-background p-8 text-center text-muted-foreground">
                  No contact messages yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <article key={message.id} className="rounded-xl border border-border bg-background p-5">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-xl font-bold text-foreground">{message.name}</h3>
                            {message.is_read ? <Badge variant="outline">Read</Badge> : <Badge>New</Badge>}
                          </div>
                          <a href={`mailto:${message.email}`} className="text-sm font-semibold text-primary hover:underline">
                            {message.email}
                          </a>
                          <p className="text-xs text-muted-foreground">{formatDate(message.created_at)}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" onClick={() => markMessageRead(message, !message.is_read)}>
                            <Check className="h-4 w-4" />
                            {message.is_read ? 'Mark unread' : 'Mark read'}
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={`mailto:${message.email}?subject=Re: Your WASAF message`}>
                              <Download className="h-4 w-4" />
                              Reply
                            </a>
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteMessage(message)} aria-label="Delete message">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-4 whitespace-pre-line leading-relaxed text-foreground">{message.message}</p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Admin;