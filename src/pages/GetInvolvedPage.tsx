import { motion } from 'motion/react';
import { GraduationCap, School, Heart, BookOpen, ArrowRight, Download } from 'lucide-react';

// Import resource PDFs
import eventOutreachPDF from '../assets/resources/2025  Event Outreach Slides.pdf';
import impromptuBallotsPDF from '../assets/resources/Impromtu Sample Ballots.pdf';
import interpretiveTrainingPDF from '../assets/resources/Interpretive Speech Training Slides.pdf';
import persuasiveBallotsPDF from '../assets/resources/Persuasive Sample Ballots .pdf';
import sponsorPackagePDF from '../assets/resources/Speech Mania Sponsor.pdf';

// Import general pictures for gallery
import gallery1 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_1.jpg';
import gallery2 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_10.jpg';
import gallery3 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_20.jpg';
import gallery4 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_30.jpg';

interface GetInvolvedPageProps {
  onNavigate: (page: string) => void;
}

export function GetInvolvedPage({ onNavigate }: GetInvolvedPageProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const pathways = [
    {
      icon: GraduationCap,
      title: 'For Students',
      description: 'Develop your public speaking skills through workshops, compete in national tournaments, and represent Thailand at international competitions',
      actions: [
        { label: 'Register for Workshop', onClick: () => scrollToSection('workshop-registration') },
        { label: 'Learn About TIPSC 2025', onClick: () => onNavigate('programs') },
        { label: 'National Team Info', onClick: () => onNavigate('programs') },
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: School,
      title: 'For Schools',
      description: 'Bring world-class speech and debate education to your institution through partnerships, workshops, and competition participation',
      actions: [
        { label: 'Partner With Us', onClick: () => { onNavigate('contact'); setTimeout(() => scrollToSection('contact-form'), 100); } },
        { label: 'Request Workshop', onClick: () => { onNavigate('contact'); setTimeout(() => scrollToSection('contact-form'), 100); } },
        { label: 'View Programs', onClick: () => onNavigate('programs') },
      ],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Heart,
      title: 'For Sponsors',
      description: 'Support Southeast Asian students in developing leadership and communication skills that will shape their futures',
      actions: [
        { label: 'Download Sponsorship Package', onClick: () => window.open(sponsorPackagePDF, '_blank') },
        { label: 'Schedule a Meeting', onClick: () => { onNavigate('contact'); setTimeout(() => scrollToSection('contact-form'), 100); } },
        { label: 'Learn About Impact', onClick: () => onNavigate('impact') },
      ],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: BookOpen,
      title: 'Free Resources',
      description: 'Download competition materials, training guides, and sample ballots to improve your speaking and judging skills',
      actions: [
        { label: 'Browse All Resources', onClick: () => scrollToSection('resources-section') },
        { label: 'Event Outreach Slides', onClick: () => window.open(eventOutreachPDF, '_blank') },
        { label: 'Sample Ballots', onClick: () => scrollToSection('resources-section') },
      ],
      color: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl text-[#043476] mb-6">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              There are many ways to join the Speech Mania community and make an impact
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're a student looking to develop your speaking skills, a school interested in partnership opportunities, or a sponsor wanting to support youth education, we welcome you to be part of our growing community. Together, we're building the next generation of confident, articulate leaders across Southeast Asia.
            </p>
          </motion.div>

          {/* Event Photos Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[gallery1, gallery2, gallery3, gallery4].map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={photo}
                  alt={`Speech Mania event ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${pathway.color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pathway.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <pathway.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl text-[#043476] mb-4">{pathway.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{pathway.description}</p>
                  <div className="space-y-3">
                    {pathway.actions.map((action, i) => (
                      <button
                        key={i}
                        onClick={action.onClick}
                        className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-[#F5F5E9] transition-colors flex items-center justify-between group/btn"
                      >
                        <span className="text-[#043476]">{action.label}</span>
                        <ArrowRight size={18} className="text-[#DC2626] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Registration */}
      <section id="workshop-registration" className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Workshop Registration</h2>
            <p className="text-xl text-gray-600">Join our upcoming public speaking workshops and training sessions</p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">School/Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all"
                  placeholder="Your school or organization name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Program Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all">
                  <option>Select a program</option>
                  <option>Public Speaking Fundamentals</option>
                  <option>Advanced Speech Writing</option>
                  <option>Judging & Evaluation</option>
                  <option>TIPSC 2025 Competition</option>
                  <option>National Team Application</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#043476] focus:ring-2 focus:ring-[#043476]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your goals and experience..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <span>Submit Registration</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-[#043476] mb-6">Sponsor Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Your support helps us provide world-class speech education to students who might not otherwise 
                have access to these opportunities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-[#043476] mb-1">Tournament Sponsorship</h4>
                    <p className="text-gray-600">Support our flagship competitions and get brand visibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-[#043476] mb-1">Scholarship Fund</h4>
                    <p className="text-gray-600">Help talented students access our programs regardless of financial means</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-[#043476] mb-1">Program Development</h4>
                    <p className="text-gray-600">Fund new workshops and expand to more schools</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={sponsorPackagePDF}
                  download
                  className="px-6 py-3 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Sponsorship Package
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 bg-white border-2 border-[#043476] text-[#043476] rounded-xl hover:bg-[#043476] hover:text-white transition-all"
                >
                  Schedule a Meeting
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#043476] to-[#02234F] rounded-2xl p-8 md:p-12 text-white"
            >
              <h3 className="text-2xl mb-6">Sponsorship Impact</h3>
              <div className="space-y-6">
                {[
                  { amount: '500K THB', impact: 'Raised to support our programs' },
                  { amount: '35+ Schools', impact: 'Reached through partnerships' },
                  { amount: '500+ Students', impact: 'Trained with sponsor support' },
                ].map((stat, index) => (
                  <div key={index} className="border-l-4 border-[#DC2626] pl-4">
                    <div className="text-3xl mb-1">{stat.amount}</div>
                    <div className="text-gray-300">{stat.impact}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm italic">
                  "Supporting Speech Mania has been one of the most rewarding partnerships for our organization. 
                  We've seen firsthand the incredible impact on student confidence and capability."
                </p>
                <p className="text-sm mt-2">— Partner Organization</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources-section" className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Free Resources</h2>
            <p className="text-xl text-gray-600">Download guides and materials to enhance your speaking skills</p>
          </motion.div>

          {/* Program PDF Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#043476]">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#043476] rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-[#043476] mb-2">2025 Event Outreach Slides</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive event information and outreach materials for our 2025 programs.
                  </p>
                  <a
                    href={eventOutreachPDF}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl"
                  >
                    <Download size={20} />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Impromptu Sample Ballots', type: 'PDF', file: impromptuBallotsPDF, description: 'Sample ballots and judging criteria for impromptu speaking events' },
              { title: 'Interpretive Speech Training Slides', type: 'PDF', file: interpretiveTrainingPDF, description: 'Training materials for interpretive speech performance' },
              { title: 'Persuasive Sample Ballots', type: 'PDF', file: persuasiveBallotsPDF, description: 'Sample ballots and rubrics for persuasive speech competitions' },
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.file}
                download
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer block"
              >
                <div className="w-12 h-12 bg-[#043476] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="text-lg text-[#043476] mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#DC2626] font-medium">
                  <Download size={16} />
                  <span>Download {resource.type}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
