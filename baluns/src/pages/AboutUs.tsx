
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
    'Sustainable Manufacturing Practices',
    'Advanced Technology Integration',
    'Community and Environmental Responsibility',
    'Innovation-Driven Growth'
  ];

  return (
    <div className="min-h-screen mt-[4.25rem]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                AboutUs
              </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className='mb-20'>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Baluns is an employee-centred company that looks after every
                employee, gives autonomy to make choices, supports self-development
                and career growth. Our development team is always in search of
                talented individuals to join our employee-centred culture.
              </p>
              <p className="text-gray-600 mb-8">
                Navigate below to see our current open positions!
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

      {/* Mission and Vision Section */}
      <section className="bg-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="bg-orange-primary rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Our mission is to transform the factory and industry sectors through
                sustainable practices, innovation, and advanced technology, fostering
                growth that benefits both business and the environment.
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

            {/* Our Vision */}
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
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
                  To be the leading force in industrial transformation, creating
                  sustainable solutions that drive innovation and environmental
                  responsibility across global markets.
                </p>
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
