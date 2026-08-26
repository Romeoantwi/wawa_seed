import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import logo from '@/assets/wasaf-logo.jpg';

const Auth = () => {
  const [email, setEmail] = useState('lucysaki99@gmail.com');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate('/admin', { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const redirectTo = `${window.location.origin}/admin`;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: redirectTo },
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: 'Login link failed',
        description: error.message,
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Check your email',
      description: 'Open the secure login link to access the admin dashboard.',
    });
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

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
              Send login link
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Auth;