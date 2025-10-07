import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-scheduling.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Transforme sua agenda</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Agendamento
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Inteligente
                </span>
                para Profissionais
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Simplifique sua rotina com uma plataforma moderna de agendamento. 
                Perfeita para estética, beleza, saúde e bem-estar.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">100% Online</div>
                  <div className="text-sm text-muted-foreground">Sem papel</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Disponível</div>
                  <div className="text-sm text-muted-foreground">Sempre ativo</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Clientes Felizes</div>
                  <div className="text-sm text-muted-foreground">Experiência única</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-warning hover:bg-warning/90 text-warning-foreground text-lg px-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
                onClick={() => window.location.href = '/cadastro'}
              >
                Começar Gratuitamente
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-2" 
                onClick={() => window.location.href = '/contato'}
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Social proof */}
            <p className="text-sm text-muted-foreground">
              ✨ Junte-se a centenas de profissionais que já transformaram sua agenda
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Interface moderna de agendamento digital"
                className="w-full h-auto"
              />
              
              {/* Floating elements */}
              <div className="absolute top-6 left-6 bg-card border shadow-medium rounded-xl p-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">Agendamento confirmado</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-card border shadow-medium rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">15 agendamentos hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;