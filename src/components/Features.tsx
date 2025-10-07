import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  Bell, 
  Smartphone, 
  BarChart3, 
  Shield,
  Users,
  MessageCircle,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      description: "Visualize todos os seus compromissos em uma interface limpa e intuitiva. Arrastar e soltar para reagendar."
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description: "Acesse de qualquer dispositivo. Seus clientes podem agendar pelo celular, tablet ou computador."
    },
    {
      icon: Bell,
      title: "Notificações Automáticas",
      description: "Lembretes por WhatsApp, SMS e email. Reduza o número de faltas e melhore o relacionamento."
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Configure seus horários de trabalho, intervalos e bloqueios de forma personalizada."
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico de agendamentos, preferências e observações importantes."
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Acompanhe seu faturamento, horários mais procurados e performance do seu negócio."
    },
    {
      icon: MessageCircle,
      title: "Comunicação Direta",
      description: "Chat integrado para esclarecer dúvidas e manter contato direto com seus clientes."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Dados protegidos com criptografia. Conforme LGPD e melhores práticas de segurança."
    },
    {
      icon: Zap,
      title: "Integrações Poderosas",
      description: "Conecte com ferramentas que você já usa. APIs abertas para expandir funcionalidades."
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Funcionalidades que
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Fazem a Diferença
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para modernizar sua agenda e oferecer uma experiência 
            excepcional aos seus clientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;