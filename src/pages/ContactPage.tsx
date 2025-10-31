import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: 'For Students',
      questions: [
        {
          q: 'How do I register for a workshop?',
          a: 'Visit our Get Involved page and fill out the registration form. You can also email us directly at info@speechmania.org with your details and program interest.',
        },
        {
          q: 'What is the cost of workshops?',
          a: 'Workshop costs vary by program. We offer scholarships and financial aid for students who demonstrate need. Contact us to discuss pricing and available support.',
        },
        {
          q: 'Do I need prior speaking experience?',
          a: 'No! Our programs welcome students of all skill levels, from complete beginners to advanced competitors.',
        },
      ],
    },
    {
      category: 'For Schools',
      questions: [
        {
          q: 'How can my school partner with Speech Mania?',
          a: 'We offer several partnership models including hosting workshops, competition participation, and curriculum integration. Contact us to discuss the best fit for your institution.',
        },
        {
          q: 'What resources do you provide to partner schools?',
          a: 'Partners receive access to our curriculum materials, teacher training, student workshop sessions, and priority registration for competitions.',
        },
      ],
    },
    {
      category: 'For Sponsors',
      questions: [
        {
          q: 'What are the sponsorship levels?',
          a: 'We offer Bronze, Silver, Gold, and Platinum sponsorship tiers ranging from 50,000 to 500,000 THB. Each level includes different benefits and visibility opportunities.',
        },
        {
          q: 'How is sponsorship money used?',
          a: 'Funds support competition hosting, student scholarships, program development, and national team training. We provide detailed impact reports to all sponsors.',
        },
      ],
    },
    {
      category: 'General',
      questions: [
        {
          q: 'What is WIDPSC?',
          a: 'The World Individual Debating and Public Speaking Championships is the most prestigious international competition for high school public speaking. Speech Mania manages and trains Team Thailand.',
        },
        {
          q: 'How can I stay updated on Speech Mania events?',
          a: 'Follow us on social media or sign up for our newsletter through the contact form to receive updates on competitions, workshops, and achievements.',
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl text-[#043476] mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions or inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-[#043476] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Purpose</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all">
                    <option>Select a purpose</option>
                    <option>Student Inquiry</option>
                    <option>School Partnership</option>
                    <option>Sponsorship</option>
                    <option>Media & Press</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24-48 hours
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl text-[#043476] mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're a student interested in our programs, a school looking to partner, 
                  or a potential sponsor, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'speechmaniaofficial@gmail.com',
                    link: 'mailto:speechmaniaofficial@gmail.com',
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+66 0956491999',
                    subtitle: '(currently unavailable)',
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    content: 'Bangkok, Thailand',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#F5F5E9] to-white rounded-xl"
                  >
                    <div className="w-12 h-12 bg-[#043476] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg text-[#043476] mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:text-[#DC2626] transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <>
                          <p className="text-gray-600">{item.content}</p>
                          {'subtitle' in item && (
                            <p className="text-sm text-gray-500 italic">{item.subtitle}</p>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#043476] to-[#02234F] rounded-2xl p-8 text-white">
                <h3 className="text-xl mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl text-[#043476] mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isExpanded = expandedFAQ === globalIndex;

                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: faqIndex * 0.1 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => setExpandedFAQ(isExpanded ? null : globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg text-[#043476]">{faq.q}</span>
                          <ChevronDown
                            className={`text-[#DC2626] transition-transform flex-shrink-0 ml-4 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            size={24}
                          />
                        </button>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Didn't find what you were looking for?</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us Directly
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
