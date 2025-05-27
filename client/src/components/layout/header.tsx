import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, Phone } from "lucide-react";

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

  const services = [
    { name: "Limpeza de Fachadas", href: "/servicos/limpeza-fachadas" },
    { name: "Pintura Predial", href: "/servicos/pintura-predial" },
    { name: "Manutenção Predial", href: "/servicos/manutencao-predial" },
    { name: "Impermeabilização", href: "/servicos/impermeabilizacao" },
    { name: "Inspeção Técnica", href: "/servicos/inspecao-tecnica" },
    { name: "Instalação de Equipamentos", href: "/servicos/instalacao-equipamentos" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Mountain className="text-primary text-2xl mr-3" />
              <span className="text-xl font-bold text-gray-900">Heightech Alpinismo</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-600 hover:text-primary transition-colors duration-200 text-sm xl:text-base ${
                  location === item.href ? "text-primary font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
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
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2"
                    >
                      {item.name}
                    </Link>
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
