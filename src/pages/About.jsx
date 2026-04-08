import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Users, Award, Shield } from 'lucide-react'

function About() {
  const team = [
    {
      name: 'Jennifer Williams',
      role: 'Founder & CEO',
      bio: '20+ years in healthcare administration and credentialing',
    },
    {
      name: 'Dr. Robert Martinez',
      role: 'Chief Medical Officer',
      bio: 'Board-certified physician with expertise in healthcare compliance',
    },
    {
      name: 'Amanda Thompson',
      role: 'Director of Operations',
      bio: 'Specializes in process optimization and quality assurance',
    },
    {
      name: 'David Park',
      role: 'Head of Credentialing',
      bio: 'Expert in provider enrollment and insurance verification',
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Quad Solutions</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Your trusted partner in medical credentialing, dedicated to simplifying the complex 
              and empowering healthcare providers to deliver exceptional patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in 2014, Quad Solutions has grown to become a leading provider of medical 
                credentialing services in the United States. We specialize in helping healthcare 
                providers navigate the complex credentialing and enrollment process with ease.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our team of experienced credentialing specialists understands the challenges faced 
                by healthcare professionals. We're committed to delivering accurate, timely, and 
                compliant credentialing solutions that allow you to focus on what you do best—caring 
                for patients.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Shield className="text-primary-600" size={20} />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-primary-600" size={20} />
                  <span className="text-gray-700 font-medium">NCQA Standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-primary-600" size={20} />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600 mb-2">500+</p>
                    <p className="text-gray-600">Providers Served</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600 mb-2">10+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600 mb-2">50+</p>
                    <p className="text-gray-600">Insurance Payers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600 mb-2">99%</p>
                    <p className="text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To simplify the medical credentialing process through expertise, technology, and 
                exceptional service, enabling healthcare providers to deliver quality patient care 
                without administrative burdens. We strive to be the most trusted and reliable 
                credentialing partner in the healthcare industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-primary-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize healthcare credentialing by setting the gold standard for accuracy, 
                efficiency, and client satisfaction. We envision a future where credentialing is 
                seamless, transparent, and stress-free for all healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Quad Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards and transparency in all our interactions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We deliver exceptional quality in every credentialing service we provide.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centric</h3>
              <p className="text-gray-600">
                Your success is our priority. We tailor our services to meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional credentialing services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <Users className="text-white" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Quad Solutions
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let us handle your credentialing needs while you focus on patient care.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
