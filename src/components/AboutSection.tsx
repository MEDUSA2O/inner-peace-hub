import { Building2, Globe, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const keyWebsites = [
    { name: "Yoga Vidya Pranic Healing Trust of Delhi", url: "https://pranichealing-delhi.in/" },
    { name: "World Pranic Healing Foundation of India (WPHFI)", url: "https://www.worldpranichealing.com/" },
    { name: "Institute for Inner Studies, Inc. (IIS Inc.)", url: "https://www.instituteforinnerstudies.com.ph/" },
  ];

  return (
    <section className="py-16 gradient-section">
      <div className="container px-6 space-y-8">
        {/* Organization Info */}
        <Card className="gradient-card shadow-card border-0 overflow-hidden animate-fade-in" style={{ animationDelay: "400ms" }}>
          <CardContent className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                  Yoga Vidya Pranic Healing Trust of Delhi
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Part of a Global Network</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The <strong className="text-foreground">Yoga Vidya Pranic Healing Trust of Delhi</strong> is a non-profit organization that has been actively engaged in healing and meditation initiatives over the last 30 years in the Delhi NCR area.
              </p>
              <p>
                Our parent organization is <strong className="text-foreground">World Pranic Healing Foundation of India (WPHFI)</strong>, which is an affiliate of WPHF-Manila with its key entity being <strong className="text-foreground">Institute for Inner Studies, Inc. (IIS Inc.)</strong>, Philippines.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">Years of Service</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">Delhi NCR</p>
                  <p className="text-sm text-muted-foreground">Region Covered</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">Global</p>
                  <p className="text-sm text-muted-foreground">Network Affiliation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Websites */}
        <Card className="gradient-card shadow-card border-0 overflow-hidden animate-fade-in" style={{ animationDelay: "500ms" }}>
          <CardContent className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                  Key Websites
                </h2>
                <p className="text-muted-foreground text-sm">
                  Learn more about Pranic Healing worldwide
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {keyWebsites.map((site, index) => (
                <a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors group"
                >
                  <ExternalLink className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{site.name}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
