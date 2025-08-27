import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Globe, Award } from "lucide-react";
import caringSupportImage from "@/assets/caring-support.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with love and empathy in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships and support networks."
    },
    {
      icon: Globe,
      title: "Opportunity",
      description: "Creating pathways for children to reach their potential."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Providing the highest quality care and support."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      bio: "With over 20 years in child welfare, Sarah founded Hope Haven to create lasting change in children's lives."
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      bio: "Michael oversees our educational and emotional support programs, ensuring every child receives personalized care."
    },
    {
      name: "Maria Rodriguez",
      role: "Community Outreach",
      bio: "Maria builds partnerships with local organizations and coordinates volunteer efforts throughout the community."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              About Hope Haven Foundation
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Founded in 2009, Hope Haven Foundation has been a beacon of hope for 
              orphaned and vulnerable children, providing them with the love, care, 
              and opportunities they deserve to build brighter futures.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="image-hover">
              <img
                src={caringSupportImage}
                alt="Caregiver helping a child with homework"
                className="w-full rounded-lg shadow-soft"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  Hope Haven Foundation was born from a simple belief: every child deserves 
                  a loving home and the chance to pursue their dreams. What started as a 
                  small shelter for five children has grown into a comprehensive support 
                  system that has touched over 500 lives.
                </p>
                <p>
                  Our founders, Dr. Sarah Johnson and her team, recognized that traditional 
                  orphanages often focused solely on basic needs. Hope Haven takes a 
                  holistic approach, addressing not just shelter and food, but education, 
                  emotional healing, and life skills development.
                </p>
                <p>
                  Today, we operate multiple programs designed to give children the tools 
                  they need not just to survive, but to thrive and become leaders in 
                  their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="font-body text-muted-foreground">
                  To provide orphaned and vulnerable children with comprehensive care, 
                  education, and emotional support in a nurturing environment that 
                  empowers them to reach their full potential and become productive 
                  members of society.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="font-body text-muted-foreground">
                  A world where every child, regardless of their circumstances, 
                  has access to love, education, and opportunities to create a 
                  bright future for themselves and their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Our Values
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we care for 
              the children in our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-hope-orange" />
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team brings together expertise in child welfare, education, 
              and community development to create the best possible outcomes for our children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-sunrise rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="font-body text-hope-orange font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    {member.bio}
                  </p>
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
            Join Our Mission
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can continue to create positive change in the lives of 
            children who need it most. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/get-involved">
                Get Involved
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;