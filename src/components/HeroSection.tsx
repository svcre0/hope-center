import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/backgrond.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children learning and smiling in a bright classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-background mb-6 leading-tight">
            Every Child
            <span className="block gradient-sunrise bg-clip-text text-transparent">
              Deserves a Chance
            </span>
          </h1>
          
          <p className="font-body text-lg sm:text-xl text-background/90 mb-8 leading-relaxed">
            At Hope Acres Foundation, we believe every orphaned child deserves love, 
            education, and the opportunity to build a brighter future. Join us in 
            transforming lives through compassion and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="hero" size="lg" asChild>
              <Link to="/sponsor">
                Sponsor a Child
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/donate">
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-hope-yellow">
                500+
              </div>
              <div className="font-body text-sm text-background/80">
                Children Helped
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-hope-yellow">
                15
              </div>
              <div className="font-body text-sm text-background/80">
                Years of Service
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl sm:text-3xl text-hope-yellow">
                98%
              </div>
              <div className="font-body text-sm text-background/80">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-background/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
