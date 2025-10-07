import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BarChart3, Settings, Users, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClientArea = () => {
  const dashboardCards = [
    {
      title: "Serviços",
      description: "Gerencie seus serviços e preços",
      icon: Settings,
      color: "bg-blue-500/10 text-blue-500",
      stats: "12 serviços ativos",
      action: "Gerenciar Serviços"
    },
    {
      title: "Horários",
      description: "Configure seus horários de atendimento",
      icon: Clock,
      color: "bg-green-500/10 text-green-500",
      stats: "Seg-Sex: 8h-18h",
      action: "Configurar Horários"
    },
    {
      title: "Dashboard",
      description: "Visualize suas estatísticas e relatórios",
      icon: BarChart3,
      color: "bg-purple-500/10 text-purple-500",
      stats: "45 agendamentos este mês",
      action: "Ver Relatórios"
    }
  ];

  const recentAppointments = [
    { client: "Maria Silva", service: "Corte de Cabelo", time: "14:00", status: "Confirmado" },
    { client: "João Santos", service: "Barba", time: "15:30", status: "Pendente" },
    { client: "Ana Costa", service: "Manicure", time: "16:00", status: "Confirmado" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Bem-vindo à sua Área do Cliente
            </h1>
            <p className="text-muted-foreground text-lg">
              Gerencie seu negócio de forma simples e eficiente
            </p>
          </div>

          {/* Main Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dashboardCards.map((card, index) => (
              <Card key={index} className="border-subtle hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground font-medium">
                      {card.stats}
                    </p>
                    <Button variant="outline" className="w-full">
                      {card.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Appointments */}
            <Card className="border-subtle">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Próximos Agendamentos
                    </CardTitle>
                    <CardDescription>Seus compromissos de hoje</CardDescription>
                  </div>
                  <Button size="sm" variant="ghost">
                    Ver Todos
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAppointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{appointment.client}</p>
                        <p className="text-sm text-muted-foreground">{appointment.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{appointment.time}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          appointment.status === 'Confirmado' 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Ações Rápidas
                </CardTitle>
                <CardDescription>Acesso rápido às principais funções</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <Button className="w-full justify-start bg-gradient-primary hover:shadow-elegant transition-all duration-300" size="lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    Novo Agendamento
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Users className="h-4 w-4 mr-2" />
                    Adicionar Cliente
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Settings className="h-4 w-4 mr-2" />
                    Adicionar Serviço
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Ver Relatório Mensal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Overview */}
          <div className="mt-12 bg-gradient-hero/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Visão Geral - Este Mês
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">45</div>
                <p className="text-muted-foreground">Agendamentos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">32</div>
                <p className="text-muted-foreground">Clientes Ativos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">R$ 2.8k</div>
                <p className="text-muted-foreground">Receita</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Taxa de Ocupação</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClientArea;
