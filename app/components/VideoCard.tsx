'use client';

import { Play, Heart, Eye, Calendar } from 'lucide-react';
import { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface VideoCardProps {
  project: Project;
  onPlay?: () => void;
  onDonate?: () => void;
}

export function VideoCard({ project, onPlay, onDonate }: VideoCardProps) {
  const statusColors = {
    draft: 'bg-yellow-500',
    processing: 'bg-blue-500',
    published: 'bg-green-500',
  };

  return (
    <div className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-surface">
        {project.thumbnailUrl ? (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-accent">
            <Play className="w-12 h-12 text-white opacity-80" />
          </div>
        )}
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={onPlay}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30"
          >
            <Play className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${statusColors[project.status]}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-fg mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>1.2k</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(project.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={onPlay}
            className="btn-secondary text-sm px-4 py-2"
          >
            View Video
          </button>
          
          <button
            onClick={onDonate}
            className="flex items-center space-x-2 text-accent hover:text-opacity-80 transition-colors duration-200"
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm">Donate</span>
          </button>
        </div>
      </div>
    </div>
  );
}
