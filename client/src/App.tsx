import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";
import Home from "@/pages/home";
import FacadeCleaning from "@/pages/services/facade-cleaning";
import BuildingPainting from "@/pages/services/building-painting";
import BuildingMaintenance from "@/pages/services/building-maintenance";
import Waterproofing from "@/pages/services/waterproofing";
import TechnicalInspection from "@/pages/services/technical-inspection";
import EquipmentInstallation from "@/pages/services/equipment-installation";
import AnchorPoints from "@/pages/services/anchor-points";
import AcmInstallation from "@/pages/services/acm-installation";
import GlassCleaning from "@/pages/services/glass-cleaning";
import GlassRestoration from "@/pages/services/glass-restoration";
import CargoHoisting from "@/pages/services/cargo-hoisting";
import LedInstallation from "@/pages/services/led-installation";
import SiloCleaning from "@/pages/services/silo-cleaning";
import TrabalhosIndustriais from "@/pages/services/trabalhos-industriais";
import ManutencoesEletricas from "@/pages/services/manutencoes-eletricas";
import MapeamentoFachadas from "@/pages/services/mapeamento-fachadas";
import ReformaPredial from "@/pages/services/reforma-predial";
import Projects from "@/pages/projects";
import ProjectDetail from "@/pages/project-detail";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import BlogAdmin from "@/pages/blog-admin";
import Contact from "@/pages/contact";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          {/* Serviços principais */}
          <Route path="/servicos/lavacao-predial" component={FacadeCleaning} />
          <Route path="/servicos/pontos-ancoragem" component={AnchorPoints} />
          <Route path="/servicos/restauracao-fachadas" component={BuildingPainting} />
          <Route path="/servicos/instalacao-acms" component={AcmInstallation} />
          <Route path="/servicos/limpeza-vidros" component={GlassCleaning} />
          <Route path="/servicos/restauracao-vidros" component={GlassRestoration} />
          <Route path="/servicos/icamento-cargas" component={CargoHoisting} />
          <Route path="/servicos/banners-letra-caixa" component={EquipmentInstallation} />
          <Route path="/servicos/leds" component={LedInstallation} />
          <Route path="/servicos/vedacao-fachadas" component={Waterproofing} />
          <Route path="/servicos/pintura-industrial" component={BuildingMaintenance} />
          <Route path="/servicos/limpeza-silos" component={SiloCleaning} />
          <Route path="/servicos/trabalhos-industriais" component={TrabalhosIndustriais} />
          <Route path="/servicos/manutencoes-eletricas" component={ManutencoesEletricas} />
          <Route path="/servicos/mapeamento-fachadas" component={MapeamentoFachadas} />
          <Route path="/servicos/reforma-predial" component={ReformaPredial} />
          {/* Rotas antigas (manter compatibilidade) */}
          <Route path="/servicos/limpeza-fachadas" component={FacadeCleaning} />
          <Route path="/servicos/pintura-predial" component={BuildingPainting} />
          <Route path="/servicos/manutencao-predial" component={BuildingMaintenance} />
          <Route path="/servicos/impermeabilizacao" component={Waterproofing} />
          <Route path="/servicos/inspecao-tecnica" component={TechnicalInspection} />
          <Route path="/servicos/instalacao-equipamentos" component={EquipmentInstallation} />
          {/* Outras páginas */}
          <Route path="/projetos" component={Projects} />
          <Route path="/projetos/:id" component={ProjectDetail} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/blog/admin" component={BlogAdmin} />
          <Route path="/contato" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
