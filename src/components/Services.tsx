"use client";
import React, { useState } from "react";
import { GlareCard } from "./ui/glare-card";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const services = [
  {
    id: 1,
    title: "Haircut",
    description:
      "Precision cuts tailored to your style, from timeless classics to modern looks. Crafted to perfection.",
    icon: "scissors.png",
    details:
      "Our haircut service is designed to provide precision cuts tailored to your personal style. Whether you're after a timeless classic or a modern, trendy look, our professional barbers will ensure that you leave with a cut that enhances your features and matches your personality. We focus on giving you the perfect look with careful attention to detail, ensuring a sharp, clean finish every time. From fades to undercuts, buzz cuts to pompadours, no matter your preference, we're committed to delivering a high-quality, custom haircut experience.",
  },
  {
    id: 2,
    title: "Shaving",
    description:
      "A traditional razor shave with hot towels and expert care, ensuring a smooth, refined finish every time.",
    icon: "shaving.png",
    details:
      "Indulge in the ultimate grooming experience with our traditional shaving service. Using hot towels and premium shaving cream, we provide a smooth, clean shave that's both relaxing and invigorating. Our expert barbers use a straight razor to ensure an incredibly close shave, leaving your skin soft and smooth. This classic technique not only helps in achieving the best results but also creates a pampering experience that's both luxurious and deeply satisfying. Perfect for those who appreciate the art of grooming, our shave offers precision and relaxation in every stroke.",
  },
  {
    id: 3,
    title: "Facial",
    description:
      "Luxurious facial treatments to cleanse, hydrate, and restore your glow.",
    icon: "facial.png",
    details:
      "Pamper your skin with our luxurious facial treatments designed to rejuvenate, hydrate, and restore your natural glow. Our facials are custom-tailored to meet your skin's specific needs, whether you're looking for deep cleansing, anti-aging benefits, or enhanced hydration. We use high-quality skincare products to gently exfoliate, cleanse, and nourish your skin, leaving you with a fresh and radiant complexion. Whether you're preparing for a special occasion or simply want to treat yourself to a relaxing experience, our facial treatments offer a refreshing break for both your skin and mind.",
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const showMore = (id: number) => {
    setIsOpen(!isOpen);
    setSelectedId(id);
  };

  const Details = () => {
    const selectedService = services.find(
      (service) => service.id === selectedId
    );
    return selectedService ? selectedService.details : null;
  };

  return (
    <div
      className="w-full min-h-screen py-12 md:py-16 lg:py-24 flex flex-col"
      id="services"
    >
      <h1 className="text-center mt-8 md:mt-12 text-3xl md:text-4xl lg:text-5xl text-slate-800 px-4">
        Our Services
      </h1>
      <p className="text-center text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-slate-600 max-w-3xl mx-auto px-4 md:px-8">
        Discover our premium grooming services designed to elevate your style
        and relaxation. From tailored haircuts to soothing facials, we provide
        the perfect treatments to make you feel your best.
      </p>

      <div className="container mx-auto px-4 md:px-8 mt-12 md:mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 place-items-center">
          {services.map((e) => (
            <div key={e.id} className="relative z-10">
              <GlareCard className="flex flex-col justify-between h-full">
                <Image
                  src={`/${e.icon}`}
                  alt={e.title}
                  width={50}
                  height={50}
                  className="mx-auto mt-8 md:mt-12"
                />
                <h1 className="text-slate-200 text-center text-xl md:text-2xl mt-4 md:mt-6">
                  {e.title}
                </h1>
                <p className="text-slate-200 text-center mt-2 md:mt-4 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base">
                  {e.description}
                </p>
                <div className="relative z-20 p-4 mb-2 md:mb-0">
                  <Button
                    className="capitalize flex mx-auto bg-slate-800 hover:bg-slate-700 text-sm md:text-base"
                    onClick={() => showMore(e.id)}
                  >
                    Learn More
                  </Button>
                </div>
              </GlareCard>
            </div>
          ))}
        </div>
      </div>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="max-w-md md:max-w-lg lg:max-w-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl md:text-2xl">
              {selectedId
                ? services.find((s) => s.id === selectedId)?.title
                : "Service Details"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm md:text-base">
              {Details()}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Exit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="w-full border-2 mt-16 md:mt-24 lg:mt-48"></div>
    </div>
  );
};

export default Services;
