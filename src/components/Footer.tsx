import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background">
                <Calendar className="h-4 w-4 text-foreground" />
              </div>
              <span className="text-lg font-bold">Agenda Avulto</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Plataforma moderna de agendamento para profissionais de estética, 
              beleza, saúde e bem-estar.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                Começar Grátis
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Preços</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Integrações</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Documentação</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Tutoriais</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-background/70" />
                <span className="text-background/70">contato@agendaavulto.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-background/70" />
                <span className="text-background/70">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-background/70" />
                <span className="text-background/70">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2024 Agenda Avulto. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Termos
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;