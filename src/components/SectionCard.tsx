import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface VideoLink {
  title: string;
  url: string;
}

interface SectionCardProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
  videoLinks?: VideoLink[];
  delay?: number;
}

const SectionCard = ({ icon, title, description, videoLinks, delay = 0 }: SectionCardProps) => {
  return (
    <Card 
      className="gradient-card shadow-card border-0 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="pb-4">
        <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4 text-accent-foreground">
          {icon}
        </div>
        <CardTitle className="text-2xl md:text-3xl font-serif text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-muted-foreground leading-relaxed">
          {description}
        </div>

        {videoLinks && videoLinks.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Learn More:</p>
            <div className="flex flex-wrap gap-2">
              {videoLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-soft"
                >
                  <Play className="w-3 h-3" />
                  {link.title}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
