import { motion } from 'motion/react';
import { ArrowRight, School, Globe, DollarSign, Award, Trophy, Megaphone, MessagesSquare, Rocket } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { ProgramCard } from '../components/ProgramCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Import images from general_pictures
import heroImage from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_40.jpg';
import competitionImage from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_45.jpg';
import programImage1 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_12.jpg';
import programImage2 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_18.jpg';
import programImage3 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_22.jpg';

// Import sponsor logos
import easymoneyLogo from '../assets/sponsors/easymoney.jpg';
import icsLogo from '../assets/sponsors/ics.png';
import kcisLogo from '../assets/sponsors/kcis.png';
import lactasoyLogo from '../assets/sponsors/lactasoy.png';
import widpscLogo from '../assets/sponsors/widpsc.jpeg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const partners = [
    { name: 'EasyMoney', logo: easymoneyLogo },
    { name: 'ICS', logo: icsLogo },
    { name: 'KCIS', logo: kcisLogo },
    { name: 'Lactasoy', logo: lactasoyLogo },
    { name: 'WIDPSC', logo: widpscLogo },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F5F5E9] via-white to-[#043476]/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#DC2626] to-[#DC2626]/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#043476] to-[#043476]/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#F5F5E9] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl text-[#043476] mb-6 leading-tight">
                Find Your Voice.<br />
                <span className="text-[#DC2626]">Shape Your Future.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Speech Mania empowers students across Southeast Asia to discover the transformative power of public speaking.
                From first-time speakers to world champions, we help you develop the confidence and skills to make your voice heard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="px-8 py-4 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <span>Join a Workshop</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('programs')}
                  className="px-8 py-4 bg-white border-2 border-[#043476] text-[#043476] rounded-xl hover:bg-[#043476] hover:text-white transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Explore Programs
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Student presenting on stage"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043476]/20 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#043476] rounded-xl flex items-center justify-center">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl text-[#043476]">180+</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white via-[#F5F5E9]/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#043476]/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-[#DC2626]/30 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making a difference across Southeast Asia through education and empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="35+" label="Schools Impacted" icon={School} />
            <StatCard value="3" label="Countries" icon={Globe} />
            <StatCard value="500K" label="THB Raised" icon={DollarSign} />
            <StatCard value="5" label="Partner Organizations" icon={Award} />
          </div>
        </div>
      </section>

      {/* Why Speech Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] via-white to-[#043476]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-[#DC2626]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-[#043476]/20 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Why Speech?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Speech can change lives through powerful skills and confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: 'Self Advocacy',
                description: 'Learn to articulate your thoughts, defend your positions, and stand up for what you believe in with confidence and clarity.',
                gradient: 'from-[#DC2626] to-[#B91C1C]',
              },
              {
                icon: MessagesSquare,
                title: 'Communication',
                description: 'Master the art of effective communication, build meaningful connections, and influence others through powerful speaking.',
                gradient: 'from-[#043476] to-[#02234F]',
              },
              {
                icon: Rocket,
                title: 'Career Mobility',
                description: 'Open doors to educational and professional opportunities through enhanced presentation and leadership skills.',
                gradient: 'from-[#DC2626] to-[#043476]',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-all`} />
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl text-[#043476] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program - TIPSC 2025 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#043476] to-[#02234F] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-[#DC2626] text-white rounded-full text-sm mb-6 self-start">
                  Featured Event
                </div>
                <h2 className="text-4xl md:text-5xl text-white mb-6">TIPSC 2025</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join Thailand's premier public speaking competition with 180+ participants from across the nation.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
                    <div className="text-2xl">180+</div>
                    <div className="text-sm text-gray-300">Participants</div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
                    <div className="text-2xl">4</div>
                    <div className="text-sm text-gray-300">Preliminary Rounds</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('programs')}
                  className="px-8 py-4 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl hover:-translate-y-1 self-start flex items-center gap-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src={competitionImage}
                  alt="TIPSC Competition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#043476] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] via-white to-[#043476]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#043476]/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#DC2626]/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training and competition opportunities for every skill level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProgramCard
              title="National Competitions"
              description="Host 1-3 national tournaments yearly, bringing together the best student speakers from across Thailand."
              imageUrl={programImage1}
              onLearnMore={() => onNavigate('programs')}
            />
            <ProgramCard
              title="Pre-Competition Training"
              description="Expert-led workshops in public speaking techniques, judging criteria, and performance skills."
              imageUrl={programImage2}
              onLearnMore={() => onNavigate('programs')}
            />
            <ProgramCard
              title="National Team Management"
              description="Train and support Thailand's National Public Speaking team for WIDPSC international competition."
              imageUrl={programImage3}
              badge="WIDPSC 2025"
              onLearnMore={() => onNavigate('programs')}
            />
          </div>
        </div>
      </section>

      {/* Partnership Logos */}
      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-500 mb-8">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#DC2626] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Find Your Voice?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of students across Southeast Asia in developing confidence and communication skills.
            </p>
            <button
              onClick={() => onNavigate('get-involved')}
              className="px-8 py-4 bg-white text-[#DC2626] rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
