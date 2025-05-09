
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LengthConverter from "./pages/LengthConverter";
import WeightConverter from "./pages/WeightConverter";
import TemperatureConverter from "./pages/TemperatureConverter";
import TimeConverter from "./pages/TimeConverter";
import AreaConverter from "./pages/AreaConverter";
import VolumeConverter from "./pages/VolumeConverter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/length" element={<LengthConverter />} />
          <Route path="/weight" element={<WeightConverter />} />
          <Route path="/temperature" element={<TemperatureConverter />} />
          <Route path="/time" element={<TimeConverter />} />
          <Route path="/area" element={<AreaConverter />} />
          <Route path="/volume" element={<VolumeConverter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
