import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Mensal",
      price: "R$ 49",
      period: "/mês",
      description: "Para profissionais que querem flexibilidade",
      icon: Zap,
      popular: false,
      features: [
        "Agenda digital completa",
        "Até 500 agendamentos/mês",
        "Notificações por WhatsApp",
        "Dashboard básico",
        "Suporte por email",
        "1 usuário"
      ],
      buttonText: "Começar Agora",
      buttonVariant: "outline" as const
    },
    {
      name: "Anual",
      price: "R$ 39",
      period: "/mês",
      originalPrice: "R$ 49",
      description: "2 meses grátis - Melhor custo-benefício",
      icon: Crown,
      popular: true,
      features: [
        "Tudo do plano Mensal",
        "Agendamentos ilimitados",
        "Relatórios avançados",
        "Integração com redes sociais",
        "Suporte prioritário",
        "Até 3 usuários",
        "Backup automático",
        "API personalizada"
      ],
      buttonText: "Economizar 20%",
      buttonVariant: "default" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container py-16 px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos e Preços
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Sem compromisso, 
            cancele quando quiser.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-subtle hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className="flex justify-center mb-4">
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-muted'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-elegant' 
                      : ''
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">
                    Tudo que está incluído:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-muted-foreground">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Existe um período de teste gratuito?
              </h3>
              <p className="text-muted-foreground">
                Oferecemos 7 dias grátis para você testar todas as funcionalidades da plataforma.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Como funciona o suporte técnico?
              </h3>
              <p className="text-muted-foreground">
                Plano Mensal: suporte por email em até 24h. Plano Anual: suporte prioritário em até 4h.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-subtle rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para Transformar Sua Agenda?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já modernizaram seus agendamentos.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
            Começar Teste Grátis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;