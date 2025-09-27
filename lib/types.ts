export interface User {
  userId: string;
  walletAddress: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  projectId: string;
  userId: string;
  title: string;
  description: string;
  templateId?: string;
  aiPrompt?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  status: 'draft' | 'processing' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface Charity {
  charityId: string;
  name: string;
  description: string;
  logoUrl: string;
  walletAddress: string;
  daoApproved: boolean;
  createdAt: Date;
}

export interface Donation {
  donationId: string;
  projectId: string;
  userId: string;
  charityId: string;
  amount: string;
  transactionHash: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
}

export interface DAOProposal {
  proposalId: string;
  proposerUserId: string;
  proposalType: 'add_charity' | 'fund_allocation' | 'governance';
  details: string;
  voteThreshold: number;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'active' | 'passed' | 'failed';
}

export interface DAOVote {
  voteId: string;
  proposalId: string;
  voterUserId: string;
  vote: 'yes' | 'no';
  timestamp: Date;
}

export interface VideoTemplate {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  duration: number;
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  thumbnailUrl?: string;
  title: string;
  tags: string[];
}
