
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen mt-[4.25rem]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                        name="firstName"
                        placeholder="Enter name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                  </div>
                  <div>
                    <Input
                      name="lastName"
                      placeholder="Enter Company name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone no."
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Write Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-32 resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    type="submit"
                    className="w-full bg-orange-primary hover:bg-orange-secondary text-white h-12"
                  >
                    Submit Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src="/uploads/contactus.jpg"
                alt="Contact Product"
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="relative">
        {/* Map Background */}
        <div className="h-96 w-11/12">
          <iframe
            title="Baluns Technologies Map"
            className="w-full h-full rounded-lg border-0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.5900%2C12.9100%2C77.6000%2C12.9200&layer=mapnik&marker=12.9150%2C77.5950"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>


        {/* Contact Information Overlay */}
        <div className="absolute inset-0 flex items-center justify-end pr-8">
          <div className="bg-white rounded-lg p-8 shadow-2xl max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in touch <span className="text-orange-primary">with us</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Reach out for any inquiries, support, or to discuss how we can
              meet your industrial needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                  <p className="text-gray-600">+91 9538081853</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-gray-600">sales@balunstech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Our Address</h4>
                 <p className="text-gray-600">
                    Baluns Vision Technologies Private Limited <br />
                    No.53, 9th Cross Road, GNK Plazza, <br />
                    JP Nagar Phase 1, Sarakki, <br />
                    Bangalore - 560078 <br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
