import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: "",
    teamSize: "",
    mainGoal: "",
    experience: ""
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Cadastro recebido!",
        description: "Você será redirecionado para criar sua conta."
      });
    }
  };

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Qual é o seu tipo de negócio?
              </h3>
              <p className="text-muted-foreground">
                Escolha a opção que melhor descreve sua atividade
              </p>
            </div>
            <RadioGroup value={formData.businessType} onValueChange={(value) => handleSelect("businessType", value)}>
              {[
                { value: "estetica", label: "Estética e Beleza", description: "Salões, clínicas de estética, spa" },
                { value: "saude", label: "Saúde e Bem-estar", description: "Consultórios, clínicas, terapias" },
                { value: "fitness", label: "Fitness e Esportes", description: "Personal trainer, academias, pilates" },
                { value: "outros", label: "Outros Serviços", description: "Consultorias, aulas particulares" }
              ].map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="cursor-pointer flex-1">
                    <div className="font-medium text-foreground">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Qual o tamanho da sua equipe?
              </h3>
              <p className="text-muted-foreground">
                Quantas pessoas trabalham com você?
              </p>
            </div>
            <RadioGroup value={formData.teamSize} onValueChange={(value) => handleSelect("teamSize", value)}>
              {[
                { value: "solo", label: "Apenas eu", description: "Trabalho sozinho(a)" },
                { value: "small", label: "2-5 pessoas", description: "Equipe pequena" },
                { value: "medium", label: "6-15 pessoas", description: "Equipe média" },
                { value: "large", label: "Mais de 15 pessoas", description: "Equipe grande" }
              ].map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="cursor-pointer flex-1">
                    <div className="font-medium text-foreground">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Qual é o seu principal objetivo?
              </h3>
              <p className="text-muted-foreground">
                O que você espera alcançar com a plataforma?
              </p>
            </div>
            <RadioGroup value={formData.mainGoal} onValueChange={(value) => handleSelect("mainGoal", value)}>
              {[
                { value: "organize", label: "Organizar minha agenda", description: "Centralizar todos os agendamentos" },
                { value: "grow", label: "Crescer meu negócio", description: "Aumentar clientes e receita" },
                { value: "automate", label: "Automatizar processos", description: "Reduzir trabalho manual" },
                { value: "improve", label: "Melhorar experiência do cliente", description: "Oferecer melhor atendimento" }
              ].map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="cursor-pointer flex-1">
                    <div className="font-medium text-foreground">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Você já usou algum sistema de agendamento?
              </h3>
              <p className="text-muted-foreground">
                Queremos personalizar sua experiência
              </p>
            </div>
            <RadioGroup value={formData.experience} onValueChange={(value) => handleSelect("experience", value)}>
              {[
                { value: "never", label: "Nunca usei", description: "Primeira vez com sistema digital" },
                { value: "basic", label: "Já usei sistemas simples", description: "Planilhas ou agendas básicas" },
                { value: "advanced", label: "Já usei sistemas completos", description: "Plataformas profissionais" },
                { value: "switching", label: "Estou migrando de outro sistema", description: "Quero trocar de ferramenta" }
              ].map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="cursor-pointer flex-1">
                    <div className="font-medium text-foreground">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      
      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch(currentStep) {
      case 1: return formData.businessType !== "";
      case 2: return formData.teamSize !== "";
      case 3: return formData.mainGoal !== "";
      case 4: return formData.experience !== "";
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-primary">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Vamos começar sua jornada
            </h1>
            <p className="text-muted-foreground">
              Responda algumas perguntas para personalizarmos sua experiência
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Etapa {currentStep} de 4</span>
              <span className="text-sm font-medium text-primary">{(currentStep / 4 * 100).toFixed(0)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          <Card className="border-subtle shadow-elegant">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-2 flex-1 rounded-full transition-all ${
                      step <= currentStep ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              {renderStep()}

              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                )}
                <Button 
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex-1 bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                >
                  {currentStep === 4 ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Finalizar
                    </>
                  ) : (
                    <>
                      Próximo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center pt-6 mt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  Já tem uma conta?{" "}
                  <a href="/login" className="text-primary font-medium hover:underline">
                    Fazer login
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
