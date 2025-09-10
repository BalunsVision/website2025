import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const leaders = [
    {
      name: 'Saravanakumar S',
      position: 'Co-Founder & Technical Lead',
      image: '/uploads/saravanakumar.jpg'
    },
    {
      name: 'Amutha S',
      position: 'Co-Founder',
      image: '/uploads/amutha.jpg'
    }
  ];

  const values = [
    'Integrity in every partnership and process',
    'Excellence in Service through innovation and commitment',
    'Customer-Centric Innovation that addresses unique industry needs'
  ];

  const awards = [
    '🏆 I3 Innovation Award – Advanced PCT Vision Inspection System (ITC Tobacco)',
    '🏆 Best Partner Award – Pristine Project Development (Remidio)'
  ];

  const partnerships = [
    '🤝 Omron – Traceability Vision Solution Partner',
    '🤝 Hikrobot – Technical Solution Partner'
  ];

  const expertise = [
    'AI for Manufacturing & Quality Control',
    'Machine Vision Systems & Smart Camera Development',
    'Embedded Systems & Edge Computing',
    'Industrial Automation & Robotics Integration',
    'Print Quality Inspection, OCR, and Barcode Reading',
    'Vision-Guided Robotics for Pick-and-Place Applications'
  ];

  const industries = [
    'Automotive',
    'Aerospace',
    'Printing & Packaging',
    'Food & Beverages',
    'FMCG (Fast-Moving Consumer Goods)'
  ];

  const focusAreas = [
    'Smart Camera & Machine Vision System Design',
    'AI for Defect Detection & Quality Inspection',
    'Real-Time Edge Computing Solutions',
    'Robotic Vision System Integration',
    'Automation Strategy for Industry 4.0'
  ];

  return (
    <div className="min-h-screen mt-[4.25rem]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            About Us
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className='mb-20'>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2019, Baluns Vision Technologies Pvt. Ltd. specializes in
                designing and building intelligent machine vision systems and smart cameras
                tailored for industrial automation. Established by Amutha S and Saravanakumar S,
                our company is powered by deep technical expertise in embedded systems,
                image processing, AI, and hardware engineering.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are passionate about solving complex, real-world manufacturing challenges
                using advanced technologies. Our commitment is to deliver solutions that make
                modern manufacturing smarter, more efficient, and highly reliable.
              </p>
            </div>
            <div className="relative">
              <img
                src="/uploads/aerial-view-business-team.jpg"
                alt="Our Story"
                className="rounded-2xl w-full h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
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
        <div className="max-w-screen-lg mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-white/90 text-lg leading-relaxed">
            To deliver intelligent, reliable, and high-performance vision-based solutions
            that empower industries to automate with confidence and precision.
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-lg text-gray-700">{award.replace('🏆 ', '')}</p>
              </div>
            ))}
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
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <span className="text-2xl">🤝</span>
                </div>
                <p className="text-lg text-gray-700">{partner.replace('🤝 ', '')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* What We Do Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <li key={index} className="bg-white rounded-xl shadow p-6">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
          <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
            {industries.map((industry, index) => (
              <li key={index} className="bg-gray-100 px-6 py-3 rounded-lg shadow">
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Focus Areas</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <li key={index} className="bg-white rounded-xl shadow p-6">
                {area}
              </li>
            ))}
          </ul>
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
                    className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg"
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
