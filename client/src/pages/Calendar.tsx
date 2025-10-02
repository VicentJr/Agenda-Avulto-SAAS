import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Phone, Calendar as CalendarIcon, Plus } from "lucide-react";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data para demonstração
  const appointments = [
    {
      id: 1,
      time: "09:00",
      duration: 60,
      client: "João Silva",
      service: "Corte de Cabelo",
      phone: "(11) 99999-1111",
      status: "confirmado"
    },
    {
      id: 2,
      time: "10:30",
      duration: 45,
      client: "Maria Santos",
      service: "Manicure",
      phone: "(11) 99999-2222",
      status: "pendente"
    },
    {
      id: 3,
      time: "14:30",
      duration: 90,
      client: "Carlos Oliveira",
      service: "Corte + Barba",
      phone: "(11) 99999-3333",
      status: "confirmado"
    },
    {
      id: 4,
      time: "16:00",
      duration: 30,
      client: "Ana Costa",
      service: "Sobrancelha",
      phone: "(11) 99999-4444",
      status: "confirmado"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "pendente":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "cancelado":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Agenda
            </h1>
            <p className="text-muted-foreground">
              Gerencie seus agendamentos
            </p>
          </div>
          <Button className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
            <Plus className="h-4 w-4 mr-2" />
            Novo Agendamento
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="lg:col-span-1 border-subtle">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Selecionar Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-0"
              />
            </CardContent>
          </Card>

          {/* Appointments */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-subtle">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Agendamentos de {date?.toLocaleDateString("pt-BR", { 
                    weekday: "long", 
                    year: "numeric", 
                    month: "long", 
                    day: "numeric" 
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="border border-subtle rounded-lg p-4 hover:shadow-elegant transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">
                                {appointment.time}
                              </h3>
                              <Badge className={getStatusColor(appointment.status)}>
                                {appointment.status}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="text-foreground font-medium">
                                  {appointment.client}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">
                                  {appointment.phone}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {appointment.service} • {appointment.duration} min
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {appointments.length === 0 && (
                    <div className="text-center py-12">
                      <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        Nenhum agendamento
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Você não possui agendamentos para esta data.
                      </p>
                      <Button className="bg-gradient-primary">
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Agendamento
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;