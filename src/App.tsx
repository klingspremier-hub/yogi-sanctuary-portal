import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PROD_BASENAME = "/yin-yoga-teacher-training/spain/sotogrande/may-2026";

const App = () => {
  // In production we might be hosted either at the domain root (Lovable) or under a WP subdirectory.
  // Detect at runtime to avoid a blank screen from a mismatched basename.
  const basename =
    import.meta.env.MODE !== "production"
      ? ""
      : window.location.pathname.startsWith(PROD_BASENAME)
        ? PROD_BASENAME
        : "";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
