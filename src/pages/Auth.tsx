import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, KeyRound, Loader2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import logo from '@/assets/wasaf-logo.jpg';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('signin');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    let active = true;

    const routeIfAdmin = async (hasSession: boolean) => {
      if (!hasSession) return;
      const { data: allowed } = await supabase.rpc('is_admin');
      if (active && allowed) navigate('/admin', { replace: true });
    };

    supabase.auth.getSession().then(({ data }) => routeIfAdmin(Boolean(data.session)));

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      routeIfAdmin(Boolean(session));
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, [navigate]);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const credentials = { email: email.trim(), password };

    if (mode === 'signin') {
      const { error } = await supabase.auth.signInWithPassword(credentials);
      if (error) {
        setIsSubmitting(false);
        toast({ title: 'Login failed', description: error.message, variant: 'destructive' });
        return;
      }

      const { data: allowed } = await supabase.rpc('is_admin');
      if (!allowed) {
        await supabase.auth.signOut();
        setIsSubmitting(false);
        setPassword('');
        toast({
          title: 'This user is not registered as an admin',
          description: 'Please enter the correct admin email address.',
          variant: 'destructive',
        });
        return;
      }

      setIsSubmitting(false);
      navigate('/admin', { replace: true });
      return;
    }


    const { data, error } = await supabase.auth.signUp({
      ...credentials,
      options: { emailRedirectTo: `${window.location.origin}/admin` },
    });
    setIsSubmitting(false);

    if (error) {
      toast({ title: 'Could not create account', description: error.message, variant: 'destructive' });
      return;
    }

    if (data.session) {
      navigate('/admin', { replace: true });
      return;
    }

    toast({
      title: 'Check your email',
      description: 'Confirm your email address, then sign in with your new password.',
    });
    setMode('signin');
  };

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      toast({ title: 'Enter your email first', variant: 'destructive' });
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast({ title: 'Reset failed', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Reset email sent', description: 'Follow the link to choose a new password.' });
  };

  return (
    <main className="min-h-screen bg-gradient-warm px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md flex-col justify-center">
        <Button variant="ghost" className="mb-8 w-fit" onClick={() => navigate('/')}>
          <ArrowLeft className="h-4 w-4" />
          Back to website
        </Button>

        <section className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <div className="mb-8 text-center">
            <img src={logo} alt="WASAF Logo" className="mx-auto mb-4 h-20 w-auto mix-blend-multiply" />
            <h1 className="font-display text-3xl font-bold text-primary-dark">Admin Login</h1>
            <p className="mt-2 text-sm text-muted-foreground">Secure access for approved WASAF administrators.</p>
          </div>

          <Tabs value={mode} onValueChange={setMode} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Set up password</TabsTrigger>
            </TabsList>
            <TabsContent value="signup" className="mt-3 text-xs text-muted-foreground">
              First time here? Create your password once, then sign in with it from now on.
            </TabsContent>
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                minLength={8}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : mode === 'signin' ? <LogIn className="h-4 w-4" /> : <KeyRound className="h-4 w-4" />}
              {mode === 'signin' ? 'Sign in' : 'Create password'}
            </Button>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="w-full text-center text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Forgot your password?
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Auth;
