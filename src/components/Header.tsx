import { Button } from "@/components/ui/button";
import { Calendar, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Calendar className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Agenda Avulto</span>
        </a>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="/precos" className="text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </a>
          <a href="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex" onClick={() => window.location.href = '/login'}>
            Entrar
          </Button>
          <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity" onClick={() => window.location.href = '/cadastro'}>
            Começar Grátis
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;