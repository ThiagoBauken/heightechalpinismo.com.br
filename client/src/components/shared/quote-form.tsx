import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send, Loader2, ChevronRight, ChevronLeft, User, Building2, FileText, CheckCircle2 } from "lucide-react";
import { analytics } from "@/lib/analytics-tracker";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  projectDescription: string;
  buildingType?: string;
  buildingHeight?: string;
  urgency?: string;
}

export default function QuoteForm() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    projectDescription: "",
    buildingType: "",
    buildingHeight: "",
    urgency: ""
  });

  const quoteMutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      return await apiRequest("POST", "/api/quote", data);
    },
    onSuccess: () => {
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve para discutir seu projeto.",
      });
      analytics.trackFormSubmission('quote', formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        city: "",
        projectDescription: "",
        buildingType: "",
        buildingHeight: "",
        urgency: ""
      });
      setCurrentStep(1);
    },
    onError: () => {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    quoteMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.name && formData.email && formData.phone);
      case 2:
        return !!(formData.service && formData.city);
      case 3:
        return !!formData.projectDescription;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios antes de continuar.",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const services = [
    "Limpeza de Fachadas",
    "Pintura Predial",
    "Manutenção Predial",
    "Impermeabilização",
    "Inspeção Técnica",
    "Instalação de Equipamentos",
    "Soldas e Reparos Estruturais",
    "Poda de Árvores em Altura",
    "Outros"
  ];

  const buildingTypes = [
    "Residencial",
    "Comercial",
    "Industrial",
    "Hospitalar",
    "Educacional",
    "Hoteleiro",
    "Shopping Center",
    "Outros"
  ];

  const buildingHeights = [
    "Até 5 andares",
    "6 a 10 andares",
    "11 a 20 andares",
    "21 a 30 andares",
    "Acima de 30 andares"
  ];

  const urgencyLevels = [
    "Não urgente",
    "Moderado",
    "Urgente",
    "Muito urgente"
  ];

  const steps = [
    { number: 1, title: "Contato", icon: User },
    { number: 2, title: "Projeto", icon: Building2 },
    { number: 3, title: "Detalhes", icon: FileText },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Solicite seu Orçamento</CardTitle>
        <CardDescription>
          Preencha o formulário em etapas e entraremos em contato para discutir seu projeto
        </CardDescription>

        {/* Progress Steps */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                        ${isActive ? 'border-accent bg-accent text-white scale-110' : ''}
                        ${isCompleted ? 'border-green-500 bg-green-500 text-white' : ''}
                        ${!isActive && !isCompleted ? 'border-gray-300 text-gray-400' : ''}
                      `}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`
                        text-xs mt-1 font-medium transition-colors duration-300
                        ${isActive ? 'text-accent' : ''}
                        ${isCompleted ? 'text-green-500' : ''}
                        ${!isActive && !isCompleted ? 'text-gray-400' : ''}
                      `}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-0.5 mx-2 bg-gray-200">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isCompleted ? 'bg-green-500 w-full' : 'bg-gray-200 w-0'
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          {/* Step 1: Contact Information */}
          <div className={`space-y-4 transition-all duration-300 ${currentStep === 1 ? 'block' : 'hidden'}`}>
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Suas Informações de Contato</h3>
              <p className="text-sm text-gray-600 mt-1">Para entrarmos em contato com você</p>
            </div>

            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Seu nome completo"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="seu@email.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(47) 9214-5961"
                className="mt-1"
              />
            </div>
          </div>

          {/* Step 2: Project Details */}
          <div className={`space-y-4 transition-all duration-300 ${currentStep === 2 ? 'block' : 'hidden'}`}>
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Detalhes do Projeto</h3>
              <p className="text-sm text-gray-600 mt-1">Informações sobre o serviço desejado</p>
            </div>

            <div>
              <Label htmlFor="service">Serviço de Interesse *</Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="city">Cidade/Estado *</Label>
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="São Paulo/SP"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="buildingType">Tipo de Edificação</Label>
              <Select value={formData.buildingType} onValueChange={(value) => handleInputChange("buildingType", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {buildingTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="buildingHeight">Altura do Edifício</Label>
              <Select value={formData.buildingHeight} onValueChange={(value) => handleInputChange("buildingHeight", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione a altura" />
                </SelectTrigger>
                <SelectContent>
                  {buildingHeights.map((height) => (
                    <SelectItem key={height} value={height}>
                      {height}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Step 3: Description & Urgency */}
          <div className={`space-y-4 transition-all duration-300 ${currentStep === 3 ? 'block' : 'hidden'}`}>
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Descrição do Projeto</h3>
              <p className="text-sm text-gray-600 mt-1">Conte-nos mais sobre suas necessidades</p>
            </div>

            <div>
              <Label htmlFor="projectDescription">Descrição do Projeto *</Label>
              <Textarea
                id="projectDescription"
                value={formData.projectDescription}
                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                placeholder="Descreva detalhes do seu projeto, área aproximada, tipo de serviço necessário, etc."
                rows={6}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="urgency">Urgência do Projeto</Label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione a urgência" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 gap-4">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex-1"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex-1 bg-accent hover:bg-yellow-600 text-white"
              >
                Próximo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex-1 bg-accent hover:bg-yellow-600 text-white font-semibold"
                disabled={quoteMutation.isPending}
              >
                {quoteMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Solicitação
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
