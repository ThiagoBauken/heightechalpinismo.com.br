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
import { Send, Loader2 } from "lucide-react";

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

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Solicite seu Orçamento</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo e entraremos em contato para discutir seu projeto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(11) 99999-9999"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="service">Serviço de Interesse *</Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
                <SelectTrigger>
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
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="buildingType">Tipo de Edificação</Label>
              <Select value={formData.buildingType} onValueChange={(value) => handleInputChange("buildingType", value)}>
                <SelectTrigger>
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
                <SelectTrigger>
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

          <div>
            <Label htmlFor="urgency">Urgência do Projeto</Label>
            <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
              <SelectTrigger>
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

          <div>
            <Label htmlFor="projectDescription">Descrição do Projeto *</Label>
            <Textarea
              id="projectDescription"
              value={formData.projectDescription}
              onChange={(e) => handleInputChange("projectDescription", e.target.value)}
              placeholder="Descreva detalhes do seu projeto, área aproximada, tipo de serviço necessário, etc."
              rows={4}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-yellow-600 text-white font-semibold"
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
        </form>
      </CardContent>
    </Card>
  );
}
