'use client';

import { useTheme } from '../components/ThemeProvider';
import { AppShell } from '../components/AppShell';
import { VideoCard } from '../components/VideoCard';
import { CharityCard } from '../components/CharityCard';
import { Palette, Check } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Warm Social', description: 'Dark teal with coral accents' },
  { id: 'celo', name: 'Celo', description: 'Black with yellow accents' },
  { id: 'solana', name: 'Solana', description: 'Dark purple with magenta accents' },
  { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
  { id: 'coinbase', name: 'Coinbase', description: 'Dark navy with Coinbase blue accents' },
];

export default function ThemePreviewPage() {
  const { theme, setTheme } = useTheme();

  const mockProject = {
    projectId: '1',
    userId: 'user1',
    title: 'Supporting Clean Water Initiative',
    description: 'A heartfelt video about bringing clean water to communities in need.',
    status: 'published' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockCharity = {
    charityId: 'unicef',
    name: 'UNICEF',
    description: 'Working for every child, everywhere',
    logoUrl: '',
    walletAddress: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b9',
    daoApproved: true,
    createdAt: new Date(),
  };

  return (
    <AppShell activeTab="settings">
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Palette className="w-6 h-6 text-accent" />
            <span className="text-sm font-medium text-accent">Customization</span>
          </div>
          <h1 className="text-4xl font-bold text-fg mb-4">Theme Preview</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose your preferred theme to customize the look and feel of CreatorDAO Videos.
          </p>
        </div>

        {/* Theme Selector */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-fg mb-4">Available Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id as any)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  theme === themeOption.id
                    ? 'border-accent bg-accent bg-opacity-10'
                    : 'border-border hover:border-accent hover:border-opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-fg">{themeOption.name}</h3>
                  {theme === themeOption.id && (
                    <Check className="w-5 h-5 text-accent" />
                  )}
                </div>
                <p className="text-sm text-gray-400">{themeOption.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Components */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-fg">Component Preview</h2>
          
          {/* Buttons */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-outline">Outline Button</button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-fg">Cards</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <VideoCard
                project={mockProject}
                onPlay={() => {}}
                onDonate={() => {}}
              />
              
              <CharityCard
                charity={mockCharity}
                totalDonations="12.5"
                onDonate={() => {}}
                onLearnMore={() => {}}
              />
            </div>
          </div>

          {/* Form Elements */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Form Elements</h3>
            <div className="space-y-4 max-w-md">
              <input
                type="text"
                placeholder="Text input"
                className="input-field"
              />
              <textarea
                placeholder="Textarea"
                className="input-field h-24 resize-none"
              />
              <select className="input-field">
                <option>Select option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>

          {/* Color Palette */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-bg rounded-lg mx-auto mb-2 border border-border"></div>
                <span className="text-sm text-gray-400">Background</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-surface rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-gray-400">Surface</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-gray-400">Accent</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-gray-400">Primary</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
