import { Link } from 'react-router-dom'
import { Shield, FileCheck, DollarSign, ClipboardCheck, Users, Award, ArrowRight, Star, CheckCircle } from 'lucide-react'

function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Provider Credentialing',
      description: 'Comprehensive credentialing services to ensure your providers are properly verified and credentialed.',
    },
    {
      icon: FileCheck,
      title: 'Insurance Enrollment',
      description: 'Streamlined enrollment with major insurance payers to expand your network coverage.',
    },
    {
      icon: DollarSign,
      title: 'Medical Billing',
      description: 'Efficient billing solutions to maximize revenue and minimize claim denials.',
    },
    {
      icon: ClipboardCheck,
      title: 'CAQH Management',
      description: 'Expert CAQH profile setup, attestation, and ongoing maintenance services.',
    },
  ]

  const trustPoints = [
    {
      icon: Users,
      title: '500+ Providers Credentialed',
      description: 'Successfully credentialed healthcare providers across all specialties',
    },
    {
      icon: Award,
      title: '99% Success Rate',
      description: 'Industry-leading approval rate for credentialing applications',
    },
    {
      icon: FileCheck,
      title: '10+ Years Experience',
      description: 'Over a decade of expertise in medical credentialing services',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Full compliance with healthcare privacy and security regulations',
    },
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Family Medicine Physician',
      content: 'Quad Solutions made the credentialing process seamless. Their team handled everything professionally and efficiently.',
      rating: 5,
    },
    {
      name: 'Michael Chen, MD',
      role: 'Cardiologist',
      content: 'Outstanding service! They completed our provider enrollments faster than expected with zero errors.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatrician',
      content: 'Highly recommend their CAQH management services. Saved us countless hours of administrative work.',
      rating: 5,
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Simplifying Medical Credentialing for Healthcare Professionals
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
              Expert credentialing services that save you time, reduce administrative burden, 
              and ensure compliance so you can focus on patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg">
                Get Started Today
              </Link>
              <Link to="/services" className="bg-primary-600 border-2 border-primary-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-700 hover:border-primary-700 transition-all duration-200 text-lg shadow-md hover:shadow-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive credentialing solutions tailored to meet the unique needs of healthcare providers and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <service.icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quad Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver excellence in credentialing services with a commitment to quality, speed, and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by healthcare professionals across the country for reliable credentialing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-primary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Credentialing Process?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let Quad Solutions handle the complexity while you focus on what matters most—patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg">
                Contact Us Today
              </Link>
              <Link to="/process" className="btn-secondary border-white text-white hover:bg-white/10 text-lg">
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">500+</p>
              <p className="text-gray-600">Providers Credentialed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">99%</p>
              <p className="text-gray-600">Approval Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">50+</p>
              <p className="text-gray-600">Insurance Payers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">10+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
