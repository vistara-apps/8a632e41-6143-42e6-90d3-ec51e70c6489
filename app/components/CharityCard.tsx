'use client';

import { Heart, ExternalLink, TrendingUp } from 'lucide-react';
import { Charity } from '@/lib/types';
import { formatAmount } from '@/lib/utils';

interface CharityCardProps {
  charity: Charity;
  totalDonations?: string;
  onDonate?: () => void;
  onLearnMore?: () => void;
}

export function CharityCard({ 
  charity, 
  totalDonations = '0', 
  onDonate, 
  onLearnMore 
}: CharityCardProps) {
  return (
    <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center">
            {charity.logoUrl ? (
              <img
                src={charity.logoUrl}
                alt={charity.name}
                className="w-8 h-8 rounded"
              />
            ) : (
              <Heart className="w-6 h-6 text-accent" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-fg">{charity.name}</h3>
            {charity.daoApproved && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success bg-opacity-20 text-success">
                DAO Approved
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={onLearnMore}
          className="p-2 rounded-lg hover:bg-surface hover:bg-opacity-60 transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6 line-clamp-3">
        {charity.description}
      </p>

      {/* Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-sm text-gray-400">Total Raised</span>
        </div>
        <span className="font-semibold text-success">
          {formatAmount(totalDonations)}
        </span>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <button
          onClick={onDonate}
          className="btn-primary flex-1 flex items-center justify-center space-x-2"
        >
          <Heart className="w-4 h-4" />
          <span>Donate</span>
        </button>
        
        <button
          onClick={onLearnMore}
          className="btn-outline px-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
