import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Target, 
  Palette, 
  Smartphone, 
  Shield,
  CheckCircle
} from 'lucide-react';

interface ResultData {
  value: string;
  displayValue: string;
  shortDesc: string;
  icon: string;
  color: string;
  bgColor: string;
  context: string;
  impact: string;
  metric: string;
}

interface ResultsData {
  results: ResultData[] | string[];
}

interface ResultsProps {
  content: ResultsData | string;
}

// Icon mapping
const iconMap = {
  TrendingUp,
  Users,
  Heart,
  Target,
  Palette,
  Smartphone,
  Shield,
  CheckCircle
};

// Legacy parsing functions for backward compatibility with markdown format
const getMetricContext = (outcome: string) => {
  const text = outcome.toLowerCase();
  
  if (text.includes('4x') && text.includes('activation')) {
    return {
      icon: 'TrendingUp',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      context: 'User onboarding optimization',
      impact: 'Significantly improved user journey and reduced drop-off rates',
      metric: 'Growth rate that exceeded industry benchmarks by 300%'
    };
  }
  
  if (text.includes('21x') && text.includes('sign-up')) {
    return {
      icon: 'Users',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      context: 'Conversion funnel optimization',
      impact: 'Dramatically streamlined registration process',
      metric: 'Exceptional conversion rate improvement through UX redesign'
    };
  }
  
  if (text.includes('88%') && text.includes('satisfaction')) {
    return {
      icon: 'Heart',
      color: 'text-red-500 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      context: 'Customer experience enhancement',
      impact: 'High user satisfaction indicates strong product-market fit',
      metric: 'Score places product in top tier of customer satisfaction'
    };
  }
  
  if (text.includes('nps') && text.includes('50')) {
    return {
      icon: 'Target',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      context: 'Brand loyalty transformation',
      impact: 'Moved from poor to excellent NPS category',
      metric: '44-point improvement represents exceptional customer advocacy'
    };
  }
  
  if (text.includes('90%') && text.includes('design system')) {
    return {
      icon: 'Palette',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      context: 'Design consistency achievement',
      impact: 'Unified user experience across all touchpoints',
      metric: 'High adoption rate demonstrates effective design governance'
    };
  }
  
  if (text.includes('100%') && text.includes('usability')) {
    return {
      icon: 'Smartphone',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      context: 'Mobile-first responsive design',
      impact: 'Full accessibility across all device sizes',
      metric: 'Complete mobile optimization ensures universal access'
    };
  }
  
  if (text.includes('wcag') || text.includes('compliance')) {
    return {
      icon: 'Shield',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
      context: 'Accessibility standards compliance',
      impact: 'Inclusive design for users with disabilities',
      metric: 'AA compliance ensures legal requirements and inclusive access'
    };
  }
  
  return {
    icon: 'CheckCircle',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    context: 'Project milestone',
    impact: 'Successful delivery of key objective',
    metric: 'Important achievement contributing to overall success'
  };
};

const parseDisplayMetric = (outcome: string) => {
  const percentMatch = outcome.match(/(\d+)%/);
  const multiplyMatch = outcome.match(/(\d+)x/);
  const npsMatch = outcome.match(/(\d+) to (\d+)/);
  
  if (percentMatch) {
    return {
      displayValue: percentMatch[1] + '%',
      fullText: outcome,
      shortDesc: outcome.replace(percentMatch[0], '').trim()
    };
  }
  
  if (multiplyMatch) {
    return {
      displayValue: multiplyMatch[1] + 'x',
      fullText: outcome,
      shortDesc: outcome.replace(multiplyMatch[0], '').trim()
    };
  }
  
  if (npsMatch) {
    const improvement = parseInt(npsMatch[2]) - parseInt(npsMatch[1]);
    return {
      displayValue: `+${improvement}`,
      fullText: outcome,
      shortDesc: 'NPS improvement'
    };
  }
  
  return {
    displayValue: '✓',
    fullText: outcome,
    shortDesc: outcome.length > 30 ? outcome.substring(0, 30) + '...' : outcome
  };
};

const MetricItem = ({ result, index }: { result: ResultData | string, index: number }) => {
  let metric: { displayValue: string; shortDesc: string };
  let context: { icon: string; color: string; bgColor: string };
  
  if (typeof result === 'string') {
    // Legacy format - parse from string
    metric = parseDisplayMetric(result);
    context = getMetricContext(result);
  } else {
    // New format - use structured data
    metric = {
      displayValue: result.displayValue,
      shortDesc: result.shortDesc
    };
    context = {
      icon: result.icon,
      color: result.color,
      bgColor: result.bgColor
    };
  }
  
  const Icon = iconMap[context.icon as keyof typeof iconMap] || CheckCircle;
  
  return (
    <div 
      className="inline-flex items-center gap-3 px-4 py-3 rounded-full border bg-muted/30 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Icon size={18} className="text-muted-foreground" aria-hidden="true" />
      <span className="text-lg font-semibold text-foreground">
        {metric.displayValue}
      </span>
      <span className="text-base text-muted-foreground">
        {metric.shortDesc}
      </span>
    </div>
  );
};

const Results: React.FC<ResultsProps> = ({ content }) => {
  if (!content) return null;
  
  let results: (ResultData | string)[] = [];
  
  if (typeof content === 'string') {
    // Legacy string format
    results = content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  } else if (content.results) {
    // New structured format
    results = content.results;
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-medium mb-2">Key Results</h2>
        <p className="text-sm text-muted-foreground">
          Measurable impact and results achieved through this project
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {results.map((result, index) => (
          <MetricItem
            key={index}
            result={result}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;