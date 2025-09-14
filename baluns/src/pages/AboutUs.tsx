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

  const industries = [
    "Automotive",
    "Aerospace",
    "Printing & Packaging",
    "Food & Beverages",
    "FMCG (Fast-Moving Consumer Goods)",
  ];

  const whatwedo = [
    "AI for Manufacturing & Quality Control",
    "Machine Vision Systems & Smart Camera Development",
    "Embedded Systems & Edge Computing",
    "Industrial Automation & Robotics Integration",
    "Print Quality Inspection, OCR, and Barcode Reading",
    "Vision-Guided Robotics for Pick-and-Place Applications",
  ];

  return (
    <div className="min-h-screen mt-[4.25rem] sm:mt-[5rem]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Baluns Vision Technologies Pvt. Ltd.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mb-20">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2019, Baluns Vision Technologies Pvt. Ltd.
                specializes in designing and building intelligent machine vision
                systems and smart cameras tailored for industrial automation.
                Established by Amutha and Saravanakumar, our company is powered
                by deep technical expertise in embedded systems, image
                processing, AI, and hardware engineering. We are passionate
                about solving complex, real-world manufacturing challenges using
                advanced technologies. Our commitment is to deliver solutions
                that make modern manufacturing smarter, more efficient, and
                highly reliable.
              </p>

              {/* Our Values */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Our Values
              </h2>
              <div className="space-y-3">
                {values.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="text-black/90">{point}</span>
                  </div>
                ))}
              </div>

              {/* What We Do */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mt-10 mb-6">
                What We Do
              </h2>
              <div className="space-y-3">
                {whatwedo.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="text-black/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/uploads/story.jpg"
                alt="Our Story"
                className="rounded-2xl w-full h-125 object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships & Awards */}
      <section className="bg-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Strategic Partnerships */}
            <div className="bg-orange-primary rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-orange-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Strategic Partnerships</h3>
              </div>
              <div className="space-y-3">
                {partnerships.map((point, index) => (
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



      {/* Industries We Serve */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industries We Serve
          </h2>
          <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
            {industries.map((industry, index) => (
              <li
                key={index}
                className="bg-gray-100 px-6 py-3 rounded-lg shadow"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Expertise
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

      {/* Leadership Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-56 h-70 rounded-2xl object-cover mx-auto shadow-lg"
                  />
                </div>
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
