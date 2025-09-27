'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { DAOProposalCard } from '../components/DAOProposalCard';
import { 
  Users, 
  Vote, 
  TrendingUp,
  Plus,
  Clock,
  CheckCircle
} from 'lucide-react';
import { DAOProposal } from '@/lib/types';

export default function DAOPage() {
  const [activeTab, setActiveTab] = useState<'active' | 'passed' | 'failed'>('active');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const mockProposals: DAOProposal[] = [
    {
      proposalId: '1',
      proposerUserId: 'user1',
      proposalType: 'add_charity',
      details: 'Proposal to add "Save the Children" as a verified charity partner. This organization has a strong track record of helping children in crisis situations worldwide and aligns with our mission of supporting meaningful causes.',
      voteThreshold: 100,
      startDate: new Date('2024-01-10'),
      endDate: new Date('2024-01-20'),
      status: 'active',
    },
    {
      proposalId: '2',
      proposerUserId: 'user2',
      proposalType: 'fund_allocation',
      details: 'Proposal to allocate 15% of platform revenue to a new emergency relief fund that can be quickly deployed during natural disasters and humanitarian crises.',
      voteThreshold: 150,
      startDate: new Date('2024-01-08'),
      endDate: new Date('2024-01-18'),
      status: 'active',
    },
    {
      proposalId: '3',
      proposerUserId: 'user3',
      proposalType: 'governance',
      details: 'Proposal to implement a creator verification system that provides additional benefits and features to creators who have successfully raised funds for charities.',
      voteThreshold: 75,
      startDate: new Date('2024-01-05'),
      endDate: new Date('2024-01-15'),
      status: 'passed',
    },
  ];

  const filteredProposals = mockProposals.filter(proposal => proposal.status === activeTab);

  const stats = {
    totalProposals: 47,
    activeVoters: 234,
    totalVotes: 1567,
    passedProposals: 32,
  };

  const handleVote = (proposalId: string, vote: 'yes' | 'no') => {
    console.log(`Voting ${vote} on proposal ${proposalId}`);
    // In a real app, this would interact with the smart contract
  };

  return (
    <AppShell activeTab="dao">
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="w-6 h-6 text-accent" />
            <span className="text-sm font-medium text-accent">Decentralized Governance</span>
          </div>
          <h1 className="text-4xl font-bold text-fg mb-4">CreatorDAO</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Participate in the governance of CreatorDAO. Vote on proposals, suggest new charities, and help shape the future of creator-driven philanthropy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Vote className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.totalProposals}</div>
            <div className="text-sm text-gray-400">Total Proposals</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.activeVoters}</div>
            <div className="text-sm text-gray-400">Active Voters</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-success bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.totalVotes}</div>
            <div className="text-sm text-gray-400">Total Votes</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-warning bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-warning" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.passedProposals}</div>
            <div className="text-sm text-gray-400">Passed Proposals</div>
          </div>
        </div>

        {/* Tabs and Create Button */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 bg-surface rounded-lg p-1">
            {[
              { id: 'active', label: 'Active', icon: Clock },
              { id: 'passed', label: 'Passed', icon: CheckCircle },
              { id: 'failed', label: 'Failed', icon: Vote },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-accent text-white'
                      : 'text-gray-400 hover:text-fg'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Proposal</span>
          </button>
        </div>

        {/* Proposals */}
        <div className="space-y-6">
          {filteredProposals.map((proposal) => (
            <DAOProposalCard
              key={proposal.proposalId}
              proposal={proposal}
              yesVotes={Math.floor(Math.random() * 100) + 20}
              noVotes={Math.floor(Math.random() * 50) + 5}
              onVote={handleVote}
            />
          ))}
        </div>

        {filteredProposals.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
              <Vote className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">No {activeTab} proposals</h3>
            <p className="text-gray-400">Check back later or create a new proposal.</p>
          </div>
        )}

        {/* How Voting Works */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-semibold text-fg mb-6 text-center">How DAO Voting Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">1</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Create Proposal</h4>
              <p className="text-sm text-gray-400">Any community member can propose changes or new charity additions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">2</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Community Vote</h4>
              <p className="text-sm text-gray-400">Token holders vote on proposals during the voting period</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">3</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Execute Decision</h4>
              <p className="text-sm text-gray-400">Passed proposals are automatically executed on-chain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Create Proposal Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="glass-card p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-fg mb-4">Create New Proposal</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-fg mb-2">Proposal Type</label>
                <select className="input-field w-full">
                  <option value="add_charity">Add Charity</option>
                  <option value="fund_allocation">Fund Allocation</option>
                  <option value="governance">Governance</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-fg mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Brief title for your proposal"
                  className="input-field w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-fg mb-2">Description</label>
                <textarea
                  placeholder="Detailed description of your proposal, including rationale and expected impact..."
                  className="input-field w-full h-32 resize-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-fg mb-2">Voting Duration (days)</label>
                <input
                  type="number"
                  defaultValue={7}
                  min={1}
                  max={30}
                  className="input-field w-full"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button className="btn-primary flex-1">
                Submit Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
