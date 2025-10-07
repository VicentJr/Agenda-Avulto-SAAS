import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, Zap } from "lucide-react";
import automationImage from "@/assets/automation-workspace.jpg";

const AutomationCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-destructive/5 via-background to-warning/5 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Warning Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-destructive/10 border-2 border-destructive/30">
              <AlertTriangle className="h-5 w-5 text-destructive animate-pulse" />
              <span className="text-sm font-semibold text-destructive">Alerta para Profissionais</span>
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                A Empresa que{" "}
                <span className="text-destructive">Não Automatizar</span>{" "}
                seus Processos{" "}
                <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
                  Perderá para Quem Já Faz
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Enquanto você perde tempo com agendamentos manuais, ligações e confirmações,
                seus concorrentes já estão <strong className="text-foreground">automatizando, economizando tempo</strong> e{" "}
                <strong className="text-foreground">atendendo mais clientes</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <span className="text-3xl font-bold text-foreground">+47%</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Aumento médio em produtividade
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-warning" />
                  <span className="text-3xl font-bold text-foreground">8h/sem</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tempo economizado em média
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-warning hover:bg-warning/90 text-warning-foreground text-lg px-8 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = '/cadastro'}
              >
                Automatizar Agora
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-2"
                onClick={() => window.location.href = '/contato'}
              >
                Ver Como Funciona
              </Button>
            </div>

            {/* Urgency Message */}
            <p className="text-sm text-muted-foreground italic">
              ⚡ Não deixe para amanhã. Seus concorrentes já começaram.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={automationImage} 
                alt="Workspace moderno com sistema de agendamento automatizado"
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              
              {/* Floating stat */}
              <div className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur-sm border shadow-medium rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Economia de Tempo</p>
                    <p className="text-2xl font-bold text-success">+320 horas/ano</p>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationCTA;
