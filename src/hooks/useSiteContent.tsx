import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { defaultContent, SiteContent, SectionKey } from '@/content/defaults';

type Overrides = Partial<Record<SectionKey, unknown>>;

const SiteContentContext = createContext<{ content: SiteContent; loading: boolean }>({
  content: defaultContent,
  loading: true,
});

export const fetchOverrides = async (): Promise<Overrides> => {
  const { data, error } = await supabase.from('site_content').select('key, data');
  if (error || !data) return {};
  const out: Overrides = {};
  for (const row of data) {
    out[row.key as SectionKey] = row.data;
  }
  return out;
};

export const mergeContent = (overrides: Overrides): SiteContent => {
  const merged = { ...defaultContent } as SiteContent;
  (Object.keys(defaultContent) as SectionKey[]).forEach((key) => {
    const override = overrides[key];
    if (override && typeof override === 'object' && Object.keys(override).length > 0) {
      merged[key] = { ...(defaultContent[key] as object), ...(override as object) } as never;
    }
  });
  return merged;
};

export const SiteContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchOverrides().then((overrides) => {
      if (!active) return;
      setContent(mergeContent(overrides));
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <SiteContentContext.Provider value={{ content, loading }}>{children}</SiteContentContext.Provider>
  );
};

export const useSiteContent = () => useContext(SiteContentContext).content;

export function useSection<K extends SectionKey>(key: K): SiteContent[K] {
  return useSiteContent()[key];
}
