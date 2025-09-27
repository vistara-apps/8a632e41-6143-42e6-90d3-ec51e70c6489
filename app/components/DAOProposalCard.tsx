'use client';

import { Vote, Clock, Users, CheckCircle, XCircle } from 'lucide-react';
import { DAOProposal } from '@/lib/types';
import { calculateTimeRemaining, formatDate } from '@/lib/utils';

interface DAOProposalCardProps {
  proposal: DAOProposal;
  userVote?: 'yes' | 'no' | null;
  yesVotes?: number;
  noVotes?: number;
  onVote?: (vote: 'yes' | 'no') => void;
}

export function DAOProposalCard({ 
  proposal, 
  userVote, 
  yesVotes = 0, 
  noVotes = 0, 
  onVote 
}: DAOProposalCardProps) {
  const totalVotes = yesVotes + noVotes;
  const yesPercentage = totalVotes > 0 ? (yesVotes / totalVotes) * 100 : 0;
  const timeRemaining = calculateTimeRemaining(proposal.endDate);
  
  const statusColors = {
    pending: 'bg-yellow-500',
    active: 'bg-blue-500',
    passed: 'bg-green-500',
    failed: 'bg-red-500',
  };

  const typeLabels = {
    add_charity: 'Add Charity',
    fund_allocation: 'Fund Allocation',
    governance: 'Governance',
  };

  return (
    <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
            <Vote className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="text-sm text-gray-400">{typeLabels[proposal.proposalType]}</span>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${statusColors[proposal.status]}`}>
                {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-right text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{timeRemaining}</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mb-6">
        <p className="text-fg text-sm leading-relaxed">
          {proposal.details}
        </p>
      </div>

      {/* Voting stats */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>Voting Progress</span>
          <span>{totalVotes} votes</span>
        </div>
        
        <div className="w-full bg-surface rounded-full h-2 mb-3">
          <div 
            className="bg-success h-2 rounded-full transition-all duration-300"
            style={{ width: `${yesPercentage}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-success">{yesVotes} Yes ({yesPercentage.toFixed(1)}%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <XCircle className="w-4 h-4 text-danger" />
            <span className="text-danger">{noVotes} No ({(100 - yesPercentage).toFixed(1)}%)</span>
          </div>
        </div>
      </div>

      {/* Voting actions */}
      {proposal.status === 'active' && (
        <div className="flex space-x-3">
          <button
            onClick={() => onVote?.('yes')}
            disabled={!!userVote}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              userVote === 'yes'
                ? 'bg-success bg-opacity-20 text-success border border-success'
                : userVote
                ? 'bg-surface text-gray-400 cursor-not-allowed'
                : 'bg-success bg-opacity-10 text-success hover:bg-opacity-20 border border-success border-opacity-30'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Yes</span>
          </button>
          
          <button
            onClick={() => onVote?.('no')}
            disabled={!!userVote}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              userVote === 'no'
                ? 'bg-danger bg-opacity-20 text-danger border border-danger'
                : userVote
                ? 'bg-surface text-gray-400 cursor-not-allowed'
                : 'bg-danger bg-opacity-10 text-danger hover:bg-opacity-20 border border-danger border-opacity-30'
            }`}
          >
            <XCircle className="w-4 h-4" />
            <span>No</span>
          </button>
        </div>
      )}

      {userVote && (
        <div className="mt-3 text-center text-sm text-gray-400">
          You voted <span className={userVote === 'yes' ? 'text-success' : 'text-danger'}>{userVote.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
}
