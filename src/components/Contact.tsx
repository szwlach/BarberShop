"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Scissors, Calendar as CalendarIcon, Clock, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const BookingSection = () => {
  const [date, setDate] = useState(new Date());
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const services = [
    { id: "Classic Cut", name: "Classic Cut", price: "$25" },
    { id: "Beard Trim", name: "Beard Trim & Shaping", price: "$18" },
    { id: "Deluxe", name: "Deluxe Package", price: "$45" },
    { id: "Hair Styling", name: "Hair Styling & Product", price: "$15" },
    { id: "Father & Son", name: "Father & Son Special", price: "$40" },
    { id: "Executive Experience ", name: "Executive Experience", price: "$55" },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ name, email, phone, service, date, time });
    alert("Your appointment has been booked! We'll see you soon.");
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white -mt-12 md:-mt-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info Section */}
          <div className="lg:w-1/2 space-y-8 lg:mt-60">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                <span className="text-amber-500">Book Your Visit</span> at
                Gentleman's Cut
              </h2>
              <p className="text-lg text-gray-300">
                Experience premium grooming services tailored for the modern
                gentleman. Our skilled barbers are dedicated to delivering
                precision cuts and classic techniques.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Scissors className="mt-1 w-6 h-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-semibold">Premium Services</h3>
                  <p className="text-gray-300">
                    From classic cuts to hot towel shaves, we provide all the
                    services a gentleman needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <User className="mt-1 w-6 h-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-semibold">Expert Barbers</h3>
                  <p className="text-gray-300">
                    Our team of skilled professionals ensures you'll walk out
                    looking your best.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="mt-1 w-6 h-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-semibold">Efficient Service</h3>
                  <p className="text-gray-300">
                    We respect your time - book your appointment and we'll take
                    care of the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:w-1/2">
            <Card className="bg-gray-800 border border-gray-700 text-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Schedule Your Appointment
                </CardTitle>
                <CardDescription className="text-center text-gray-400">
                  Select your preferred service, date and time
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Select Service
                    </label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        {services.map((service) => (
                          <SelectItem
                            key={service.id}
                            value={service.id}
                            className="text-slate-200 border-2 mt-1"
                          >
                            {service.name} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 flex flex-col items-center">
                    <label className="block text-sm font-medium text-gray-300 self-start">
                      Select Date
                    </label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) =>
                        selectedDate && setDate(selectedDate)
                      }
                      className="rounded-md border border-gray-600 bg-gray-700 p-4"
                      classNames={{
                        day_selected:
                          "bg-amber-500 text-gray-900 hover:bg-amber-600",
                        day_today: "bg-gray-600 text-white",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Select Time
                    </label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Choose a time" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        {availableTimes.map((timeSlot) => (
                          <SelectItem
                            key={timeSlot}
                            value={timeSlot}
                            className="text-slate-200"
                          >
                            {timeSlot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        className="bg-gray-700 border-gray-600"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        className="bg-gray-700 border-gray-600"
                        placeholder="(123) 456-7890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      className="bg-gray-700 border-gray-600"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>

              <CardFooter className="text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
                By booking, you agree to our cancellation policy. Please arrive
                10 minutes before your scheduled time.
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
