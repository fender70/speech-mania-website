import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExecutiveCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  email?: string;
  isFounder?: boolean;
}

export function ExecutiveCard({ name, title, bio, imageUrl, linkedin, email, isFounder }: ExecutiveCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isFounder ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl text-white mb-1">{name}</h3>
          <p className="text-[#EF4444] text-sm">{title}</p>
          {isFounder && (
            <div className="mt-2 inline-block px-3 py-1 bg-[#DC2626] text-white text-xs rounded-full">
              Founder
            </div>
          )}
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#043476]/10 rounded-lg hover:bg-[#043476] hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 bg-[#043476]/10 rounded-lg hover:bg-[#043476] hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
