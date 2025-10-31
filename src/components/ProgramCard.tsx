import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  onLearnMore?: () => void;
}

export function ProgramCard({ title, description, imageUrl, badge, onLearnMore }: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-[#DC2626] text-white px-4 py-1.5 rounded-full text-sm">
            {badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-[#043476] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {onLearnMore && (
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 text-[#DC2626] hover:gap-4 transition-all group/btn"
          >
            <span>Learn More</span>
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
