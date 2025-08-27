import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/get-involved" element={<div className="min-h-screen pt-16 flex items-center justify-center"><h1 className="font-heading text-4xl">Get Involved - Coming Soon</h1></div>} />
              <Route path="/gallery" element={<div className="min-h-screen pt-16 flex items-center justify-center"><h1 className="font-heading text-4xl">Gallery - Coming Soon</h1></div>} />
              <Route path="/contact" element={<div className="min-h-screen pt-16 flex items-center justify-center"><h1 className="font-heading text-4xl">Contact - Coming Soon</h1></div>} />
              <Route path="/donate" element={<div className="min-h-screen pt-16 flex items-center justify-center"><h1 className="font-heading text-4xl">Donate - Coming Soon</h1></div>} />
              <Route path="/sponsor" element={<div className="min-h-screen pt-16 flex items-center justify-center"><h1 className="font-heading text-4xl">Sponsor a Child - Coming Soon</h1></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
