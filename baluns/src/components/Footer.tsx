import { Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Main Menu',
      links: ['Home', 'About', 'Services', 'Contact']
    },
    {
      title: 'Extras',
      links: ['Company', 'Services', 'Careers', 'About']
    }
  ];

  return (
    <footer className="bg-gray-200 text-black py-12 sm:py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <div className="mb-4">
              <img
                src="https://balunstech.com/images/_logo.png"
                alt="Baluns Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-700 mb-6 text-sm sm:text-base max-w-md">
              Bridging the Technology Gap with Hybrid AI-Powered Vision Solutions.
            </p>

            {/* Social / Contact Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/baluns-technologies/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:bg-black hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.youtube.com/@balunstechnologies4946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:bg-black hover:text-white transition-all"
              >
                <Youtube size={20} />
              </a>

              <a
                href="https://wa.me/+919538081883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:bg-black hover:text-white transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="sm:col-span-1">
              <h3 className="font-semibold mb-4 text-base sm:text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-black transition-colors text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 sm:pt-8 mt-8 text-center text-gray-600">
          <p className="text-sm sm:text-base">&copy; 2025 Baluns. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
