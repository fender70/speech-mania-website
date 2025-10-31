import { motion } from 'motion/react';
import { Quote, Target, Heart, Lightbulb } from 'lucide-react';
import { ExecutiveCard } from '../components/ExecutiveCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Import headshots
import proudHeadshot from '../assets/headshots/proud.jpg';
import aikoHeadshot from '../assets/headshots/aiko.png';
import detchHeadshot from '../assets/headshots/detch.png';
import cedricHeadshot from '../assets/headshots/cedric.JPG';

// Import general pictures
import heroImage from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_57.jpg';
import whoWeAreImage from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_25.jpg';
import benefitImage1 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_42.jpg';
import benefitImage2 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_48.jpg';
import benefitImage3 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_55.jpg';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F5F5E9] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 rounded-3xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: '16/9' }}
          >
            <img
              src={heroImage}
              alt="Speech Mania team and students"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <Quote className="absolute -top-4 -left-4 text-[#DC2626] opacity-20" size={80} />
              <blockquote className="text-3xl md:text-4xl text-[#043476] italic mb-8 relative z-10">
                "Speech has transformed the way I see the world and connect with people and I think it's something I'd like to see other children experience"
              </blockquote>
              <p className="text-xl text-gray-600">— Speech Mania Founder, Proud R</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-[#043476] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Speech Mania is a youth-led organization that empowers students across Thailand and Southeast Asia 
                to develop their own voices and learn about different ideas through public speaking and leadership programs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded to make high-quality speech education accessible, we foster communication skills within youths 
                and provide them with platforms to showcase their talents and perspectives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through competitions, workshops, and national team management, we've impacted 35+ schools across 3 countries, 
                creating a vibrant community of confident, articulate young leaders.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={whoWeAreImage}
                  alt="Students in workshop"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-[#043476] to-[#02234F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Target className="mx-auto mb-6 text-[#DC2626]" size={48} />
            <h2 className="text-4xl md:text-5xl mb-8">Our Mission</h2>
            <p className="text-2xl leading-relaxed opacity-90">
              To empower the next generation of leaders by making world-class public speaking education 
              accessible to students across Southeast Asia, fostering confidence, critical thinking, and 
              communication excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Speech - Expanded */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Why Speech Matters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Public speaking is more than just talking—it's about transforming lives
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                icon: Heart,
                title: 'Increased Ability to Self Advocate',
                description: 'Public speaking empowers students to articulate their thoughts clearly, defend their positions with confidence, and stand up for what they believe in. Through our programs, students learn to express their needs, challenge injustice, and advocate for themselves and their communities. This skill is invaluable in academic settings, future careers, and personal relationships.',
                imageUrl: benefitImage1,
                reverse: false,
              },
              {
                icon: Lightbulb,
                title: 'Enhanced Communication Ability',
                description: 'Effective communication is the cornerstone of success in every field. Our training helps students master verbal and non-verbal communication, active listening, audience analysis, and persuasive techniques. Students learn to adapt their message to different contexts, read social cues, and build meaningful connections that last a lifetime.',
                imageUrl: benefitImage2,
                reverse: true,
              },
              {
                icon: Target,
                title: 'Greater Career & Educational Mobility',
                description: 'Strong public speaking skills open doors to scholarships, internships, and leadership positions. Our alumni have been accepted to top universities worldwide, secured competitive internships, and won prestigious awards. The confidence and competence gained through speech training translates directly to interview success, networking opportunities, and professional advancement.',
                imageUrl: benefitImage3,
                reverse: false,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${benefit.reverse ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={benefit.reverse ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#043476] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-3xl text-[#043476]">{benefit.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className={benefit.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={benefit.imageUrl}
                      alt={benefit.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate youth leaders dedicated to empowering the next generation of speakers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={proudHeadshot}
                  alt="Proud Rodphothong headshot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl text-[#043476] mb-2">Proud Rodphothong</h4>
                <p className="text-sm text-[#DC2626] mb-3">Founder & Executive Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Former WIDPSC 2x Thailand Representative and Part of the Thai National Debate Team. Proud founded Speech Mania inspired by how speech has impacted her own life and in hopes of increasing access to speaking education in Southeast Asia. Under their leadership the organization has impacted over 35 schools.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={aikoHeadshot}
                  alt="Aiko Thangthanakeat headshot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl text-[#043476] mb-2">Aiko Thangthanakeat</h4>
                <p className="text-sm text-[#DC2626] mb-3">Co-Founder & Communications Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Former Debater with coaching experience in America. Aiko has extensive experience in public speaking and outreach having run multiple successful fundraisers in Thailand. Aiko joined the team in hopes of sharing her skills and expertise in helping South-East Asian students.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={detchHeadshot}
                  alt="Thanadetch Mateedunsatits headshot"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: '50% 15%' }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl text-[#043476] mb-2">Thanadetch Mateedunsatits</h4>
                <p className="text-sm text-[#DC2626] mb-3">Co-Founder & Operations Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Manages all tournament operations and judging coordination. Detch has helped organize over 5 conferences and competitions in Thailand and also oversees the logistics of Team Thailand at Worlds.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={cedricHeadshot}
                  alt="Cedric Zarate headshot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl text-[#043476] mb-2">Cedric Zarate</h4>
                <p className="text-sm text-[#DC2626] mb-3">Technology Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cedric oversees all things tech at Speech Mania. He manages our website and leads development of speech.io, an AI practice companion that gives instant, actionable feedback on delivery and structure. His work centers on access and scalability, making high-quality speaking practice available to students across Southeast Asia.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => onNavigate('get-involved')}
              className="px-8 py-4 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Want to Join Our Team?
            </button>
            <p className="text-gray-600 mt-4">
              We're always looking for passionate individuals to help expand our impact
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
