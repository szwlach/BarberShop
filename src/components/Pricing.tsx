import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scissors, Brush, Coffee, Award, Users, Star } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const services = [
    {
      title: "Classic Cut",
      description:
        "Traditional haircut with precision scissor work, includes wash and style.",
      price: "$25",
      duration: "30 min",
      icon: <Scissors className="h-6 w-6" />,
      popular: false,
    },
    {
      title: "Beard Trim & Shaping",
      description:
        "Expert beard trim with hot towel treatment, defining lines and perfect shape.",
      price: "$18",
      duration: "20 min",
      icon: <Brush className="h-6 w-6" />,
      popular: false,
    },
    {
      title: "Deluxe Package",
      description:
        "Premium haircut, beard trim, hot towel facial and styling, our signature service.",
      price: "$45",
      duration: "60 min",
      icon: <Award className="h-6 w-6" />,
      popular: true,
    },
    {
      title: "Hair Styling & Product",
      description:
        "Professional styling with premium products for any occasion, casual to formal.",
      price: "$15",
      duration: "15 min",
      icon: <Star className="h-6 w-6" />,
      popular: false,
    },
    {
      title: "Father & Son Special",
      description:
        "Haircuts for dad and son in one session, bonding time with great style.",
      price: "$40",
      duration: "45 min",
      icon: <Users className="h-6 w-6" />,
      popular: false,
    },
    {
      title: "Executive Experience",
      description:
        "Full service with haircut, beard trim, facial massage, and complimentary beverage.",
      price: "$55",
      duration: "75 min",
      icon: <Coffee className="h-6 w-6" />,
      popular: false,
    },
  ];

  return (
    <div className="w-full relative py-16 md:py-24" id="pricing">
      <div className="absolute inset-0 z-0">
        <img
          src="/backgroundPricing.jpg"
          alt="background pricing photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Title Section */}
      <div className="relative z-10">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-8 mb-6 md:mb-8 px-4">
          Our Services & Pricing
        </h1>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <CardTitle className="text-lg md:text-xl font-semibold truncate">
                      {service.title}
                    </CardTitle>
                  </div>
                  {service.popular && (
                    <Badge className="bg-amber-500 hover:bg-amber-600 ml-2 flex-shrink-0">
                      Popular
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-sm md:text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-xl md:text-2xl font-bold">
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {service.duration}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                    <Link href="/#contact">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
