
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const leaders = [
    {
      name: 'Ronald Richards',
      position: 'Manufacturing Executive',
      image: '/uploads/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg'
    },
    {
      name: 'Brooklyn Simmons',
      position: 'Industrial Engineer',
      image: '/uploads/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg'
    },
    {
      name: 'Cameron Williamson',
      position: 'Production Supervisor',
      image: '/uploads/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
    },
    {
      name: 'Darlene Robertson',
      position: 'Manufacturing Executive',
      image: '/uploads/excited-young-woman-showing-banner-pointing-fingers-left-smiling-camera-standing-amazed-white-wall.jpg'
    }
  ];

  const missionPoints = [
    'Smart Camera & Machine Vision System Design',
    'AI for Defect Detection & Quality Inspection',
    'Real-Time Edge Computing Solutions',
    'Robotic Vision System Integration',
    'Automation Strategy for Industry 4.0'
  ];
  const awards = [
    '🏆 I3 Innovation Award – Advanced PCT Vision Inspection System (ITC Tobacco)',
    '🏆 Best Partner Award – Pristine Project Development (Remidio)Smart Camera & Machine Vision System Design'
  ];
  const ourvalue = [
    'Integrity in every partnership and process',
    'Excellence in Service through innovation and commitment',
    'Customer-Centric Innovation that addresses unique industry need'
  ];

 const whatwedo = [
    'AI for Manufacturing & Quality Control',
    'Machine Vision Systems & Smart Camera Development',
    'Embedded Systems & Edge Computing',
    'Industrial Automation & Robotics Integration',
    'Print Quality Inspection, OCR, and Barcode Reading',
    'Vision-Guided Robotics for Pick-and-Place Applications'
  ];
                
               
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Baluns Vision Technologies Pvt. Ltd.

              </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className='mb-20'>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                 Intelligent Vision Solutions for Industrial Automation
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2019, Baluns Vision Technologies Pvt. Ltd. specializes in designing and building intelligent machine vision systems and smart cameras tailored for industrial automation. Established by Amutha and Saravanakumar, our company is powered by deep technical expertise in embedded systems, image processing, AI, and hardware engineering.
We are passionate about solving complex, real-world manufacturing challenges using advanced technologies. Our commitment is to deliver solutions that make modern manufacturing smarter, more efficient, and highly reliable.
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                 Our Values
              </h2>
               <div className="space-y-3">
                {ourvalue.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="text-black/90">{point}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                 What we do
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

      {/* Key Focus Areas Section */}
      <section className="bg-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Key Focus Areas */}
            <div className="bg-orange-primary rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Key Focus Areas</h3>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                

              </p>
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
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Awards & Recognition</h3>
              </div>
              <div className="absolute top-8 right-8 w-64 h-40">
                <img
                  src="/uploads/98354657-8bb2-454e-820c-d6168b4ba677.png"
                  alt="Vision"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="pr-72">
                <p className="text-gray-600 leading-relaxed">
                  We’re proud to have earned industry recognition for our technical depth and innovation:
                </p>
                <div className="space-y-3">
                {awards.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="text-black/90">{point}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-49 h-48 rounded-2xl object-cover mx-auto shadow-lg"
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
