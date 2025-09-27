'use client';

import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { VideoCard } from './components/VideoCard';
import { CharityCard } from './components/CharityCard';
import { TemplateCard } from './components/TemplateCard';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Video,
  Plus,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { VIDEO_TEMPLATES, FEATURED_CHARITIES } from '@/lib/constants';
import { Project } from '@/lib/types';

export default function HomePage() {
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState({
    totalVideos: 1247,
    totalDonations: '45.7',
    activeCreators: 892,
    charitiesSupported: 23,
  });

  // Mock recent projects
  useEffect(() => {
    const mockProjects: Project[] = [
      {
        projectId: '1',
        userId: 'user1',
        title: 'Supporting Clean Water Initiative',
        description: 'A heartfelt video about bringing clean water to communities in need.',
        templateId: 'charity-spotlight',
        thumbnailUrl: '/videos/clean-water.jpg',
        status: 'published',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15'),
      },
      {
        projectId: '2',
        userId: 'user2',
        title: 'My Creator Journey',
        description: 'Sharing my story and how I got started in content creation.',
        templateId: 'creator-intro',
        thumbnailUrl: '/videos/creator-journey.jpg',
        status: 'published',
        createdAt: new Date('2024-01-14'),
        updatedAt: new Date('2024-01-14'),
      },
      {
        projectId: '3',
        userId: 'user3',
        title: 'Education for All Campaign',
        description: 'Launching a campaign to support education in underserved communities.',
        templateId: 'fundraising-campaign',
        thumbnailUrl: '/videos/education-campaign.jpg',
        status: 'published',
        createdAt: new Date('2024-01-13'),
        updatedAt: new Date('2024-01-13'),
      },
    ];
    setRecentProjects(mockProjects);
  }, []);

  return (
    <AppShell activeTab="home">
      <div className="p-6 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent p-8 text-white">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-medium opacity-90">Welcome to CreatorDAO</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Empower Creators,<br />Fund Charities
            </h1>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">
              Create impactful videos with AI assistance and support meaningful causes through transparent, on-chain donations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/create"
                className="btn-primary bg-white text-primary hover:bg-opacity-90 flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Create Your First Video</span>
              </a>
              <a
                href="/charities"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary flex items-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Explore Charities</span>
              </a>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-5 rounded-full translate-y-24 -translate-x-24" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Video className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.totalVideos.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Videos Created</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-success bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.totalDonations} ETH</div>
            <div className="text-sm text-gray-400">Total Donated</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.activeCreators.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Active Creators</div>
          </div>
          
          <div className="metric-card text-center">
            <div className="w-12 h-12 bg-warning bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-warning" />
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stats.charitiesSupported}</div>
            <div className="text-sm text-gray-400">Charities Supported</div>
          </div>
        </div>

        {/* Recent Videos */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-fg">Recent Videos</h2>
            <a
              href="/videos"
              className="flex items-center space-x-2 text-accent hover:text-opacity-80 transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <VideoCard
                key={project.projectId}
                project={project}
                onPlay={() => console.log('Play video:', project.projectId)}
                onDonate={() => console.log('Donate to project:', project.projectId)}
              />
            ))}
          </div>
        </section>

        {/* Featured Templates */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-fg">Popular Templates</h2>
            <a
              href="/create"
              className="flex items-center space-x-2 text-accent hover:text-opacity-80 transition-colors duration-200"
            >
              <span>Browse All</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEO_TEMPLATES.slice(0, 4).map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={() => console.log('Select template:', template.id)}
              />
            ))}
          </div>
        </section>

        {/* Featured Charities */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-fg">Featured Charities</h2>
            <a
              href="/charities"
              className="flex items-center space-x-2 text-accent hover:text-opacity-80 transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_CHARITIES.map((charity) => (
              <CharityCard
                key={charity.charityId}
                charity={charity}
                totalDonations="12.5"
                onDonate={() => console.log('Donate to charity:', charity.charityId)}
                onLearnMore={() => console.log('Learn more about:', charity.charityId)}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-semibold text-fg mb-4">Ready to Make an Impact?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of creators using AI-powered tools to create meaningful content and support causes they care about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/create" className="btn-primary">
              Start Creating
            </a>
            <a href="/dao" className="btn-outline">
              Join the DAO
            </a>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
