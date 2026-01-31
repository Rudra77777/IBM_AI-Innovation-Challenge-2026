import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AnimatedCityBackground from "./components/AnimatedCityBackground";
import Index from "./pages/Index";
import ContractorSelection from "./pages/ContractorSelection";
import ReportDamage from "./pages/ReportDamage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen">
          <AnimatedCityBackground />
          <div className="relative z-10">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contractors" element={<ContractorSelection />} />
                <Route path="/report" element={<ReportDamage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
