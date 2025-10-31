import { motion } from 'motion/react';
import { School, Globe, Award, TrendingUp, Quote, Users, BookOpen, DollarSign } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Import images from general_pictures
import testimonial1Image from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_32.jpg';
import testimonial2Image from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_38.jpg';
import gallery1 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_44.jpg';
import gallery2 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_51.jpg';
import gallery3 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_56.jpg';
import gallery4 from '../assets/general_pictures/LINE_ALBUM_TIPSC photos_250908_60.jpg';

interface ImpactPageProps {
  onNavigate: (page: string) => void;
}

export function ImpactPage({ onNavigate }: ImpactPageProps) {
  const testimonials = [
    {
      quote: "Speech Mania inspired me and so many other students to be brave and share our stories through the medium of speech and debate, a sport which although can be daunting - is incredibly rewarding. I felt every event they organised brought both a sense of impressive professionalism, but also deep support and camaraderie - fostering an environment which felt safe, welcoming, yet also always challenging us to go the extra mile. I'm especially grateful for the fact that Speech Mania became the first organisation to introduce the opportunity for students to qualify to represent Thailand and compete at Worlds, initiating our journey as a national team! I'm beyond excited to see the competition and community only strengthen in the future.",
      name: "Prim Chantaprapab",
      school: "Shrewsbury International School",
      achievement: "Worlds Debating Semi Finalist",
      imageUrl: testimonial1Image,
    },
    {
      quote: "My journey with Speech Mania has been nothing short of amazing—from TIPSC to representing Thailand at Worlds. They took care of everything, from training sessions to logistics, which made the whole experience so smooth and I barely had to worry about anything. I'm so grateful for the chance to go to Worlds, it was truly life-changing. I grew so much, not just in my public speaking, but as a person too. Along the way, I met so many talented and inspiring people who pushed me to be better. I'd absolutely recommend Speech Mania to anyone who wants to grow, challenge themselves, and be part of an incredible community.",
      name: "Kate Sarisa Pheongrattana",
      school: "International Community School",
      achievement: "WIDPSC Team Thailand Representative, Third Best National Speaker (TIPSC 2025)",
      imageUrl: testimonial2Image,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl text-[#043476] mb-6">Our Impact</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming lives and building confident leaders across Southeast Asia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our reach and impact continue to grow</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { number: '35+', label: 'Schools Impacted', icon: School },
              { number: '3', label: 'Countries Reached', icon: Globe },
              { number: '500+', label: 'Students Impacted', icon: Users },
              { number: '10', label: 'National Champions Trained', icon: Award },
              { number: '95%', label: 'Student Satisfaction Rate', icon: TrendingUp },
              { number: '10', label: 'Workshops Delivered', icon: BookOpen },
              { number: '500K THB', label: 'Raised', icon: DollarSign },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F5F5E9] to-white rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 bg-[#043476] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-5xl text-[#043476] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from students whose lives were transformed</p>
          </motion.div>

          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl relative">
                    <Quote className="absolute -top-4 -left-4 text-[#DC2626] opacity-20" size={60} />
                    <p className="text-lg text-gray-600 italic mb-6 relative z-10 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#043476] rounded-full" />
                      <div>
                        <div className="text-[#043476]">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.school}</div>
                        <div className="text-sm text-[#DC2626]">{testimonial.achievement}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Competition Achievements</h2>
            <p className="text-xl text-gray-600">Our students excel on national and international stages</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: '2025',
                title: 'WIDPSC World Championships',
                achievements: [
                  'Finalist - Persuasive Speaking (Poomkarn Taedullayasut)',
                  'Semi-Finalist - Impromptu Speaking (Ravipat Rodphothong)',
                  'Semi-Finalist - Debating (Prim Chantaraprapab)',
                ],
              },
              {
                year: '2024',
                title: 'Thailand National Championship',
                achievements: [
                  '1st Place - Overall Champion',
                  '3 category winners from Speech Mania students',
                  '12 students reached semi-finals',
                ],
              },
              {
                year: '2023',
                title: 'Program Launch',
                achievements: [
                  '2 workshops delivered',
                ],
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-4 border-[#DC2626]"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#DC2626] rounded-full" />
                <div className="bg-gradient-to-br from-[#F5F5E9] to-white rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-4 py-1 bg-[#043476] text-white rounded-full">{event.year}</div>
                    <h3 className="text-2xl text-[#043476]">{event.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {event.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Award className="text-[#DC2626] flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Teaser */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#043476] mb-4">Moments That Matter</h2>
            <p className="text-xl text-gray-600">Capturing the energy and excitement of our events</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <ImageWithFallback src={url} alt={`Event ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
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
              Be Part of Our Success Story
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of students who have transformed their lives through public speaking
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
