import { Heart, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const twinHeartLinks = [
    { title: "Introduction", url: "https://www.youtube.com/watch?v=YOUR_LINK_1" },
    { title: "Testimonial", url: "https://www.youtube.com/watch?v=YOUR_LINK_2" },
  ];

  const pranicHealingLinks = [
    { title: "What is Pranic Healing", url: "https://www.youtube.com/watch?v=YOUR_LINK_3" },
    { title: "Animation Video", url: "https://www.youtube.com/watch?v=YOUR_LINK_4" },
    { title: "Why Attend a Class", url: "https://www.youtube.com/watch?v=YOUR_LINK_5" },
    { title: "All Aspects of Life", url: "https://www.youtube.com/watch?v=YOUR_LINK_6" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <main className="py-12 md:py-16">
        <div className="container px-6 space-y-8">
          {/* Twin Heart Meditation */}
          <SectionCard
            icon={<Heart className="w-7 h-7" />}
            title="Twin Heart Meditation"
            delay={100}
            description={
              <div className="space-y-4">
                <p>
                  Twin Heart Meditation with Peace and Illumination is a guided, non-religious practice designed to promote <strong className="text-foreground">emotional balance</strong>, reduce stress, improve interpersonal relationships, enhance mental clarity, and boost finances.
                </p>
                <p>
                  This meditation is conducted in universities, corporates, and community institutions worldwide due to its simplicity and scientifically observed benefits on relaxation and focus.
                </p>
                <div className="bg-accent/50 rounded-lg p-4 space-y-3">
                  <p>
                    <strong className="text-foreground">For Students:</strong> Doing the Twin Heart Meditation before examinations enables them to concentrate well, thereby enhancing their comprehending and learning abilities.
                  </p>
                  <p>
                    <strong className="text-foreground">For Working Professionals:</strong> Managers, executives, and professors can manage stress and anxiety, bringing more clarity in their professional and personal lives.
                  </p>
                </div>
              </div>
            }
            videoLinks={twinHeartLinks}
          />

          {/* Pranic Healing */}
          <SectionCard
            icon={<Zap className="w-7 h-7" />}
            title="Pranic Healing"
            delay={200}
            description={
              <div className="space-y-4">
                <p>
                  Pranic Healing is a <strong className="text-foreground">non-invasive, no-touch, no-drug, distant healing modality</strong> that can be used to heal health issues (physical, emotional, and psychological), relationship issues, and financial problems.
                </p>
                <p>
                  Pranic Healing uses life energy (such as Sun prana, Earth prana, and Air prana) to restore health & well-being, by clearing blockages in the body's energy field (Aura) and energy centres (Chakras).
                </p>
              </div>
            }
            videoLinks={pranicHealingLinks}
          />
        </div>
      </main>

      <AboutSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yoga Vidya Pranic Healing Trust of Delhi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
