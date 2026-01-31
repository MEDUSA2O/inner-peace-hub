import { Building2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 gradient-section">
      <div className="container px-6">
        <Card className="gradient-card shadow-card border-0 overflow-hidden animate-fade-in" style={{ animationDelay: "400ms" }}>
          <CardContent className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                  Our Organization
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Part of a Global Network</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The <a href="https://pranichealing-delhi.in/" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-2">Yoga Vidya Pranic Healing Trust of Delhi</a> is a non-profit organization that has been actively engaged in healing and meditation initiatives over the last 30 years in the Delhi NCR area.
              </p>
              <p>
                Our parent organization is <a href="https://www.worldpranichealing.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-2">World Pranic Healing Foundation of India (WPHFI)</a>, which is an affiliate of WPHF-Manila with its key entity being <a href="https://www.instituteforinnerstudies.com.ph/" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-2">Institute for Inner Studies, Inc. (IIS Inc.)</a>, Philippines.
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
      </div>
    </section>
  );
};

export default AboutSection;
