import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-pattern-grid flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <p className="text-7xl font-heading font-bold text-bauhaus-red mb-4">404</p>
        <h1 className="text-2xl font-medium mb-4">{t('notFound.heading')}</h1>
        <p className="text-muted-foreground mb-8">
          {t('notFound.description')}
        </p>
        <Button asChild>
          <Link to="/" className="gap-2">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t('projectDetail.backToPortfolio')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
