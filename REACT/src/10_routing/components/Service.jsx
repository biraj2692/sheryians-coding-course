import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "🌐",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile First",
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
      features: [
        "iOS & Android",
        "Cross Platform",
        "Native Performance",
        "App Store Ready",
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      icon: "🎨",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies",
      icon: "📈",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      icon: "☁️",
      features: ["AWS/Azure", "DevOps", "Scalability", "Security"],
    },
    {
      id: 6,
      title: "Consulting",
      description: "Technical consulting and strategy planning",
      icon: "💡",
      features: [
        "Strategy Planning",
        "Technical Audit",
        "Best Practices",
        "Team Training",
      ],
    },
  ];
  const naviagate = useNavigate();
  const navigateHandler = (id) => {
    naviagate(`/service/details/${id}`);
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            We provide comprehensive solutions to help your business grow and
            succeed in the digital world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="mb-4 text-5xl text-center">{service.icon}</div>
                <h3 className="mb-3 text-2xl font-semibold text-center text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-center text-gray-600">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigateHandler(service.id)}
                  className="w-full py-3 mt-6 font-semibold text-white transition-colors duration-200 bg-purple-600 rounded-lg hover:bg-purple-700"
                >
                  Learn More
                </button>
                <hr />

                <Outlet />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="p-12 text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-xl opacity-90">
            Let's discuss your project and see how we can help you achieve your
            goals
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-3 font-semibold text-purple-600 transition-colors duration-200 bg-white rounded-lg hover:bg-gray-100">
              Get Free Quote
            </button>
            <button className="px-8 py-3 font-semibold text-white transition-colors duration-200 border-2 border-white rounded-lg hover:bg-white hover:text-purple-600">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
