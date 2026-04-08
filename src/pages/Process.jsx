import { Link } from 'react-router-dom'
import { FileText, Search, Send, CheckCircle, Clock, Shield, ArrowRight } from 'lucide-react'

function Process() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Document Collection',
      description: 'We gather all necessary documentation including licenses, certifications, education records, work history, and malpractice insurance information.',
      details: [
        'Initial consultation and needs assessment',
        'Comprehensive document checklist provided',
        'Secure document collection portal',
        'Dedicated credentialing specialist assigned',
      ],
      duration: '1-2 weeks',
    },
    {
      number: '02',
      icon: Search,
      title: 'Verification',
      description: 'Our team conducts thorough primary source verification of all credentials, ensuring accuracy and compliance with regulatory standards.',
      details: [
        'Medical education verification',
        'License validation with state boards',
        'Board certification confirmation',
        'Work history and reference checks',
        'NPDB and OIG exclusions screening',
      ],
      duration: '2-3 weeks',
    },
    {
      number: '03',
      icon: Send,
      title: 'Submission',
      description: 'Complete applications are submitted to insurance payers, Medicare, Medicaid, and relevant credentialing bodies with meticulous attention to detail.',
      details: [
        'CAQH profile creation and attestation',
        'Insurance payer applications prepared',
        'Medicare/Medicaid enrollment submitted',
        'Hospital privileging applications filed',
        'Continuous follow-up on application status',
      ],
      duration: '2-4 weeks',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Approval',
      description: 'We monitor the approval process, respond to any additional information requests, and ensure successful credentialing completion.',
      details: [
        'Application status tracking',
        'Prompt response to payer inquiries',
        'Approval notification and documentation',
        'Effective date confirmation',
        'Ongoing monitoring and recredentialing setup',
      ],
      duration: '2-6 weeks',
    },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Credentialing Process</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              A streamlined, transparent approach to medical credentialing that saves time and ensures accuracy at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-24 w-0.5 h-full bg-primary-200"></div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}>
                  {/* Left Content */}
                  <div className={`lg:text-right ${index % 2 === 1 ? 'lg:order-2 lg:text-left' : ''}`}>
                    <div className={`flex items-center ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'} mb-4`}>
                      <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold relative z-10">
                        {step.number}
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:text-left' : ''}>
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                        <step.icon className="text-primary-600" size={32} />
                        <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                      </div>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className={`space-y-2 ${index % 2 === 1 ? '' : 'lg:text-right'}`}>
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="text-primary-600 flex-shrink-0" size={18} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-6 flex items-center gap-2 ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                        <Clock className="text-primary-600" size={20} />
                        <span className="text-primary-600 font-semibold">Duration: {step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
                      <div className="bg-white rounded-xl shadow-lg p-8">
                        <step.icon className="text-primary-600 mx-auto mb-4" size={80} />
                        <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                          Step {step.number}
                        </h3>
                        <p className="text-gray-600 text-center">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures efficient, accurate, and compliant credentialing every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Compliant</h3>
              <p className="text-gray-600">
                Every step follows NCQA standards and regulatory requirements to ensure complete compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Efficient</h3>
              <p className="text-gray-600">
                Streamlined processes and dedicated specialists reduce credentialing time by up to 40%.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Transparency</h3>
              <p className="text-gray-600">
                Real-time status updates and clear communication keep you informed throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions About the Process?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our credentialing process.
            </p>
          </div>
          <div className="text-center">
            <Link to="/faq" className="btn-primary">
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Credentialing Journey Today
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let our experts guide you through every step of the credentialing process.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
