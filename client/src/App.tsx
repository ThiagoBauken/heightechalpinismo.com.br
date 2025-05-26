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
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/servicos/limpeza-fachadas" component={FacadeCleaning} />
          <Route path="/servicos/pintura-predial" component={BuildingPainting} />
          <Route path="/servicos/manutencao-predial" component={BuildingMaintenance} />
          <Route path="/servicos/impermeabilizacao" component={Waterproofing} />
          <Route path="/servicos/inspecao-tecnica" component={TechnicalInspection} />
          <Route path="/servicos/instalacao-equipamentos" component={EquipmentInstallation} />
          <Route path="/projetos" component={Projects} />
          <Route path="/contato" component={Contact} />
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
