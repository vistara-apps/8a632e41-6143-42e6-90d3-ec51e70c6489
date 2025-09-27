'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { TemplateCard } from '../components/TemplateCard';
import { 
  Wand2, 
  Upload, 
  Search, 
  Filter,
  Sparkles,
  ArrowRight,
  Play
} from 'lucide-react';
import { VIDEO_TEMPLATES } from '@/lib/constants';
import { VideoTemplate } from '@/lib/types';

export default function CreatePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<VideoTemplate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const categories = ['All', 'Charity', 'Personal', 'Impact', 'Educational'];

  const filteredTemplates = VIDEO_TEMPLATES.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleGenerateVideo = async () => {
    if (!selectedTemplate || !aiPrompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate video generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Video generated successfully! (This is a demo)');
    }, 3000);
  };

  return (
    <AppShell activeTab="create">
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-sm font-medium text-accent">AI-Powered Creation</span>
          </div>
          <h1 className="text-4xl font-bold text-fg mb-4">Create Your Video</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose a template, add your creative touch with AI assistance, and create impactful content that supports meaningful causes.
          </p>
        </div>

        {/* Creation Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1: Template Selection */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-fg">Choose a Template</h2>
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field pl-10 w-64"
                  />
                </div>
                
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field w-32"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`relative ${selectedTemplate?.id === template.id ? 'ring-2 ring-accent' : ''}`}
                >
                  <TemplateCard
                    template={template}
                    onSelect={() => setSelectedTemplate(template)}
                  />
                  {selectedTemplate?.id === template.id && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-fg mb-2">No templates found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

          {/* Step 2: AI Customization */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Wand2 className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-fg">AI Assistant</h3>
              </div>

              {selectedTemplate ? (
                <div className="space-y-4">
                  <div className="p-4 bg-surface rounded-lg">
                    <h4 className="font-medium text-fg mb-2">{selectedTemplate.name}</h4>
                    <p className="text-sm text-gray-400">{selectedTemplate.description}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-fg mb-2">
                      Describe your vision
                    </label>
                    <textarea
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="Tell the AI what you want to create. For example: 'Create a heartwarming video about clean water access in rural communities, focusing on hope and community impact...'"
                      className="input-field h-32 resize-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleGenerateVideo}
                      disabled={!aiPrompt.trim() || isGenerating}
                      className="btn-primary w-full flex items-center justify-center space-x-2"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Generate Video</span>
                        </>
                      )}
                    </button>

                    <button className="btn-outline w-full flex items-center justify-center space-x-2">
                      <Upload className="w-4 h-4" />
                      <span>Upload Media</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-180" />
                  </div>
                  <p className="text-gray-400">Select a template to get started with AI assistance</p>
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-fg mb-4">💡 Pro Tips</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Be specific about your message and target audience</li>
                <li>• Mention the charity or cause you want to support</li>
                <li>• Include emotional elements that resonate with viewers</li>
                <li>• Keep your description clear and concise</li>
              </ul>
            </div>

            {/* Pricing Info */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-fg mb-4">💰 Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Video Generation</span>
                  <span className="text-sm font-medium text-fg">0.001 ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Charity Allocation</span>
                  <span className="text-sm font-medium text-success">10%</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-fg">Total Cost</span>
                    <span className="text-sm font-bold text-accent">0.001 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
