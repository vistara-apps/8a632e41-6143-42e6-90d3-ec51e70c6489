'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { CharityCard } from '../components/CharityCard';
import { 
  Heart, 
  Search, 
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  Plus
} from 'lucide-react';
import { FEATURED_CHARITIES } from '@/lib/constants';

export default function CharitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [selectedCharity, setSelectedCharity] = useState<string | null>(null);

  const categories = ['All', 'Health', 'Education', 'Environment', 'Poverty', 'Disaster Relief'];

  const mockCharities = [
    ...FEATURED_CHARITIES,
    {
      charityId: 'world-wildlife-fund',
      name: 'World Wildlife Fund',
      description: 'Protecting endangered species and their habitats worldwide',
      logoUrl: '/charities/wwf.png',
      walletAddress: '0xabc1f209551bD432803012645Hac136c5C8b4d8b9',
      daoApproved: true,
      createdAt: new Date('2024-01-01'),
    },
    {
      charityId: 'teach-for-america',
      name: 'Teach for America',
      description: 'Expanding educational opportunity for children in high-need communities',
      logoUrl: '/charities/teach-for-america.png',
      walletAddress: '0xdef2f209551bD432803012645Hac136c5C8b4d8b9',
      daoApproved: false,
      createdAt: new Date('2024-01-02'),
    },
  ];

  const filteredCharities = mockCharities.filter(charity => {
    const matchesSearch = charity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         charity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleDonate = (charityId: string) => {
    setSelectedCharity(charityId);
    setShowDonationModal(true);
  };

  return (
    <AppShell activeTab="charities">
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-accent" />
            <span className="text-sm font-medium text-accent">Make a Difference</span>
          </div>
          <h1 className="text-4xl font-bold text-fg mb-4">Support Charities</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover and support verified charities through transparent, on-chain donations. Every contribution is tracked and makes a real impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-success bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-success" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">45.7 ETH</div>
            <div className="text-sm text-gray-400">Total Donated</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">23</div>
            <div className="text-sm text-gray-400">Verified Charities</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">1,247</div>
            <div className="text-sm text-gray-400">Donors</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search charities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field w-40"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Propose Charity</span>
          </button>
        </div>

        {/* Charities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharities.map((charity) => (
            <CharityCard
              key={charity.charityId}
              charity={charity}
              totalDonations={Math.random() * 20 + 5} // Mock donation amounts
              onDonate={() => handleDonate(charity.charityId)}
              onLearnMore={() => console.log('Learn more about:', charity.charityId)}
            />
          ))}
        </div>

        {filteredCharities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">No charities found</h3>
            <p className="text-gray-400">Try adjusting your search criteria.</p>
          </div>
        )}

        {/* How It Works */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-semibold text-fg mb-6 text-center">How Donations Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">1</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Choose a Charity</h4>
              <p className="text-sm text-gray-400">Select from our DAO-approved list of verified charities</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">2</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Make Donation</h4>
              <p className="text-sm text-gray-400">Donate directly using your connected wallet</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">3</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Track Impact</h4>
              <p className="text-sm text-gray-400">View transparent, on-chain records of your contributions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="glass-card p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-fg mb-4">Make a Donation</h3>
            <p className="text-gray-400 mb-6">Choose an amount to donate to this charity.</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { amount: '0.001', label: '$5' },
                { amount: '0.002', label: '$10' },
                { amount: '0.005', label: '$25' },
                { amount: '0.01', label: '$50' },
              ].map((option) => (
                <button
                  key={option.amount}
                  className="btn-outline text-center py-3"
                >
                  <div className="font-semibold">{option.label}</div>
                  <div className="text-xs text-gray-400">{option.amount} ETH</div>
                </button>
              ))}
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDonationModal(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button className="btn-primary flex-1">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
