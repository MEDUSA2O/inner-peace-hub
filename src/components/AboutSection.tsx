import { Building2, Globe, ExternalLink, Play, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const keyWebsites = [
    { name: "Yoga Vidya Pranic Healing Trust of Delhi", url: "https://pranichealing-delhi.in/" },
    { name: "World Pranic Healing Foundation of India (WPHFI)", url: "https://www.worldpranichealing.com/" },
    { name: "Institute for Inner Studies, Inc. (IIS Inc.)", url: "https://www.instituteforinnerstudies.com.ph/" },
  ];

  const sectionBg = { backgroundColor: '#fffbeb' };
  const cardBg = { backgroundColor: '#fefce8', borderColor: '#fde68a' };
  const iconBg = { backgroundColor: '#fde68a', color: '#78350f' };
  const linkStyle = { backgroundColor: '#fde68a', color: '#78350f' };

  return (
    <section className="pt-8 pb-16" style={sectionBg}>
      <div className="container px-6 space-y-8">
        {/* Arahant Pranic Healing Center */}
        <Card className="shadow-lg border overflow-hidden animate-fade-in" style={{ animationDelay: "400ms", ...cardBg }}>
          <CardHeader className="pb-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shrink-0" style={iconBg}>
              <Sparkles className="w-7 h-7" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-serif text-stone-800">
              ARAHANT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Based out of Dr. Mukherjee Nagar, New Delhi, Arahant Pranic Healing Center envisions bringing about healings, inner calmness and peace for spiritual evolution by using the teachings and techniques of Master Choa Kok Sui.
              </p>
              <p>
                Pranic Healing workshops, Nurturing sessions, Healing practice sessions and Meditation sessions form the foundation to achieve this vision.
              </p>
              <p>
                We also conduct counselling sessions for physical, emotional, mental and psychological needs as well as for improving businesses.
              </p>
            </div>

            {/* Contact Information */}
            <div className="pt-6 border-t space-y-4" style={{ borderColor: '#fde68a' }}>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-2">Address:</p>
                <p className="text-sm text-stone-600">House No. 267, Dr Mukherjee Nagar, New Delhi 110009</p>
              </div>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-2">Contact:</p>
                <p className="text-sm text-stone-600">+91 9971836403</p>
                <p className="text-sm text-stone-600">+91 8317448751</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yoga Vidya Pranic Healing Trust of Delhi (PHTD) */}
        <Card className="shadow-lg border overflow-hidden animate-fade-in" style={{ animationDelay: "500ms", ...cardBg }}>
          <CardHeader className="pb-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shrink-0" style={iconBg}>
              <Building2 className="w-7 h-7" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-serif text-stone-800">
              Yoga Vidya Pranic Healing Trust of Delhi (PHTD)
            </CardTitle>
            <div className="flex items-center gap-2 text-stone-500 text-sm mt-1">
              <Globe className="w-4 h-4" />
              <span>Part of a Global Network</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                The <strong className="text-stone-800">Yoga Vidya Pranic Healing Trust of Delhi</strong> is a non-profit organization that has been actively engaged in healing and meditation initiatives over the last 30 years in the Delhi NCR area.
              </p>
              <p>
                Our parent organization is <strong className="text-stone-800">World Pranic Healing Foundation of India (WPHFI)</strong>, which is an affiliate of WPHF-Manila with its key entity being <strong className="text-stone-800">Institute for Inner Studies, Inc. (IIS Inc.)</strong>, Philippines.
              </p>
            </div>

            <div className="pt-6 border-t" style={{ borderColor: '#fde68a' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-serif font-bold text-amber-700">30+</p>
                  <p className="text-sm text-stone-500">Years of Service</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-amber-700">Delhi NCR</p>
                  <p className="text-sm text-stone-500">Region Covered</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-amber-700">Global</p>
                  <p className="text-sm text-stone-500">Network Affiliation</p>
                </div>
              </div>
            </div>

            {/* Key Websites - same style as Watch Videos in other cards */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-stone-800">Key Websites</p>
              <div className="flex flex-wrap gap-2">
                {keyWebsites.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                    style={linkStyle}
                  >
                    <Play className="w-3 h-3" />
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-6 border-t space-y-4" style={{ borderColor: '#fde68a' }}>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-2">Address:</p>
                <p className="text-sm text-stone-600">D6, Edenpark Hotels, Qutub Hotel Apartments, Shaheed Jeet Singh Marg, near Katwaria Sarai, near Adhchini, Block C, Qutab Institutional Area, New Delhi, Delhi 110016</p>
              </div>
              <div>
                <p className="text-sm font-medium text-stone-800 mb-2">Contact:</p>
                <p className="text-sm text-stone-600">Mobile: +91 87997 22460</p>
                <p className="text-sm text-stone-600">Email: yvphtdelhi@pranichealing.co.in</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
