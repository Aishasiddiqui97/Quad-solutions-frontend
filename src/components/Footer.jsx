import { Link } from 'react-router-dom'
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Provider Credentialing', path: '/services' },
      { name: 'Insurance Enrollment', path: '/services' },
      { name: 'Medical Billing', path: '/services' },
      { name: 'CAQH Management', path: '/services' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Process', path: '/process' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'FAQ', path: '/faq' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Quad Solutions</h3>
                <p className="text-xs text-gray-400">Medical Credentialing</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Trusted partner in medical credentialing and provider enrollment services. 
              We simplify the complex credentialing process so you can focus on patient care.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Medical Center Drive,<br />
                  Suite 100, Healthcare City, HC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@quadsolutions.com" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  info@quadsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Quad Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
