import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!"
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "contato@agendaavulto.com",
      action: "Enviar email"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "(11) 99999-9999",
      action: "Ligar agora"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "(11) 99999-9999",
      action: "Enviar mensagem"
    },
    {
      icon: MapPin,
      title: "Endereço",
      description: "São Paulo, SP",
      action: "Ver no mapa"
    }
  ];

  const supportHours = [
    { day: "Segunda - Sexta", hours: "8h às 18h" },
    { day: "Sábados", hours: "9h às 14h" },
    { day: "Domingos", hours: "Fechado" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container py-16 px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco e tire todas as suas dúvidas.
          </p>
        </div>
      </div>

      <div className="container py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-subtle shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Como podemos ajudar?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva sua dúvida ou sugestão..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="border-subtle">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          {info.description}
                        </p>
                        <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-primary">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Hours */}
            <Card className="border-subtle">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">
                        {schedule.day}
                      </span>
                      <span className="text-muted-foreground">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="border-subtle bg-gradient-subtle">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Dúvidas Frequentes
                </h3>
                <p className="text-muted-foreground mb-4">
                  Encontre respostas rápidas para as perguntas mais comuns.
                </p>
                <Button variant="outline">
                  Ver FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Tempo de Resposta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                4h
              </div>
              <p className="text-muted-foreground">
                Email - Suporte prioritário
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                1h
              </div>
              <p className="text-muted-foreground">
                WhatsApp - Questões urgentes
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                24h
              </div>
              <p className="text-muted-foreground">
                Email - Suporte padrão
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;