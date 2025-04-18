
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cities from "./pages/Cities";
import Prediction from "./pages/Prediction";
import Auth from "./components/ui/Auth";
import UserProfile from "./pages/UserProfile";
import About from "./pages/About"; // ⬅️ Add this line
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          
          <Route path="/" element={<Auth />} />
          <Route path="/index" element={<Index />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />

                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
