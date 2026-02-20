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

const cardStyle = { backgroundColor: '#fefce8', borderColor: '#fde68a' };

const SectionCard = ({ icon, title, description, videoLinks, delay = 0 }: SectionCardProps) => {
  return (
    <Card 
      className="shadow-lg border overflow-hidden animate-fade-in"
      style={{ animationDelay: `${delay}ms`, ...cardStyle }}
    >
      <CardHeader className="pb-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#fde68a', color: '#78350f' }}>
          {icon}
        </div>
        <CardTitle className="text-2xl md:text-3xl font-serif text-stone-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {videoLinks && videoLinks.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-stone-800">Watch Videos:</p>
            <div className="flex flex-wrap gap-2">
              {videoLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  style={{ backgroundColor: '#fde68a', color: '#78350f' }}
                >
                  <Play className="w-3 h-3" />
                  {link.title}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="text-stone-600 leading-relaxed">
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
