import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import DigitalMarketing from "./pages/services/DigitalMarketing.tsx";
import WebDevelopment from "./pages/services/WebDevelopment.tsx";
import GraphicsDesign from "./pages/services/GraphicsDesign.tsx";
import Contact from "./pages/Contact.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import About from "./pages/About.tsx";

import ScrollToTop from "./components/ScrollToTop.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        {/* Global WhatsApp Button */}
        <WhatsAppButton />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/graphics-design"
            element={<GraphicsDesign />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;