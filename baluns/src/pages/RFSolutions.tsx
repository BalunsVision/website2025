import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RFSolutions = () => {
  const expertiseCards = [
    {
      title: "Precision Connectivity",
      description: "Designing and supplying high-frequency, high-voltage, and fiber optic interconnect solutions. Specializing in low-PIM coaxial connectors, cable assemblies (DC to 145 GHz), and robust automotive solutions."
    },
    {
      title: "Global Component Distribution",
      description: "Providing end-to-end supply chain management for a vast line card of electronic components: Active, Passive, Discrete, Electro-Mechanical, and specialized RF/Microwave components."
    },
    {
      title: "Test & Measurement Automation",
      description: "Delivering state-of-the-art T&M equipment and proprietary software, including Lab Asset Management Systems (LAMS) and custom test automation frameworks for seamless hardware integration."
    }
  ];

  const productCards = [
    {
      title: "RF & Coaxial Connectors",
      items: ["4.3-10, 7-16, BNC, SMA, TNC Series", "Precision RPC-0.80 Connectors (up to 145 GHz)", "Automotive Systems (FAKRA, HFM®, H-MTD®)"]
    },
    {
      title: "Passive & Active Components",
      items: ["Capacitors, Inductors, Resistors (TDK, Yageo, Murata)", "Microcontrollers & Power Management ICs (Renesas, Qualcomm)", "RF/Microwave Devices (QORVO, Mercury Systems)"]
    },
    {
      title: "High-Speed Data & Power",
      items: ["Fiber Optic Solutions and Components", "High-Voltage (HV) Connectors for E-Mobility (HPK)", "High-Speed Differential Data Systems"]
    },
    {
      title: "Test & Calibration Gear",
      items: ["Vector Network Analyzer (VNA) Accessories", "Precision Calibration Kits & Gauge Kits", "Floating Test Adaptors for Automation"]
    }
  ];

  const partners = ["Rosenberger", "TDK", "QORVO", "Renesas", "Teledyne LeCroy", "Murata", "Melexis", "COSEL"];

  const services = [
    {
      title: "Test Automation Solutions",
      description: "Comprehensive test frameworks designed to streamline workflows, supporting parallel execution, data validation, and seamless integration with hardware devices for automated data collection."
    },
    {
      title: "Lab Asset Management System (LAMS)",
      description: "A web-based solution for centralized asset tracking, automated maintenance scheduling, and in-house calibration management, ensuring maximum equipment uptime and compliance."
    },
    {
      title: "End-to-End Solutions & Support",
      description: "Complete lifecycle support, from initial proof-of-concept and architectural design to professional installation and robust post-sales maintenance and technical support."
    }
  ];

  return (
    <div className="min-h-screen mt-[4.25rem]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Engineered for Tomorrow: High-Performance RF, Connectivity, and Measurement Solutions.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerating innovation across Telecom, Automotive, Industrial, and Test & Measurement sectors with precision components, global manufacturer representation, and advanced automation software.
          </p>
          <Button className="bg-orange-primary hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Explore Solutions
          </Button>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="border-b-4 border-orange-primary pb-2">Our Core Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseCards.map((card, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg border-t-4 border-orange-primary hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-primary">
            Product Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCards.map((product, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg">
                <div className="w-full h-36 bg-slate-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate-400 text-sm text-center px-2">Product Image</span>
                </div>
                <h3 className="text-lg font-bold text-orange-primary mb-3">{product.title}</h3>
                <ul className="space-y-1">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="border-b-4 border-orange-primary pb-2">Trusted Global Partners</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We proudly represent an extensive line card of leading global manufacturers, offering customers access to the most reliable and innovative electronic components and systems on the market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-primary">
            Software & Custom Services
          </h2>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-r-lg border-l-4 border-orange-primary">
                <h3 className="text-xl font-bold text-orange-primary mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Contact us today to discuss your RF, connectivity, and measurement solution needs.
          </p>
          <Link to="/contact">
            <Button className="bg-orange-primary hover:bg-orange-600 text-white px-8 py-3">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RFSolutions;
