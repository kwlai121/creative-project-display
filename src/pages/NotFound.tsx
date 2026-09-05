import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-pattern-grid flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <p className="text-7xl font-heading font-medium text-brand mb-4">404</p>
        <h1 className="text-2xl font-medium mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/" className="gap-2">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
