import { Heart, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const twinHeartLinks = [
    { title: "Introduction to Twin Heart Meditation", url: "https://www.youtube.com/watch?v=9VdjOyjb27A&list=PLsEllhfIuEDNCb2s-Hu3e9sLeSyU6MZse&index=3" },
    { title: "Testimonial for Twin Heart Meditation", url: "https://www.youtube.com/watch?v=SuZ8TXjSrEY" },
  ];

  const pranicHealingLinks = [
    { title: "What is Pranic Healing", url: "https://youtu.be/hWT7Nc-Gwfg" },
    { title: "Pranic Healing – Animation Video", url: "https://youtu.be/jtOahTuWi1Y" },
    { title: "Why Attend a Pranic Healing Class", url: "https://www.youtube.com/watch?v=XEB6EP7Oicg&t=49s" },
    { title: "Pranic Healing in All Aspects of Life", url: "https://www.youtube.com/watch?v=GqrqF3QZsB8" },
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
                  Twin Heart Meditation with Peace and Illumination is a guided, non-religious practice designed to promote <strong className="text-foreground">emotional balance</strong>, <strong className="text-foreground">reduce stress</strong>, <strong className="text-foreground">improve interpersonal relationships</strong>, <strong className="text-foreground">enhance mental clarity</strong>, and <strong className="text-foreground">boost finances</strong>.
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
                <p>
                  Pranic Healing is not only for those who are unwell—it is for everyone. Even healthy individuals can benefit from its techniques. It offers a scientific and practical approach to improving every area of life, including:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Physical and emotional health</li>
                  <li>Happiness and inner peace</li>
                  <li>Workplace productivity</li>
                  <li>Relationships</li>
                  <li>Financial well-being</li>
                </ul>
                <p>
                  <strong className="text-foreground">Pranic Healing is easy to learn and simple to practice.</strong>
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
