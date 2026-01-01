import { useState } from 'react';
import { DollarSign, Mail, Building2, ExternalLink, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface DonationDialogProps {
  children: React.ReactNode;
}

const DonationDialog = ({ children }: DonationDialogProps) => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied to clipboard",
      description: `${field} has been copied`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Make a Donation</DialogTitle>
          <DialogDescription>
            Choose your preferred payment method to support our mission.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* CashApp */}
          <a
            href="https://cash.app/$KAAF19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">CashApp</h3>
              <p className="text-primary font-mono">$KAAF19</p>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          {/* Zelle */}
          <button
            onClick={() => copyToClipboard('lucysaki99@gmail.com', 'Zelle email')}
            className="w-full flex items-center gap-4 p-4 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors text-left"
          >
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Zelle</h3>
              <p className="text-primary font-mono text-sm">lucysaki99@gmail.com</p>
            </div>
            {copiedField === 'Zelle email' ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <span className="text-xs text-muted-foreground">Click to copy</span>
            )}
          </button>

          {/* Bank Transfer */}
          <div className="p-4 rounded-lg border border-border bg-background">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Bank Transfer</h3>
                <p className="text-sm text-muted-foreground">Universal Merchant Bank</p>
              </div>
            </div>
            
            <div className="space-y-2 pl-16">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Account Name</p>
                <p className="font-medium text-foreground">K A Amissah Foundation. Inc</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Account Number</p>
                  <p className="font-mono text-primary text-lg">0292922566012</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard('0292922566012', 'Account number')}
                >
                  {copiedField === 'Account number' ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      Copied
                    </>
                  ) : (
                    'Copy'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Thank you for supporting WASAF's mission to empower communities in Ghana.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;
