export const VIDEO_TEMPLATES = [
  {
    id: 'charity-spotlight',
    name: 'Charity Spotlight',
    description: 'Highlight a charity and their mission',
    thumbnailUrl: '/templates/charity-spotlight.jpg',
    category: 'Charity',
    duration: 30,
  },
  {
    id: 'creator-intro',
    name: 'Creator Introduction',
    description: 'Introduce yourself to your audience',
    thumbnailUrl: '/templates/creator-intro.jpg',
    category: 'Personal',
    duration: 15,
  },
  {
    id: 'fundraising-campaign',
    name: 'Fundraising Campaign',
    description: 'Launch a fundraising campaign for a cause',
    thumbnailUrl: '/templates/fundraising.jpg',
    category: 'Charity',
    duration: 45,
  },
  {
    id: 'impact-story',
    name: 'Impact Story',
    description: 'Share the impact of donations and support',
    thumbnailUrl: '/templates/impact-story.jpg',
    category: 'Impact',
    duration: 60,
  },
];

export const FEATURED_CHARITIES = [
  {
    charityId: 'unicef',
    name: 'UNICEF',
    description: 'Working for every child, everywhere',
    logoUrl: '/charities/unicef.png',
    walletAddress: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b9',
    daoApproved: true,
    createdAt: new Date('2024-01-01'),
  },
  {
    charityId: 'red-cross',
    name: 'Red Cross',
    description: 'Preventing and alleviating human suffering',
    logoUrl: '/charities/red-cross.png',
    walletAddress: '0x8ba1f109551bD432803012645Hac136c5C8b4d8b9',
    daoApproved: true,
    createdAt: new Date('2024-01-01'),
  },
  {
    charityId: 'doctors-without-borders',
    name: 'Doctors Without Borders',
    description: 'Medical humanitarian aid where it is needed most',
    logoUrl: '/charities/doctors-without-borders.png',
    walletAddress: '0x9cb2f209551bD432803012645Hac136c5C8b4d8b9',
    daoApproved: true,
    createdAt: new Date('2024-01-01'),
  },
];

export const DONATION_AMOUNTS = [
  { value: '0.001', label: '$5', usd: 5 },
  { value: '0.002', label: '$10', usd: 10 },
  { value: '0.005', label: '$25', usd: 25 },
  { value: '0.01', label: '$50', usd: 50 },
  { value: '0.02', label: '$100', usd: 100 },
];
