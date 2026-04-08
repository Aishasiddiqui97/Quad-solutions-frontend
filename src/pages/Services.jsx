import { Link } from 'react-router-dom'
import { Shield, FileCheck, DollarSign, ClipboardCheck, FileText, CheckCircle, ArrowRight } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Provider Credentialing',
      description: 'Comprehensive verification and credentialing services for healthcare providers across all specialties and practice settings.',
      features: [
        'Primary source verification',
        'License and certification validation',
        'Education and training verification',
        'Work history confirmation',
        'Malpractice history review',
        'Ongoing monitoring and recredentialing',
      ],
    },
    {
      icon: FileCheck,
      title: 'Insurance Enrollment',
      description: 'Complete payer enrollment services to ensure your providers are contracted with major insurance networks.',
      features: [
        'Commercial insurance enrollment',
        'Medicare and Medicaid registration',
        'Managed care organization contracting',
        'Payer application preparation',
        'Follow-up and status tracking',
        'Contract negotiation support',
      ],
    },
    {
      icon: DollarSign,
      title: 'Medical Billing',
      description: 'Professional billing services designed to maximize revenue, reduce claim denials, and streamline your revenue cycle.',
      features: [
        'Claims submission and tracking',
        'Payment posting and reconciliation',
        'Denial management and appeals',
        'Accounts receivable follow-up',
        'Patient billing support',
        'Revenue cycle analytics',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'CAQH Profile Management',
      description: 'Expert CAQH ProView setup, attestation, and ongoing maintenance to keep your provider profiles current and compliant.',
      features: [
        'Initial CAQH profile creation',
        'Regular attestation management',
        'Profile updates and maintenance',
        'Document upload and organization',
        'Expiration tracking and alerts',
        'Compliance monitoring',
      ],
    },
    {
      icon: FileText,
      title: 'Compliance & Documentation',
      description: 'Comprehensive compliance services to ensure your practice meets all regulatory requirements and accreditation standards.',
      features: [
        'Regulatory compliance auditing',
        'Policy and procedure development',
        'Accreditation preparation (NCQA, URAC)',
        'Ongoing compliance monitoring',
        'Staff training and education',
        'Documentation management',
      ],
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive medical credentialing and administrative solutions designed to streamline 
              your practice operations and ensure regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-primary-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 h-full flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full">
                      <service.icon className="text-primary-600 mx-auto mb-4" size={64} />
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-center text-sm">
                        Professional & Reliable Service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes credentialing simple and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Document Collection', desc: 'Gather all necessary credentials' },
              { step: '2', title: 'Verification', desc: 'Verify all provider information' },
              { step: '3', title: 'Submission', desc: 'Submit to payers and boards' },
              { step: '4', title: 'Approval', desc: 'Receive credentialing approval' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-200">
                    <ArrowRight className="absolute right-0 -top-2 text-primary-300" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/process" className="btn-primary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today for a free consultation and discover how we can streamline your credentialing process.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg">
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
