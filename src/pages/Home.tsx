import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Home, Heart, Users, Utensils, Stethoscope } from "lucide-react";
import childrenPlayingImage from "@/assets/children-playing.jpg";
import caringSupportImage from "@/assets/caring-support.jpg";
import childrenMealsImage from "@/assets/children-meals.jpg";

const HomePage = () => {
  const programs = [
    {
      icon: Home,
      title: "Safe Housing",
      description: "Secure, loving homes where children feel protected and valued.",
      color: "text-hope-orange"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Quality education and learning opportunities for every child.",
      color: "text-hope-blue"
    },
    {
      icon: Utensils,
      title: "Nutrition",
      description: "Healthy, nutritious meals to help children grow strong.",
      color: "text-hope-yellow"
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Comprehensive medical care and emotional support.",
      color: "text-hope-orange"
    },
    {
      icon: Heart,
      title: "Emotional Care",
      description: "Therapy, counseling, and emotional support for healing.",
      color: "text-hope-blue"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting friendships and social connections.",
      color: "text-hope-yellow"
    }
  ];

  const testimonials = [
    {
      name: "Sarah, Age 16",
      quote: "Hope Haven gave me a family when I had none. Now I'm studying to become a teacher to help other children like me.",
      image: childrenPlayingImage
    },
    {
      name: "Michael, Former Volunteer",
      quote: "Volunteering at Hope Haven changed my life. Seeing these children's resilience and joy is truly inspiring.",
      image: caringSupportImage
    },
    {
      name: "Emma, Age 14",
      quote: "I love learning here. The teachers care about us, and I dream of becoming a doctor to help people.",
      image: childrenMealsImage
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Mission Overview */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Our Mission
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Hope Haven Foundation is dedicated to providing orphaned and vulnerable children 
              with the love, care, and opportunities they need to thrive. Through our comprehensive 
              programs, we create a nurturing environment where every child can discover their 
              potential and build a bright future.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              How We Help
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures every child receives the support they need 
              to grow, learn, and thrive in a loving environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth image-hover">
                <CardContent className="p-6 text-center">
                  <program.icon className={`h-12 w-12 mx-auto mb-4 ${program.color}`} />
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/programs">
                Learn More About Our Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Stories of Hope
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the children and volunteers whose lives have been transformed 
              through the power of compassion and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className="image-hover rounded-lg overflow-hidden mb-4">
                    <img
                      src={testimonial.image}
                      alt={`Story from ${testimonial.name}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <blockquote className="font-body italic text-muted-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="font-heading font-semibold text-foreground">
                    — {testimonial.name}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-sunrise text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
            Make a Difference Today
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Your support can transform a child's life. Whether through sponsorship, 
            donations, or volunteering, every contribution creates hope and opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/sponsor">
                Sponsor a Child
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/get-involved">
                Volunteer With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;