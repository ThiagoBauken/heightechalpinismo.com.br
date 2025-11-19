import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContactForm } from "@/hooks/use-contact-form";
import { MapPin, Phone, Mail, Clock, Send, Loader2, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import QuoteForm from "@/components/shared/quote-form";

export default function Contact() {
  const { formData, handleInputChange, handleSubmit, isLoading } = useContactForm();

  const services = [
    "Limpeza de Fachadas",
    "Pintura Predial",
    "Manutenção Predial",
    "Impermeabilização",
    "Inspeção Técnica",
    "Instalação de Equipamentos",
    "Outros"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Solicite seu orçamento ou tire suas dúvidas conosco. Atendemos em todo o Brasil
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-accent text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">Atendemos em todo o território nacional</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-accent text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-accent text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contato@heightechalpinismo.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-accent text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/heightechalpinismo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors duration-200">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/heightechalpinismo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors duration-200">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/heightechalpinismo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@heightechalpinismo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors duration-200">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome *</Label>
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
                        placeholder="(47) 9214-5961"
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

                  <div>
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
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

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva detalhes do seu projeto..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-yellow-600 text-white font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicite um Orçamento Detalhado</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para orçamentos mais precisos, preencha o formulário abaixo com informações detalhadas do seu projeto
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
