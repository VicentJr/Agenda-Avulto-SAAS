import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  // Mock data para demonstração
  const stats = [
    {
      title: "Agendamentos Hoje",
      value: "12",
      icon: Calendar,
      description: "+2 desde ontem"
    },
    {
      title: "Próximo Agendamento",
      value: "14:30",
      icon: Clock,
      description: "Corte de Cabelo - João Silva"
    },
    {
      title: "Clientes Ativos",
      value: "248",
      icon: Users,
      description: "+12 este mês"
    },
    {
      title: "Faturamento Mensal",
      value: "R$ 8.450",
      icon: DollarSign,
      description: "+15% vs mês anterior"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Visão geral do seu negócio
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-subtle hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Próximos Agendamentos */}
        <Card className="border-subtle">
          <CardHeader>
            <CardTitle className="text-foreground">Próximos Agendamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">João Silva</p>
                    <p className="text-sm text-muted-foreground">Corte de Cabelo</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">14:30</p>
                  <p className="text-sm text-muted-foreground">Hoje</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Maria Santos</p>
                    <p className="text-sm text-muted-foreground">Manicure</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">16:00</p>
                  <p className="text-sm text-muted-foreground">Hoje</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Carlos Oliveira</p>
                    <p className="text-sm text-muted-foreground">Barba</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">09:00</p>
                  <p className="text-sm text-muted-foreground">Amanhã</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;