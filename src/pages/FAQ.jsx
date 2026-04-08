import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, HelpCircle } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqCategories = [
    {
      category: 'General Credentialing',
      questions: [
        {
          question: 'What is medical credentialing?',
          answer: 'Medical credentialing is the process of verifying a healthcare provider\'s qualifications, including education, training, residency, licenses, and certifications. It ensures that providers meet the standards required to deliver quality patient care and bill insurance companies.',
        },
        {
          question: 'How long does the credentialing process take?',
          answer: 'The credentialing process typically takes 90-150 days, depending on the complexity of the provider\'s background, the responsiveness of primary sources, and the specific requirements of insurance payers. We work diligently to expedite the process while maintaining accuracy.',
        },
        {
          question: 'Why is credentialing important?',
          answer: 'Credentialing is essential for several reasons: it ensures patient safety by verifying provider qualifications, it\'s required by insurance companies for reimbursement, it maintains regulatory compliance, and it protects healthcare organizations from liability.',
        },
        {
          question: 'What\'s the difference between credentialing and privileging?',
          answer: 'Credentialing verifies a provider\'s qualifications and background, while privileging grants a provider permission to perform specific procedures or treatments at a healthcare facility. Credentialing is the foundation, and privileging builds upon it.',
        },
      ],
    },
    {
      category: 'Insurance Enrollment',
      questions: [
        {
          question: 'Which insurance payers do you work with?',
          answer: 'We work with all major commercial insurance payers, Medicare, Medicaid, and managed care organizations. This includes Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, and many others. We can help you enroll with specific payers based on your practice needs.',
        },
        {
          question: 'Can I bill insurance while my enrollment is pending?',
          answer: 'In most cases, you cannot bill insurance companies until your enrollment is officially approved and you have been assigned a provider number. However, some payers may allow retroactive billing. We work to minimize delays and keep you informed of your application status.',
        },
        {
          question: 'How often do I need to re-enroll with insurance payers?',
          answer: 'Insurance enrollment typically needs to be renewed every 2-5 years, depending on the payer. Additionally, you must maintain your CAQH profile with current attestations every 120 days. We provide ongoing monitoring to ensure timely renewals.',
        },
      ],
    },
    {
      category: 'CAQH Services',
      questions: [
        {
          question: 'What is CAQH?',
          answer: 'CAQH (Council for Affordable Quality Healthcare) is a nonprofit alliance that maintains a standardized credentialing database used by health plans and hospitals. Most insurance payers require providers to have a current CAQH ProView profile.',
        },
        {
          question: 'How often does CAQH need to be updated?',
          answer: 'CAQH requires reattestation every 120 days to keep your profile current. Failure to reattest can result in your profile being flagged as expired, which may affect your payer contracts. We monitor and manage this process for you.',
        },
        {
          question: 'What happens if my CAQH profile expires?',
          answer: 'If your CAQH profile expires, insurance payers may suspend your participation in their network, which can lead to claim denials and payment delays. It\'s crucial to maintain current attestations, which is why many providers use our CAQH management services.',
        },
      ],
    },
    {
      category: 'Our Services',
      questions: [
        {
          question: 'What information do you need to start the credentialing process?',
          answer: 'We\'ll need personal information (CV, licenses, DEA certificate), education and training documentation, work history, malpractice insurance information, hospital affiliations, and any specialty certifications. We provide a comprehensive checklist to make document collection easy.',
        },
        {
          question: 'Do you offer ongoing credentialing management?',
          answer: 'Yes! We provide continuous monitoring and management services including license renewals, CAQH attestations, payer re-enrollments, and recredentialing. This proactive approach ensures your credentials never lapse.',
        },
        {
          question: 'How much does credentialing cost?',
          answer: 'Our pricing varies based on the scope of services needed, number of providers, and complexity of your credentialing requirements. We offer competitive rates and transparent pricing. Contact us for a free consultation and customized quote.',
        },
        {
          question: 'Can you help with credentialing in multiple states?',
          answer: 'Absolutely! We have experience with multi-state credentialing and understand the unique requirements of different states. Whether you\'re expanding to one new state or several, we can manage the entire process efficiently.',
        },
        {
          question: 'What makes Quad Solutions different from other credentialing companies?',
          answer: 'We combine expertise, technology, and personalized service to deliver exceptional results. Our dedicated credentialing specialists, 99% approval rate, transparent communication, and commitment to compliance set us apart. Plus, we offer ongoing support to keep your credentials current.',
        },
      ],
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find answers to common questions about medical credentialing, insurance enrollment, and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary-200">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const index = `${categoryIndex}-${faqIndex}`
                    const isOpen = openIndex === index

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center space-x-3">
                            <HelpCircle className="text-primary-600 flex-shrink-0" size={20} />
                            <span className="font-semibold text-gray-900 text-lg">
                              {faq.question}
                            </span>
                          </div>
                          <ChevronDown
                            className={`text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            size={24}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 animate-slide-down">
                            <p className="text-gray-700 leading-relaxed pl-8">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our credentialing experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:+11234567890" className="btn-secondary">
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify Your Credentialing?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let Quad Solutions handle the complexity while you focus on patient care.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
