import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  GraduationCap, 
  Utensils, 
  Stethoscope, 
  Heart, 
  Palette,
  Users,
  Target
} from "lucide-react";
import childrenMealsImage from "@/assets/children-meals.jpg";
import childrenPlayingImage from "@/assets/children-playing.jpg";

const Programs = () => {
  const corePrograms = [
    {
      icon: Home,
      title: "Safe Housing",
      description: "Providing secure, loving homes where children feel protected and valued.",
      details: [
        "24/7 supervised care in family-style homes",
        "Age-appropriate living spaces and privacy",
        "Safety protocols and emergency procedures",
        "Houseparents trained in child development"
      ],
      impact: "Currently housing 85 children across 12 family homes"
    },
    {
      icon: Utensils,
      title: "Daily Nutrition",
      description: "Healthy, nutritious meals to help children grow strong and healthy.",
      details: [
        "Three balanced meals plus healthy snacks daily",
        "Fresh, locally-sourced ingredients when possible",
        "Dietary accommodations for special needs",
        "Nutrition education and cooking skills"
      ],
      impact: "Serving over 300 meals daily with 95% improved health metrics"
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Quality education and learning opportunities for every child.",
      details: [
        "On-site primary and secondary education",
        "Individual tutoring and academic support",
        "Computer literacy and digital skills",
        "College and vocational preparation programs"
      ],
      impact: "98% graduation rate with 75% pursuing higher education"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Wellness",
      description: "Comprehensive medical care and health monitoring.",
      details: [
        "Regular health checkups and vaccinations",
        "Mental health counseling and therapy",
        "Dental and vision care",
        "Health education and preventive care"
      ],
      impact: "100% of children receive regular healthcare with on-site clinic"
    }
  ];

  const enrichmentPrograms = [
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Therapy and counseling to help children heal and grow emotionally.",
      details: [
        "Individual and group therapy sessions",
        "Trauma-informed care approaches",
        "Life skills development",
        "Building healthy relationships"
      ]
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Creative expression through art, music, and performance.",
      details: [
        "Art therapy and creative workshops",
        "Music lessons and choir participation",
        "Drama and performance opportunities",
        "Cultural celebrations and events"
      ]
    },
    {
      icon: Users,
      title: "Sports & Recreation",
      description: "Physical activities and team sports for healthy development.",
      details: [
        "Soccer, basketball, and athletics programs",
        "Swimming and water safety instruction",
        "Outdoor adventures and camping",
        "Team building and leadership skills"
      ]
    },
    {
      icon: Target,
      title: "Life Skills Training",
      description: "Preparing children for independent living and success.",
      details: [
        "Financial literacy and budgeting",
        "Job readiness and interview skills",
        "Independent living preparation",
        "Mentorship and career guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              Our Programs
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              We provide comprehensive support through carefully designed programs 
              that address every aspect of a child's development and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Core Services
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Our foundational programs ensure every child has their basic needs met 
              and receives the support necessary for healthy development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {corePrograms.map((program, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <program.icon className="h-12 w-12 text-hope-orange flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-2xl text-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {program.details.map((detail, idx) => (
                          <li key={idx} className="font-body text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-hope-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-hope-cream p-3 rounded-lg">
                        <p className="font-body text-sm text-foreground font-medium">
                          Impact: {program.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Images */}
      <section className="py-16 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="image-hover">
              <img
                src={childrenMealsImage}
                alt="Children enjoying healthy meals together"
                className="w-full h-64 object-cover rounded-lg shadow-soft"
              />
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Nutrition Program
                </h3>
                <p className="font-body text-muted-foreground">
                  Children enjoying nutritious meals in our bright, welcoming dining area.
                </p>
              </div>
            </div>
            <div className="image-hover">
              <img
                src={childrenPlayingImage}
                alt="Children playing and exercising outdoors"
                className="w-full h-64 object-cover rounded-lg shadow-soft"
              />
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Recreation & Sports
                </h3>
                <p className="font-body text-muted-foreground">
                  Active play and sports help children develop physical and social skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Enrichment & Development
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond basic needs, we provide enriching experiences that help children 
              discover their talents, build confidence, and prepare for their futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enrichmentPrograms.map((program, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <program.icon className="h-10 w-10 text-hope-blue flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      <ul className="space-y-2">
                        {program.details.map((detail, idx) => (
                          <li key={idx} className="font-body text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-hope-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            Support Our Programs
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Your support helps us continue providing these essential programs. 
            Every contribution directly impacts a child's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/donate">
                Make a Donation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/sponsor">
                Sponsor a Child
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;