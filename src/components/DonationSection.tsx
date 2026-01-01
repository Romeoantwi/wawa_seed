import { DollarSign, CreditCard, Building2, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const DonationSection = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const donationMethods = [
    {
      icon: DollarSign,
      title: 'CashApp',
      details: '$KAAF19',
      color: 'bg-green-500',
    },
    {
      icon: CreditCard,
      title: 'Zelle',
      details: 'lucysaki99@gmail.com',
      color: 'bg-purple-500',
    },
    {
      icon: Building2,
      title: 'Bank Transfer',
      bankName: 'Universal Merchant Bank',
      accountName: 'K A Amissah Foundation. Inc',
      accountNumber: '0292922566012',
      color: 'bg-primary',
    },
  ];

  return (
    <section id="donate" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Support Our Mission
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your generous donation helps us continue empowering children, women, and families across Ghana.
            Every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {donationMethods.map((method, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className={`w-14 h-14 ${method.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <method.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-display">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {method.bankName ? (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{method.bankName}</p>
                    <p className="font-medium text-foreground">{method.accountName}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-mono text-lg text-primary">{method.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(method.accountNumber!, 'Account number')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-mono text-xl text-primary">{method.details}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(method.details!, method.title)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          For questions about donations, please <a href="#contact" className="text-primary hover:underline">contact us</a>.
        </p>
      </div>
    </section>
  );
};

export default DonationSection;
