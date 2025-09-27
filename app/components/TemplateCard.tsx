'use client';

import { Play, Clock, Tag } from 'lucide-react';
import { VideoTemplate } from '@/lib/types';

interface TemplateCardProps {
  template: VideoTemplate;
  onSelect?: () => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  return (
    <div className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onSelect}>
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary to-accent">
        {template.thumbnailUrl ? (
          <img
            src={template.thumbnailUrl}
            alt={template.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Play className="w-12 h-12 text-white opacity-80" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-black bg-opacity-50 text-white">
            {template.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-fg mb-2">
          {template.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{template.duration}s</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Tag className="w-4 h-4" />
            <span>{template.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
