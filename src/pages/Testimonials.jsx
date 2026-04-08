import { Link } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Family Medicine Physician',
      location: 'Austin, TX',
      content: 'Quad Solutions made the credentialing process seamless. Their team handled everything professionally and efficiently. I was able to start seeing patients much faster than I expected. Highly recommend their services!',
      rating: 5,
      specialty: 'Family Medicine',
    },
    {
      name: 'Michael Chen, MD',
      role: 'Cardiologist',
      location: 'Los Angeles, CA',
      content: 'Outstanding service! They completed our provider enrollments faster than expected with zero errors. The team was always available to answer questions and provide updates. A true partner in our practice growth.',
      rating: 5,
      specialty: 'Cardiology',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatrician',
      location: 'Miami, FL',
      content: 'Highly recommend their CAQH management services. Saved us countless hours of administrative work. The team is knowledgeable, responsive, and truly understands the credentialing process inside and out.',
      rating: 5,
      specialty: 'Pediatrics',
    },
    {
      name: 'Dr. James Williams',
      role: 'Orthopedic Surgeon',
      location: 'Chicago, IL',
      content: 'Working with Quad Solutions has been a game-changer for our practice. They handled credentialing for 15 providers across multiple states flawlessly. Their attention to detail is exceptional.',
      rating: 5,
      specialty: 'Orthopedic Surgery',
    },
    {
      name: 'Dr. Lisa Patel',
      role: 'Dermatologist',
      location: 'New York, NY',
      content: 'I was dreading the credentialing process until I found Quad Solutions. They made it stress-free and kept me informed at every step. Their expertise saved me months of headaches.',
      rating: 5,
      specialty: 'Dermatology',
    },
    {
      name: 'Robert Thompson, DO',
      role: 'Internal Medicine',
      location: 'Seattle, WA',
      content: 'Professional, efficient, and thorough. Quad Solutions handled our entire group credentialing with precision. The ongoing monitoring service gives us peace of mind that everything stays current.',
      rating: 5,
      specialty: 'Internal Medicine',
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Hear from healthcare professionals who trust Quad Solutions for their credentialing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <Quote className="text-primary-200 mb-4" size={40} />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <div className="mt-2 inline-block bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
                    {testimonial.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals Nationwide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence speaks through our results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">500+</p>
              <p className="text-gray-600 font-medium">Providers Credentialed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">99%</p>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">99%</p>
              <p className="text-gray-600 font-medium">Approval Rate</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">50+</p>
              <p className="text-gray-600 font-medium">Specialties Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Satisfied Clients
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Experience the Quad Solutions difference. Let us handle your credentialing needs with the same dedication and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg">
                Get Started Today
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white/10 text-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
