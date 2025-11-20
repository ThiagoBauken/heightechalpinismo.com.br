import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Instalação de Pontos de Ancoragem", href: "/servicos/pontos-ancoragem" },
    { name: "Limpeza de Fachadas", href: "/servicos/limpeza-fachadas" },
    { name: "Montagem e Instalação de ACM e Fachada Ventilada", href: "/servicos/instalacao-acms" },
    { name: "Manutenções Elétricas e Eletrônicas", href: "/servicos/manutencoes-eletricas" },
    { name: "Mapeamento de Fachadas", href: "/servicos/mapeamento-fachadas" },
    { name: "Reforma Predial", href: "/servicos/reforma-predial" },
  ];

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#services" },
    { name: "Projetos", href: "/projetos" },
    { name: "Certificações", href: "/#certifications" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Heightech Alpinismo Industrial"
                className="h-10 w-auto max-w-[50px] object-contain mr-3"
                loading="lazy"
              />
              <span className="text-xl font-bold">Heightech Alpinismo</span>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas em serviços de alpinismo industrial e acesso por corda em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/heightechalpinismo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/heightechalpinismo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/heightechalpinismo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@heightechalpinismo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <a href="tel:+5547992145961" className="flex items-center hover:text-accent transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (47) 9214-5961
              </a>
              <a href="mailto:contato@heightechalpinismo.com.br" className="flex items-center hover:text-accent transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                contato@heightechalpinismo.com.br
              </a>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Balneário Camboriú e Região
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Seg-Sex: 8h-18h | Sáb: 8h-12h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Heightech Alpinismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
