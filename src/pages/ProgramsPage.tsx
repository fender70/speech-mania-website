import { motion } from 'motion/react';
import { Trophy, Users, Award, Calendar, MapPin, Clock } from 'lucide-react';
import { ProgramCard } from '../components/ProgramCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Import general pictures for workshop photos
import workshop1 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_5.jpg';
import workshop2 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_35.jpg';
import competitionHeroImage from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_47.jpg';
import nationalTeamImage from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_28.jpg';
import tipscPoster from '../assets/general_pictures/tipsc-1.png';

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

export function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl text-[#043476] mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive public speaking education from beginner workshops to international competitions
            </p>
          </motion.div>
        </div>
      </section>

      {/* National Competitions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#043476] rounded-xl flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
                <h2 className="text-4xl text-[#043476]">National Competitions</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Speech Mania hosts 1-3 national tournaments yearly, providing a platform for students across 
                Thailand to showcase their public speaking talents and compete at the highest level.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Two speech categories: Persuasive and Impromptu',
                  'Professional judging by experienced coaches and former competitors',
                  'Preliminary rounds leading to semi-finals and finals',
                  'Recognition and awards for top performers',
                  'Networking opportunities with peers nationwide',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src={competitionHeroImage}
                alt="Competition"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Featured Event - TIPSC 2025 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-3xl text-[#043476] mb-8">Featured Event</h3>
            <div className="bg-gradient-to-br from-[#043476] to-[#02234F] rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Event poster */}
                <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                  <img
                    src={tipscPoster}
                    alt="TIPSC 2025 - Thailand Individual Public Speaking Competition"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right side - Event details */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-2 bg-[#DC2626] text-white rounded-full text-sm mb-4 w-fit">
                    Our Upcoming Event
                  </div>
                  <h4 className="text-3xl md:text-4xl text-white mb-2">TIPSC 2025</h4>
                  <p className="text-xl text-[#DC2626] mb-4">
                    Thailand Individual Public Speaking Competition
                  </p>
                  <p className="text-lg text-gray-300 mb-6">
                    The Thailand Individual Public Speaking Competition (TIPSC) is a national qualifier for the most prestigious tournament for public speaking, WIDPSC 25 (Worlds Individual Public Speaking and Debate 2025) which will be hosted in Kuala Lumpur this year. Join us for our flagship competition featuring the theme <span className="italic text-white">"Letter to a Better Future"</span> - where students share their vision for positive change through powerful speeches.
                  </p>
                  <div className="space-y-3 text-white mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-[#DC2626]" />
                      <span>1st February 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-[#DC2626]" />
                      <span>International Community School Bangkok</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy size={20} className="text-[#DC2626]" />
                      <span>Two Categories: Impromptu & Persuasive Speech</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <h4 className="text-white text-lg mb-3">Competition Details</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full mt-2 flex-shrink-0" />
                        <span><strong className="text-white">Impromptu:</strong> Test your quick thinking and spontaneous speaking skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full mt-2 flex-shrink-0" />
                        <span><strong className="text-white">Persuasive:</strong> Share your vision for positive change with compelling arguments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full mt-2 flex-shrink-0" />
                        <span><strong className="text-white">Theme:</strong> "Letter to a Better Future" - focus on solutions and positive implications</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => onNavigate('get-involved')}
                    className="w-full px-8 py-4 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl"
                  >
                    Register for TIPSC 2025
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* In-Person Workshops */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#043476] mb-4">In-Person Workshops (TBD)</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exciting new workshop programs coming soon. Be the first to know when they launch!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={workshop1}
                  alt="Speech Mania workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                    TBD
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our upcoming in-person workshops will provide hands-on training in public speaking, debate techniques, and performance skills. Small class sizes ensure personalized attention and rapid skill development.
                </p>
                <button className="px-6 py-3 border-2 border-[#043476] text-[#043476] rounded-xl hover:bg-[#043476] hover:text-white transition-all w-full">
                  Notify Me
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={workshop2}
                  alt="Speech Mania workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                    TBD
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Interactive sessions designed for students at all levels. Learn from experienced coaches and practice with peers in a supportive environment. Workshop schedules will be announced soon.
                </p>
                <button className="px-6 py-3 border-2 border-[#043476] text-[#043476] rounded-xl hover:bg-[#043476] hover:text-white transition-all w-full">
                  Notify Me
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pre-Competition Training */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <ImageWithFallback
                src={nationalTeamImage}
                alt="Workshop"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#043476] rounded-xl flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <h2 className="text-4xl text-[#043476]">Training Workshops</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Expert-led workshops designed to prepare students for competition success and develop 
                lifelong communication skills.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Public Speaking Fundamentals',
                    description: 'Master the basics: body language, vocal variety, and audience engagement',
                    duration: '4 weeks',
                  },
                  {
                    title: 'Advanced Speech Writing',
                    description: 'Craft compelling narratives with persuasive structure and rhetorical devices',
                    duration: '6 weeks',
                  },
                  {
                    title: 'Judging & Evaluation',
                    description: 'Learn to analyze speeches and provide constructive feedback',
                    duration: '2 weeks',
                  },
                ].map((workshop, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg text-[#043476]">{workshop.title}</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>{workshop.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{workshop.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* National Team Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#043476] rounded-xl flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h2 className="text-4xl text-[#043476]">National Team Management</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manage, fund, and train Thailand's National Public Speaking team for the World Individual 
              Debating and Public Speaking Championships (WIDPSC)
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#F5F5E9] to-white rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl text-[#043476] mb-6 text-center">What is WIDPSC?</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
              The World Individual Debating and Public Speaking Championships is the most prestigious competitive 
              public speaking competition for high schools globally. Students compete in multiple categories including 
              impromptu speaking, persuasive speaking, and debating against the best young orators from around the world.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl text-[#043476] mb-8 text-center">Team Thailand WIDPSC 2025 Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Poomkarn Taedullayasut',
                  category: 'Persuasive Speaking',
                  achievement: 'Finalist',
                  color: 'from-yellow-400 to-yellow-600',
                },
                {
                  name: 'Ravipat Rodphothong',
                  category: 'Impromptu Speaking',
                  achievement: 'Semi-Finalist',
                  color: 'from-gray-400 to-gray-600',
                },
                {
                  name: 'Prim Chantaraprapab',
                  category: 'Debating',
                  achievement: 'Semi-Finalist',
                  color: 'from-orange-400 to-orange-600',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Award className="text-white" size={32} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-[#DC2626] text-white text-xs rounded-full mb-3">
                    {member.achievement}
                  </div>
                  <h4 className="text-lg text-[#043476] mb-2">{member.name}</h4>
                  <p className="text-gray-600">{member.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Join Our Programs?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're a beginner or aspiring champion, we have a program for you
            </p>
            <button
              onClick={() => onNavigate('get-involved')}
              className="px-8 py-4 bg-white text-[#DC2626] rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              Explore Opportunities
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
