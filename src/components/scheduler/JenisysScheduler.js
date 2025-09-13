"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  MessageSquare,
  Check,
  Globe,
  Video,
  ArrowLeft,
  ArrowRight,
  Zap,
  Cloud,
  Bot,
  Phone,
  Building,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  Settings,
  Calendar as CalendarIcon,
} from "lucide-react";
import AdminPanel from "./AdminPanel";

const JenisysScheduler = () => {
  const [isAdminView, setIsAdminView] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });
  const [isBooked, setIsBooked] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMonthOffset, setCurrentMonthOffset] = useState(0);
  const [meetingLink, setMeetingLink] = useState("");

  // Enhanced event types configuration
  const eventTypes = [
    {
      id: "consultation",
      name: "Strategy Consultation",
      icon: User,
      duration: 45,
      description: "Discuss your business goals and technology needs",
      color: "bg-blue-500",
      features: ["Business Analysis", "Technology Roadmap", "ROI Discussion"],
    },
    {
      id: "technical",
      name: "Technical Deep Dive",
      icon: Bot,
      duration: 60,
      description: "In-depth technical discussion with our experts",
      color: "bg-purple-500",
      features: [
        "Architecture Review",
        "Implementation Planning",
        "Q&A Session",
      ],
    },
    {
      id: "demo",
      name: "Solution Demo",
      icon: Zap,
      duration: 30,
      description: "See our solutions in action with live demonstrations",
      color: "bg-green-500",
      features: ["Live Demo", "Use Case Examples", "Feature Walkthrough"],
    },
    {
      id: "workshop",
      name: "Team Workshop",
      icon: Users,
      duration: 90,
      description: "Collaborative session with your entire team",
      color: "bg-orange-500",
      features: [
        "Team Collaboration",
        "Hands-on Activities",
        "Custom Solutions",
      ],
    },
  ];

  // Get all available timezones
  const timezones = Intl.supportedValuesOf("timeZone").map((tz) => {
    const label = tz.replace(/_/g, " ").split("/").pop();
    return { value: tz, label: `${label} (${tz})` };
  });

  // Initialize timezone
  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setSelectedTimezone(userTimezone);
  }, []);

  // Generate available dates with better logic
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const currentMonth = new Date(
      today.getFullYear(),
      today.getMonth() + currentMonthOffset,
      1
    );
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const dayOfWeek = date.getDay();

      // Only include weekdays and future dates
      if (
        dayOfWeek !== 0 &&
        dayOfWeek !== 6 &&
        date >= today.setHours(0, 0, 0, 0)
      ) {
        dates.push(date);
      }
    }

    return dates;
  };

  // Enhanced time slots with buffer time
  const generateTimeSlots = useCallback(
    (date) => {
      if (!date) return [];

      const slots = [];
      const startHour = 9; // 9 AM
      const endHour = 17; // 5 PM
      const slotDuration = selectedEventType?.duration || 30;
      const bufferTime = 15; // 15 minutes buffer between meetings

      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += slotDuration + bufferTime) {
          const slotTime = new Date(date);
          slotTime.setHours(hour, minute, 0, 0);

          const slotEndTime = new Date(slotTime);
          slotEndTime.setMinutes(slotEndTime.getMinutes() + slotDuration);

          // Skip if slot would go past end time
          if (slotEndTime.getHours() > endHour) break;

          // Skip past times for today
          if (
            date.toDateString() === new Date().toDateString() &&
            slotTime <= new Date()
          ) {
            continue;
          }

          slots.push(slotTime);
        }
      }

      return slots.slice(0, 16); // Limit to reasonable number of slots
    },
    [selectedEventType]
  );

  useEffect(() => {
    if (selectedDate && selectedEventType) {
      setAvailableSlots(generateTimeSlots(selectedDate));
    }
  }, [selectedDate, selectedEventType, generateTimeSlots]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: selectedTimezone,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getMonthYear = () => {
    const today = new Date();
    const currentMonth = new Date(
      today.getFullYear(),
      today.getMonth() + currentMonthOffset,
      1
    );
    return currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const handleEventTypeSelect = (eventType) => {
    setSelectedEventType(eventType);
    setCurrentStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setCurrentStep(3);
  };

  const handleUserInfoSubmit = () => {
    if (userInfo.name && userInfo.email) {
      setCurrentStep(4);
    }
  };

  const handleBooking = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventType: selectedEventType,
          date: selectedDate,
          time: selectedTime,
          timezone: selectedTimezone,
          user: userInfo,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Booking failed");
      }

      const data = await response.json();
      setMeetingLink(data.meetLink);
      setIsLoading(false);
      setIsBooked(true);
    } catch (error) {
      console.error("Booking failed:", error);
      setIsLoading(false);
      alert(`Booking failed: ${error.message}`);
    }
  };

  const resetScheduler = () => {
    setCurrentStep(1);
    setSelectedEventType(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserInfo({ name: "", email: "", phone: "", company: "", notes: "" });
    setIsBooked(false);
    setCurrentMonthOffset(0);
    setMeetingLink("");
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 sm:p-6 text-white">
        <div className="max-w-2xl w-full bg-gray-800 bg-opacity-50 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 scale-100 backdrop-blur-lg border border-gray-700">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 text-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative">
              <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white ring-opacity-20">
                <Check className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-bold mb-3">Meeting Scheduled!</h2>
              <p className="text-green-200 text-lg">
                Confirmation sent to {userInfo.email}
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-5 mb-8">
              <div className="flex items-center space-x-4 p-5 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600">
                <div
                  className={`w-12 h-12 ${selectedEventType.color} rounded-xl flex items-center justify-center`}
                >
                  <selectedEventType.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-100 text-lg">
                    {selectedEventType.name}
                  </p>
                  <p className="text-gray-400">
                    {selectedEventType.duration} minutes
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-5 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="font-bold text-gray-100 text-lg">
                    {formatDate(selectedDate)}
                  </p>
                  <p className="text-gray-400">
                    {formatTime(selectedTime)} (
                    {selectedTimezone.replace(/_/g, " ")})
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-5 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600">
                <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="font-bold text-gray-100 text-lg">
                    Google Meet Link
                  </p>
                  <a
                    href={meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline font-mono text-sm"
                  >
                    {meetingLink}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={resetScheduler}
                className="flex-1 bg-gray-700 text-gray-200 py-4 px-6 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Another</span>
              </button>
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Plus className="w-5 h-5" />
                <span>Add to Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 text-white">
      <div className="w-full mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAdminView(!isAdminView)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 flex items-center space-x-2"
          >
            {isAdminView ? <CalendarIcon size={18} /> : <Settings size={18} />}
            <span>{isAdminView ? "Booking Page" : "Admin Panel"}</span>
          </button>
        </div>

        {isAdminView ? (
          <AdminPanel />
        ) : (
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Enhanced Branding */}
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-72 h-72 bg-cyan-400 bg-opacity-10 rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400 bg-opacity-10 rounded-full"></div>
              <div className="relative z-10">
                <div className="mb-12">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-gray-700">
                    <Bot className="w-8 h-8" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                    Book a Meeting with{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Jenisys
                    </span>
                  </h1>
                  <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                    Let's discuss how we can accelerate your digital
                    transformation with cutting-edge technology solutions.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black bg-opacity-20 rounded-xl flex items-center justify-center shadow-md border border-gray-700">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Process Automation</h3>
                      <p className="text-blue-300">
                        AI-powered workflows to streamline operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black bg-opacity-20 rounded-xl flex items-center justify-center shadow-md border border-gray-700">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Cloud Solutions</h3>
                      <p className="text-blue-300">
                        Scalable infrastructure and migration services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black bg-opacity-20 rounded-xl flex items-center justify-center shadow-md border border-gray-700">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        AI/ML Implementation
                      </h3>
                      <p className="text-blue-300">
                        Custom machine learning for your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-12 p-6 bg-black bg-opacity-20 rounded-2xl backdrop-blur-sm border border-gray-700">
                <div className="flex items-center justify-around text-sm">
                  <span className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Instant Setup</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Secure</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Free Consultation</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Scheduler */}
            <div className="p-8 lg:p-12 flex flex-col bg-gray-800">
              {/* Enhanced Progress Bar */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-gray-200">
                    Step {currentStep} of 4
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {
                      [
                        "Select Type",
                        "Pick Date & Time",
                        "Your Details",
                        "Confirm",
                      ][currentStep - 1]
                    }
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-grow">
                {/* Step 1: Enhanced Event Type Selection */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-100 mb-3">
                      Select Meeting Type
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                      Choose the session that best matches your needs
                    </p>

                    <div className="grid gap-4">
                      {eventTypes.map((eventType) => {
                        const IconComponent = eventType.icon;
                        return (
                          <button
                            key={eventType.id}
                            onClick={() => handleEventTypeSelect(eventType)}
                            className="p-6 border-2 border-gray-700 rounded-2xl hover:border-blue-500 hover:bg-gray-700 hover:shadow-lg transition-all duration-300 text-left group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative flex items-start space-x-4">
                              <div
                                className={`w-14 h-14 ${eventType.color} bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}
                              >
                                <IconComponent
                                  className={`w-7 h-7 ${eventType.color.replace(
                                    "bg-",
                                    "text-"
                                  )}`}
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-gray-100 text-lg mb-1">
                                  {eventType.name}
                                </h3>
                                <p className="text-gray-400 mb-3">
                                  {eventType.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <span className="text-blue-400 font-semibold">
                                    {eventType.duration} minutes
                                  </span>
                                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {eventType.features.map((feature, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Enhanced Date & Time Selection */}
                {currentStep === 2 && (
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-100">
                          Select Date & Time
                        </h2>
                        <p className="text-gray-400 text-lg">
                          Choose your preferred slot
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-xl transition-all duration-200"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    </div>

                    {/* Enhanced Timezone Selector */}
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Select Your Timezone
                      </label>
                      <select
                        value={selectedTimezone}
                        onChange={(e) => setSelectedTimezone(e.target.value)}
                        className="w-full p-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-900 text-white"
                      >
                        {timezones.map((tz) => (
                          <option key={tz.value} value={tz.value}>
                            {tz.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Enhanced Month Navigation */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-100 text-lg">
                          {getMonthYear()}
                        </h3>
                        <div className="flex space-x-2">
                          <button
                            onClick={() =>
                              setCurrentMonthOffset(
                                Math.max(-1, currentMonthOffset - 1)
                              )
                            }
                            disabled={currentMonthOffset <= 0}
                            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              setCurrentMonthOffset(
                                Math.min(2, currentMonthOffset + 1)
                              )
                            }
                            disabled={currentMonthOffset >= 2}
                            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Enhanced Date Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {generateAvailableDates().map((date, index) => (
                          <button
                            key={index}
                            onClick={() => handleDateSelect(date)}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                              selectedDate?.toDateString() ===
                              date.toDateString()
                                ? "border-blue-500 bg-gradient-to-r from-blue-800 to-purple-800 text-white shadow-md"
                                : "border-gray-700 hover:border-blue-500 hover:bg-gray-700"
                            }`}
                          >
                            <div className="text-sm font-medium text-gray-400">
                              {date.toLocaleDateString("en-US", {
                                weekday: "short",
                              })}
                            </div>
                            <div className="text-2xl font-bold">
                              {date.getDate()}
                            </div>
                            <div className="text-xs text-gray-500">
                              {date.toLocaleDateString("en-US", {
                                month: "short",
                              })}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Time Selection */}
                    {selectedDate && (
                      <div>
                        <h3 className="font-semibold text-gray-100 mb-4 text-lg">
                          Available Times
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {availableSlots.map((slot, index) => (
                            <button
                              key={index}
                              onClick={() => handleTimeSelect(slot)}
                              className="p-4 border-2 border-gray-700 rounded-xl hover:border-blue-500 hover:bg-gray-700 hover:shadow-md transition-all duration-300 text-center group"
                            >
                              <Clock className="w-4 h-4 mx-auto mb-2 text-gray-400 group-hover:text-blue-400" />
                              <div className="font-semibold text-gray-100">
                                {formatTime(slot)}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Enhanced User Information */}
                {currentStep === 3 && (
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-100">
                          Your Details
                        </h2>
                        <p className="text-gray-400 text-lg">
                          Help us prepare for your meeting
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-xl transition-all duration-200"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-3">
                            <User className="w-4 h-4 inline mr-2" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={userInfo.name}
                            onChange={(e) =>
                              setUserInfo((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="w-full p-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-900 text-white"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-3">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={userInfo.email}
                            onChange={(e) =>
                              setUserInfo((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="w-full p-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-900 text-white"
                            placeholder="Enter your email address"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-3">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={userInfo.phone}
                            onChange={(e) =>
                              setUserInfo((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            className="w-full p-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-900 text-white"
                            placeholder="Optional"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-3">
                            <Building className="w-4 h-4 inline mr-2" />
                            Company
                          </label>
                          <input
                            type="text"
                            value={userInfo.company}
                            onChange={(e) =>
                              setUserInfo((prev) => ({
                                ...prev,
                                company: e.target.value,
                              }))
                            }
                            className="w-full p-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-900 text-white"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-3">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Additional Notes
                        </label>
                        <textarea
                          value={userInfo.notes}
                          onChange={(e) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              notes: e.target.value,
                            }))
                          }
                          rows={4}
                          className="w-full p-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 bg-gray-900 text-white"
                          placeholder="Tell us about your project, specific needs, or questions you'd like to discuss..."
                        />
                      </div>

                      <button
                        onClick={handleUserInfoSubmit}
                        disabled={!userInfo.name || !userInfo.email}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                      >
                        <span>Continue to Confirmation</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Enhanced Confirmation */}
                {currentStep === 4 && (
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-100">
                          Confirm Your Booking
                        </h2>
                        <p className="text-gray-400 text-lg">
                          Review your meeting details
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(3)}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-xl transition-all duration-200"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    </div>

                    <div className="space-y-4 mb-8">
                      {/* Meeting Type Card */}
                      <div className="p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 ${selectedEventType.color} bg-opacity-20 rounded-xl flex items-center justify-center`}
                          >
                            <selectedEventType.icon
                              className={`w-6 h-6 ${selectedEventType.color.replace(
                                "bg-",
                                "text-"
                              )}`}
                            />
                          </div>
                          <div>
                            <p className="font-bold text-gray-100 text-lg">
                              {selectedEventType.name}
                            </p>
                            <p className="text-gray-400">
                              {selectedEventType.duration} minutes •{" "}
                              {selectedEventType.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Date & Time Card */}
                      <div className="p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600">
                        <div className="flex items-center space-x-4">
                          <Calendar className="w-6 h-6 text-blue-400" />
                          <div>
                            <p className="font-bold text-gray-100 text-lg">
                              {formatDate(selectedDate)}
                            </p>
                            <p className="text-gray-400">
                              {formatTime(selectedTime)} (
                              {
                                timezones.find(
                                  (tz) => tz.value === selectedTimezone
                                )?.label
                              }
                              )
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info Card */}
                      <div className="p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600">
                        <div className="flex items-center space-x-4">
                          <User className="w-6 h-6 text-blue-400" />
                          <div className="flex-1">
                            <p className="font-bold text-gray-100 text-lg">
                              {userInfo.name}
                            </p>
                            <p className="text-gray-400">{userInfo.email}</p>
                            {userInfo.phone && (
                              <p className="text-gray-400">{userInfo.phone}</p>
                            )}
                            {userInfo.company && (
                              <p className="text-gray-400">
                                {userInfo.company}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {userInfo.notes && (
                        <div className="p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600">
                          <div className="flex items-start space-x-4">
                            <MessageSquare className="w-6 h-6 text-blue-400 mt-0.5" />
                            <div>
                              <p className="font-bold text-gray-100 mb-2">
                                Your Notes
                              </p>
                              <p className="text-gray-300 leading-relaxed">
                                {userInfo.notes}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Meeting Platform Info */}
                    <div className="bg-green-800 bg-opacity-20 border border-green-700 rounded-xl p-6 mb-8">
                      <div className="flex items-start space-x-4">
                        <Video className="w-6 h-6 text-green-400 mt-0.5" />
                        <div>
                          <p className="font-bold text-green-300 mb-1">
                            Meeting Platform
                          </p>
                          <p className="text-green-400 leading-relaxed">
                            A Google Meet link will be automatically generated
                            and sent to your email upon confirmation. You'll
                            also receive a calendar invitation with all the
                            details.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Booking Button */}
                    <button
                      onClick={handleBooking}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-6 rounded-xl font-bold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl text-lg relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-white bg-opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      {isLoading ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Scheduling Your Meeting...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-6 h-6" />
                          <span>Confirm & Schedule Meeting</span>
                        </>
                      )}
                    </button>

                    {/* Trust Indicators */}
                    <div className="mt-6 text-center">
                      <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Instant Confirmation</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Calendar Sync</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Email Reminders</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JenisysScheduler;
