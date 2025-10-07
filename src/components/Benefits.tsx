import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumente seu Faturamento",
      description: "Reduza faltas e cancellamentos de última hora. Otimize sua agenda para atender mais clientes.",
      stats: "Até 30% mais agendamentos"
    },
    {
      icon: Clock,
      title: "Economize Tempo",
      description: "Automatize lembretes, confirmações e reagendamentos. Foque no que realmente importa: seus clientes.",
      stats: "5+ horas economizadas por semana"
    },
    {
      icon: Heart,
      title: "Melhore a Experiência",
      description: "Ofereça conveniência e profissionalismo. Clientes satisfeitos recomendam mais e retornam sempre.",
      stats: "95% de satisfação dos clientes"
    }
  ];

  const features = [
    "Agenda online 24/7 disponível",
    "Lembretes automáticos por WhatsApp",
    "Relatórios de faturamento",
    "Gestão completa de clientes",
    "Suporte técnico especializado",
    "Atualizações gratuitas sempre"
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Por que Escolher a
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Agenda Avulto?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Transforme sua forma de trabalhar e ofereça uma experiência 
                digital excepcional para seus clientes.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                          <CheckCircle className="h-4 w-4" />
                          {benefit.stats}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Começar Gratuitamente
            </Button>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Tudo Incluído no Plano
              </h3>
              <p className="text-muted-foreground">
                Sem surpresas, sem custos ocultos. Acesso completo a todas as funcionalidades.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Highlight Card */}
            <Card className="border-2 border-primary/20 bg-gradient-accent">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    🎉 Oferta de Lançamento
                  </h4>
                  <p className="text-muted-foreground">
                    Primeiros 30 dias gratuitos + desconto especial para novos usuários.
                  </p>
                  <Button variant="outline" className="w-full">
                    Aproveitar Oferta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;