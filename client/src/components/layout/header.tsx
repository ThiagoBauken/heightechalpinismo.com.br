import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#services" },
    { name: "Projetos", href: "/projetos" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  // Função para fazer scroll suave para âncoras
  const scrollToAnchor = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      const headerOffset = 80; // Altura do header fixo + margem
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Detectar hash na URL ao carregar a página ou mudar de rota
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => scrollToAnchor(window.location.hash), 100);
    }
  }, [location]);

  // Handler para links com âncora
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const anchor = href.substring(1); // Remove o '/'

      // Se não estamos na home, redirecionar primeiro
      if (location !== '/') {
        window.location.href = href;
      } else {
        // Já estamos na home, apenas fazer scroll
        scrollToAnchor(anchor);
        window.history.pushState({}, '', href);
      }
    }
  };

  const services = [
    { name: "Instalação de Pontos de Ancoragem", href: "/servicos/pontos-ancoragem" },
    { name: "Limpeza de Fachadas", href: "/servicos/limpeza-fachadas" },
    { name: "Montagem e Instalação de ACM e Fachada Ventilada", href: "/servicos/instalacao-acms" },
    { name: "Manutenções Elétricas e Eletrônicas", href: "/servicos/manutencoes-eletricas" },
    { name: "Mapeamento de Fachadas", href: "/servicos/mapeamento-fachadas" },
    { name: "Reforma Predial", href: "/servicos/reforma-predial" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                src="/logo.png"
                alt="Heightech Alpinismo Industrial"
                className="h-10 w-auto max-w-[50px] object-contain mr-3"
                loading="lazy"
              />
              <span className="text-xl font-bold text-gray-900">Heightech Alpinismo</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-gray-600 hover:text-primary transition-colors duration-200 text-sm xl:text-base cursor-pointer ${
                  location === item.href || (item.href.startsWith('/#') && location === '/') ? "text-primary font-medium" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <Link href="/contato">
              <Button className="bg-accent hover:bg-red-600 text-white text-sm xl:text-base px-4 xl:px-6">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Solicitar Orçamento</span>
                <span className="xl:hidden">Orçamento</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsOpen(false);
                      }}
                      className="text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-2 px-3">Serviços</h3>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm block"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <Link href="/contato" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-yellow-600 text-white mt-4">
                      <Phone className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
