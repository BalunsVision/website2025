import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const leaders = [
    {
      name: "Saravanakumar S",
      position: "Co-Founder & Technical Lead",
      image: "/uploads/leader/Saravana.jpg",
    },
    {
      name: "Amutha S",
      position: "Co-Founder",
      image: "/uploads/leader/Amutha.jpg",
    },
  ];

  const values = [
    "Integrity in every partnership and process",
    "Excellence in Service through innovation and commitment",
    "Customer-Centric Innovation that addresses unique industry needs",
  ];

  const awards = [
    "🏆 I3 Innovation Award – Advanced PCT Vision Inspection System (ITC Tobacco)",
    "🏆 Best Partner Award – Pristine Project Development (Remidio)",
  ];

  const partnerships = [
    "🤝 Omron – Traceability Vision Solution Partner",
    "🤝 Hikrobot – Technical Solution Partner",
  ];

  const expertise = [
    "AI for Manufacturing & Quality Control",
    "Machine Vision Systems & Smart Camera Development",
    "Embedded Systems & Edge Computing",
    "Industrial Automation & Robotics Integration",
    "Print Quality Inspection, OCR, and Barcode Reading",
    "Vision-Guided Robotics for Pick-and-Place Applications",
  ];

  const focusAreas = [
    "Smart Camera & Machine Vision System Design",
    "AI for Defect Detection & Quality Inspection",
    "Real-Time Edge Computing Solutions",
    "Robotic Vision System Integration",
    "Automation Strategy for Industry 4.0",
  ];

  const missionPoints = [
    "Smart Camera & Machine Vision System Design",
    "AI for Defect Detection & Quality Inspection",
    "Real-Time Edge Computing Solutions",
    "Robotic Vision System Integration",
    "Automation Strategy for Industry 4.0",
  ];

  return (
    <div className="min-h-screen mt-[4.25rem] sm:mt-[5rem]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            About Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mb-20">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2019, Baluns Vision Technologies Pvt. Ltd. specializes in
                designing and building intelligent machine vision systems and smart
                cameras tailored for industrial automation. Established by Amutha S
                and Saravanakumar S, our company is powered by deep technical
                expertise in embedded systems, image processing, AI, and hardware
                engineering.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are passionate about solving complex, real-world manufacturing
                challenges using advanced technologies. Our commitment is to deliver
                solutions that make modern manufacturing smarter, more efficient, and
                highly reliable.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/uploads/story.jpg"
                alt="Our Story"
                className="rounded-2xl w-full h-96 object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {values.map((value, index) => (
              <li key={index} className="bg-white rounded-xl shadow p-6">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Key Focus Areas */}
            <div className="bg-orange-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Focus Areas</h3>
              <div className="space-y-3">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-white/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Awards & Recognition</h3>
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 gap-3"
                  >
                    <span className="text-xl">🏆</span>
                    {award.replace("🏆 ", "")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Strategic Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <span className="text-2xl">🤝</span>
                <p className="text-lg text-gray-700">
                  {partner.replace("🤝 ", "")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do + Focus Areas */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <ul className="grid grid-cols-1 gap-6">
              {expertise.map((item, index) => (
                <li key={index} className="bg-white rounded-xl shadow p-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Focus Areas
            </h2>
            <ul className="grid grid-cols-1 gap-6">
              {focusAreas.map((area, index) => (
                <li key={index} className="bg-white rounded-xl shadow p-6">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-gray-600">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
