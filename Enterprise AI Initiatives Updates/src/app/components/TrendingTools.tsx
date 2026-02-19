import { Sparkles, Flame, ArrowUp, Zap, Trophy, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface TrendingTool {
  name: string;
  category: string;
  subCategory: string;
  trendScore: number; // 0-100
  reason: string;
  usageGrowth: string;
  activeUsers: number;
  icon: string;
}

const trendingToolsData: TrendingTool[] = [
  // Design & Prototyping - AI-Powered Design
  {
    name: 'Figma Make',
    category: 'Design & Prototyping',
    subCategory: 'AI-Powered Design',
    trendScore: 95,
    reason: 'Explosive 340% user growth. AI design features cut prototype time by 60%.',
    usageGrowth: '+340%',
    activeUsers: 1247,
    icon: '🎨',
  },
  {
    name: 'Adobe Firefly',
    category: 'Design & Prototyping',
    subCategory: 'AI-Powered Design',
    trendScore: 85,
    reason: '185% growth in creative teams. Generative AI reduces design iteration cycles.',
    usageGrowth: '+185%',
    activeUsers: 892,
    icon: '✨',
  },
  {
    name: 'Canva AI',
    category: 'Design & Prototyping',
    subCategory: 'AI-Powered Design',
    trendScore: 78,
    reason: '220% growth. Magic Design tool enables non-designers to create professional content.',
    usageGrowth: '+220%',
    activeUsers: 2156,
    icon: '🖼️',
  },
  {
    name: 'Midjourney',
    category: 'Design & Prototyping',
    subCategory: 'AI-Powered Design',
    trendScore: 82,
    reason: '195% adoption for concept art. High-quality image generation for mockups.',
    usageGrowth: '+195%',
    activeUsers: 734,
    icon: '🌌',
  },
  {
    name: 'DALL-E',
    category: 'Design & Prototyping',
    subCategory: 'AI-Powered Design',
    trendScore: 74,
    reason: '165% growth. Quick visual ideation and asset creation for presentations.',
    usageGrowth: '+165%',
    activeUsers: 623,
    icon: '🎭',
  },
  
  // Design & Prototyping - UI/UX Automation
  {
    name: 'Uizard',
    category: 'Design & Prototyping',
    subCategory: 'UI/UX Automation',
    trendScore: 88,
    reason: '255% surge. Sketch-to-UI conversion accelerates wireframing by 70%.',
    usageGrowth: '+255%',
    activeUsers: 567,
    icon: '📱',
  },
  {
    name: 'Galileo AI',
    category: 'Design & Prototyping',
    subCategory: 'UI/UX Automation',
    trendScore: 81,
    reason: '210% growth. Text-to-UI generates editable designs in seconds.',
    usageGrowth: '+210%',
    activeUsers: 445,
    icon: '🚀',
  },
  {
    name: 'Framer AI',
    category: 'Design & Prototyping',
    subCategory: 'UI/UX Automation',
    trendScore: 76,
    reason: '180% adoption. AI-powered web design with instant prototyping.',
    usageGrowth: '+180%',
    activeUsers: 823,
    icon: '⚡',
  },
  {
    name: 'Visily',
    category: 'Design & Prototyping',
    subCategory: 'UI/UX Automation',
    trendScore: 72,
    reason: '155% growth. Screenshot-to-design conversion for rapid iteration.',
    usageGrowth: '+155%',
    activeUsers: 412,
    icon: '👁️',
  },
  {
    name: 'Attention Insight',
    category: 'Design & Prototyping',
    subCategory: 'UI/UX Automation',
    trendScore: 69,
    reason: '142% increase. AI heatmaps predict user attention for UX optimization.',
    usageGrowth: '+142%',
    activeUsers: 298,
    icon: '🎯',
  },

  // Development Tools - AI Code Assistants
  {
    name: 'Cursor',
    category: 'Development Tools',
    subCategory: 'AI Code Assistants',
    trendScore: 92,
    reason: '280% growth post-MSA. 45% faster coding, 30% less debugging time.',
    usageGrowth: '+280%',
    activeUsers: 2156,
    icon: '💻',
  },
  {
    name: 'GitHub Copilot',
    category: 'Development Tools',
    subCategory: 'AI Code Assistants',
    trendScore: 88,
    reason: '210% growth. 40% productivity boost across all engineering teams.',
    usageGrowth: '+210%',
    activeUsers: 3421,
    icon: '🤖',
  },
  {
    name: 'Tabnine',
    category: 'Development Tools',
    subCategory: 'AI Code Assistants',
    trendScore: 79,
    reason: '175% adoption. Privacy-first AI coding with on-premise deployment.',
    usageGrowth: '+175%',
    activeUsers: 1834,
    icon: '🔧',
  },
  {
    name: 'Amazon Q',
    category: 'Development Tools',
    subCategory: 'AI Code Assistants',
    trendScore: 84,
    reason: '230% growth. AWS-native assistant accelerates cloud development.',
    usageGrowth: '+230%',
    activeUsers: 1245,
    icon: '☁️',
  },
  {
    name: 'Codeium',
    category: 'Development Tools',
    subCategory: 'AI Code Assistants',
    trendScore: 75,
    reason: '158% increase. Free tier drives rapid adoption in startups.',
    usageGrowth: '+158%',
    activeUsers: 1567,
    icon: '⚙️',
  },

  // Development Tools - Code Review & Testing
  {
    name: 'Snyk AI',
    category: 'Development Tools',
    subCategory: 'Code Review & Testing',
    trendScore: 86,
    reason: '240% growth. AI-powered security scanning prevents vulnerabilities.',
    usageGrowth: '+240%',
    activeUsers: 1123,
    icon: '🛡️',
  },
  {
    name: 'DeepCode',
    category: 'Development Tools',
    subCategory: 'Code Review & Testing',
    trendScore: 80,
    reason: '195% adoption. ML-based bug detection catches issues pre-deployment.',
    usageGrowth: '+195%',
    activeUsers: 876,
    icon: '🔍',
  },
  {
    name: 'Codacy',
    category: 'Development Tools',
    subCategory: 'Code Review & Testing',
    trendScore: 73,
    reason: '162% growth. Automated code quality analysis in CI/CD pipelines.',
    usageGrowth: '+162%',
    activeUsers: 734,
    icon: '✅',
  },
  {
    name: 'Testim',
    category: 'Development Tools',
    subCategory: 'Code Review & Testing',
    trendScore: 77,
    reason: '178% increase. AI-powered test automation reduces QA time by 50%.',
    usageGrowth: '+178%',
    activeUsers: 623,
    icon: '🧪',
  },
  {
    name: 'Mabl',
    category: 'Development Tools',
    subCategory: 'Code Review & Testing',
    trendScore: 71,
    reason: '148% growth. Self-healing tests adapt to UI changes automatically.',
    usageGrowth: '+148%',
    activeUsers: 512,
    icon: '🔬',
  },

  // Collaboration & Communication - Meeting Intelligence
  {
    name: 'Microsoft Copilot',
    category: 'Collaboration & Communication',
    subCategory: 'Meeting Intelligence',
    trendScore: 85,
    reason: '245% growth. Meeting summaries save 5 hours/week per team.',
    usageGrowth: '+245%',
    activeUsers: 5890,
    icon: '📊',
  },
  {
    name: 'Otter.ai',
    category: 'Collaboration & Communication',
    subCategory: 'Meeting Intelligence',
    trendScore: 82,
    reason: '215% adoption. Real-time transcription with action item extraction.',
    usageGrowth: '+215%',
    activeUsers: 2345,
    icon: '🦦',
  },
  {
    name: 'Fireflies.ai',
    category: 'Collaboration & Communication',
    subCategory: 'Meeting Intelligence',
    trendScore: 78,
    reason: '188% growth. Integrates with all major video platforms seamlessly.',
    usageGrowth: '+188%',
    activeUsers: 1876,
    icon: '🔥',
  },
  {
    name: 'Fathom',
    category: 'Collaboration & Communication',
    subCategory: 'Meeting Intelligence',
    trendScore: 74,
    reason: '165% increase. Free tier drives adoption for sales and customer success.',
    usageGrowth: '+165%',
    activeUsers: 1234,
    icon: '📹',
  },
  {
    name: 'Grain',
    category: 'Collaboration & Communication',
    subCategory: 'Meeting Intelligence',
    trendScore: 70,
    reason: '142% growth. Meeting highlights and clip sharing for async teams.',
    usageGrowth: '+142%',
    activeUsers: 923,
    icon: '🎬',
  },

  // Collaboration & Communication - Document Intelligence
  {
    name: 'Notion AI',
    category: 'Collaboration & Communication',
    subCategory: 'Document Intelligence',
    trendScore: 80,
    reason: '165% growth. AI-powered docs accelerate project planning by 40%.',
    usageGrowth: '+165%',
    activeUsers: 1534,
    icon: '📝',
  },
  {
    name: 'ChatGPT',
    category: 'Collaboration & Communication',
    subCategory: 'Document Intelligence',
    trendScore: 91,
    reason: '310% surge. Content creation and research across all departments.',
    usageGrowth: '+310%',
    activeUsers: 6234,
    icon: '💬',
  },
  {
    name: 'Claude',
    category: 'Collaboration & Communication',
    subCategory: 'Document Intelligence',
    trendScore: 87,
    reason: '265% growth. Long-context analysis for complex document processing.',
    usageGrowth: '+265%',
    activeUsers: 3456,
    icon: '🧠',
  },
  {
    name: 'Jasper',
    category: 'Collaboration & Communication',
    subCategory: 'Document Intelligence',
    trendScore: 76,
    reason: '172% adoption. Marketing content generation at enterprise scale.',
    usageGrowth: '+172%',
    activeUsers: 1678,
    icon: '✍️',
  },
  {
    name: 'Grammarly',
    category: 'Collaboration & Communication',
    subCategory: 'Document Intelligence',
    trendScore: 72,
    reason: '155% growth. AI writing assistance improves communication quality.',
    usageGrowth: '+155%',
    activeUsers: 4123,
    icon: '📖',
  },

  // Data & Analytics - Predictive Analytics
  {
    name: 'Tableau AI',
    category: 'Data & Analytics',
    subCategory: 'Predictive Analytics',
    trendScore: 83,
    reason: '195% growth. Natural language queries democratize data analysis.',
    usageGrowth: '+195%',
    activeUsers: 743,
    icon: '📈',
  },
  {
    name: 'Power BI Copilot',
    category: 'Data & Analytics',
    subCategory: 'Predictive Analytics',
    trendScore: 81,
    reason: '178% growth. AI-generated insights accelerate decision-making.',
    usageGrowth: '+178%',
    activeUsers: 1289,
    icon: '📉',
  },
  {
    name: 'ThoughtSpot',
    category: 'Data & Analytics',
    subCategory: 'Predictive Analytics',
    trendScore: 77,
    reason: '168% adoption. Search-driven analytics for business users.',
    usageGrowth: '+168%',
    activeUsers: 612,
    icon: '🔮',
  },
  {
    name: 'Qlik Sense AI',
    category: 'Data & Analytics',
    subCategory: 'Predictive Analytics',
    trendScore: 73,
    reason: '152% increase. Associative AI uncovers hidden data relationships.',
    usageGrowth: '+152%',
    activeUsers: 534,
    icon: '🎲',
  },
  {
    name: 'Sisense AI',
    category: 'Data & Analytics',
    subCategory: 'Predictive Analytics',
    trendScore: 69,
    reason: '138% growth. Embedded analytics with ML-powered forecasting.',
    usageGrowth: '+138%',
    activeUsers: 423,
    icon: '📊',
  },

  // Data & Analytics - Business Intelligence
  {
    name: 'Looker AI',
    category: 'Data & Analytics',
    subCategory: 'Business Intelligence',
    trendScore: 79,
    reason: '182% growth. Semantic modeling with AI-assisted insights.',
    usageGrowth: '+182%',
    activeUsers: 876,
    icon: '🔎',
  },
  {
    name: 'Domo AI',
    category: 'Data & Analytics',
    subCategory: 'Business Intelligence',
    trendScore: 75,
    reason: '165% adoption. Real-time dashboards with predictive alerts.',
    usageGrowth: '+165%',
    activeUsers: 623,
    icon: '💡',
  },
  {
    name: 'SAP Analytics',
    category: 'Data & Analytics',
    subCategory: 'Business Intelligence',
    trendScore: 71,
    reason: '145% growth. Enterprise-grade BI with augmented analytics.',
    usageGrowth: '+145%',
    activeUsers: 734,
    icon: '🏢',
  },
  {
    name: 'IBM Watson',
    category: 'Data & Analytics',
    subCategory: 'Business Intelligence',
    trendScore: 74,
    reason: '158% increase. AI-powered data preparation and visualization.',
    usageGrowth: '+158%',
    activeUsers: 567,
    icon: '🔵',
  },
  {
    name: 'Oracle Analytics',
    category: 'Data & Analytics',
    subCategory: 'Business Intelligence',
    trendScore: 68,
    reason: '132% growth. Autonomous database analytics with ML models.',
    usageGrowth: '+132%',
    activeUsers: 445,
    icon: '🗄️',
  },
];

// Arc layer colors (neutral/white design)
const arcLayers = [
  {
    category: 'Design & Prototyping',
    icon: '🎨',
  },
  {
    category: 'Development Tools',
    icon: '💻',
  },
  {
    category: 'Collaboration & Communication',
    icon: '🤝',
  },
  {
    category: 'Data & Analytics',
    icon: '📊',
  },
];

// Get heat badge color
const getHeatBadgeColor = (score: number) => {
  if (score >= 90) return 'bg-red-600 text-white';
  if (score >= 80) return 'bg-orange-600 text-white';
  if (score >= 70) return 'bg-amber-600 text-white';
  return 'bg-green-600 text-white';
};

// Get rank badge
const getRankBadge = (rank: number) => {
  if (rank === 1) return { icon: '🥇', color: 'bg-yellow-400 text-yellow-900' };
  if (rank === 2) return { icon: '🥈', color: 'bg-gray-300 text-gray-800' };
  if (rank === 3) return { icon: '🥉', color: 'bg-orange-400 text-orange-900' };
  return { icon: `#${rank}`, color: 'bg-blue-500 text-white' };
};

export function TrendingTools() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  
  // Get top 5 tools by trend score
  const top5Tools = [...trendingToolsData].sort((a, b) => b.trendScore - a.trendScore).slice(0, 5);
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-xl tracking-tight">
              Trending AI Tools
            </h3>
            <p className="text-gray-600 text-sm">
              50 tools across 4 major categories
            </p>
          </div>
        </div>
      </div>

      {/* Top 5 Tools - Advanced Table */}
      <div className="rounded-xl border-2 border-gray-300 bg-white shadow-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 flex items-center gap-3">
          <Trophy className="h-6 w-6 text-yellow-300" />
          <h4 className="font-bold text-white text-lg">Top 5 Trending AI Tools</h4>
          <div className="ml-auto flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
            <Flame className="h-4 w-4 text-orange-300" />
            <span className="font-semibold text-white text-sm">Hottest Right Now</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left font-bold text-gray-700 text-xs uppercase tracking-wide">Rank</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 text-xs uppercase tracking-wide">Tool</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 text-xs uppercase tracking-wide">Category</th>
                <th className="px-6 py-3 text-center font-bold text-gray-700 text-xs uppercase tracking-wide">Heat Score</th>
                <th className="px-6 py-3 text-center font-bold text-gray-700 text-xs uppercase tracking-wide">Growth</th>
                <th className="px-6 py-3 text-center font-bold text-gray-700 text-xs uppercase tracking-wide">Active Users</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 text-xs uppercase tracking-wide">Why Trending</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {top5Tools.map((tool, index) => {
                const rank = index + 1;
                const rankBadge = getRankBadge(rank);
                const heatColor = getHeatBadgeColor(tool.trendScore);
                
                return (
                  <tr 
                    key={tool.name}
                    className="transition-all hover:bg-blue-50/50"
                  >
                    {/* Rank */}
                    <td className="px-6 py-4">
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${rankBadge.color} font-bold text-sm shadow-md`}>
                        {rankBadge.icon}
                      </div>
                    </td>

                    {/* Tool */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{tool.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 text-base">{tool.name}</span>
                            {tool.trendScore >= 90 && (
                              <span className="animate-pulse text-red-500">🔥</span>
                            )}
                          </div>
                          <span className="text-gray-600 text-xs">{tool.subCategory}</span>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="inline-block rounded-lg bg-gray-100 px-3 py-1.5 font-medium text-gray-700 text-xs">
                        {tool.category}
                      </span>
                    </td>

                    {/* Heat Score */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-bold text-sm shadow-md ${heatColor}`}>
                          <Flame className="h-4 w-4" />
                          {tool.trendScore}
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 w-4 rounded-full ${
                                i < Math.floor(tool.trendScore / 20)
                                  ? tool.trendScore >= 90
                                    ? 'bg-red-600'
                                    : tool.trendScore >= 80
                                    ? 'bg-orange-600'
                                    : tool.trendScore >= 70
                                    ? 'bg-amber-600'
                                    : 'bg-green-600'
                                  : 'bg-gray-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* Growth */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1 font-bold text-green-600 text-lg">
                          <TrendingUp className="h-5 w-5" />
                          {tool.usageGrowth}
                        </div>
                        <span className="text-gray-500 text-xs">usage growth</span>
                      </div>
                    </td>

                    {/* Active Users */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-blue-600 text-lg">
                          {(tool.activeUsers / 1000).toFixed(1)}K
                        </span>
                        <span className="text-gray-500 text-xs">active users</span>
                      </div>
                    </td>

                    {/* Why Trending */}
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2 max-w-xs">
                        <Sparkles className="h-4 w-4 flex-shrink-0 text-yellow-500 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{tool.reason}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="border-t-2 border-gray-200 bg-gray-50 px-6 py-3">
          <p className="text-center text-gray-600 text-xs">
            Updated in real-time • Data reflects enterprise adoption trends
          </p>
        </div>
      </div>

      {/* Arc Visualization - Clean White Design */}
      <div className="rounded-2xl border-2 border-gray-300 bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h4 className="font-bold text-gray-900 text-lg">All AI Tools by Category</h4>
          <p className="text-gray-600 text-sm">Organized into 4 major categories and sub-categories</p>
        </div>

        {/* Concentric Arcs - Clean Design */}
        <div className="relative flex flex-col items-center gap-0">
          {arcLayers.map((layer, layerIndex) => {
            const categoryTools = trendingToolsData.filter(t => t.category === layer.category);
            const subCategories = Array.from(new Set(categoryTools.map(t => t.subCategory)));
            
            // Calculate arc dimensions
            const baseHeight = 100;
            const height = baseHeight + (layerIndex * 20);
            const width = 100;
            
            return (
              <div 
                key={layer.category}
                className="relative w-full"
                style={{
                  marginTop: layerIndex === 0 ? '0' : '-40px',
                  zIndex: arcLayers.length - layerIndex,
                }}
              >
                {/* Arc Band - White with subtle border */}
                <div 
                  className="relative mx-auto border-2 border-gray-300 bg-white shadow-md hover:shadow-lg transition-shadow"
                  style={{
                    width: `${width - (layerIndex * 8)}%`,
                    height: `${height}px`,
                    borderBottomLeftRadius: '0',
                    borderBottomRightRadius: '0',
                    borderTopLeftRadius: '9999px',
                    borderTopRightRadius: '9999px',
                  }}
                >
                  {/* Category Label */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1.5 rounded-full border-2 border-gray-300 bg-white px-4 py-1.5 font-bold text-gray-800 text-sm shadow-md whitespace-nowrap">
                      <span className="text-base">{layer.icon}</span>
                      {layer.category}
                    </div>
                  </div>

                  {/* Sub-category Sections */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-8 px-8 pb-3">
                    {subCategories.map((subCategory) => {
                      const subCategoryTools = categoryTools.filter(t => t.subCategory === subCategory);
                      
                      return (
                        <div key={subCategory} className="flex flex-col items-center gap-2">
                          {/* Sub-category Label */}
                          <div className="text-center rounded-md border border-gray-300 bg-gray-50 px-2 py-0.5 shadow-sm">
                            <span className="font-semibold text-gray-700 text-xs whitespace-nowrap">
                              {subCategory}
                            </span>
                          </div>

                          {/* Tools in this sub-category */}
                          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-sm">
                            {subCategoryTools
                              .sort((a, b) => b.trendScore - a.trendScore)
                              .map((tool) => {
                                const heatColor = getHeatBadgeColor(tool.trendScore);
                                const isHovered = hoveredTool === tool.name;
                                
                                return (
                                  <div
                                    key={tool.name}
                                    className="relative"
                                    onMouseEnter={() => setHoveredTool(tool.name)}
                                    onMouseLeave={() => setHoveredTool(null)}
                                  >
                                    {/* Tool Badge */}
                                    <div
                                      className={`flex items-center gap-1 rounded-full border-2 border-gray-300 bg-white px-2 py-1 shadow-sm cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-md hover:border-gray-500 ${
                                        isHovered ? 'scale-110 shadow-md border-gray-500 z-[100]' : ''
                                      }`}
                                      style={{
                                        animation: tool.trendScore >= 90 ? 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
                                      }}
                                    >
                                      {/* Icon */}
                                      <span className="text-sm leading-none">{tool.icon}</span>
                                      
                                      {/* Tool Name */}
                                      <span className="font-semibold text-gray-800 text-xs whitespace-nowrap">
                                        {tool.name}
                                      </span>
                                      
                                      {/* Trending Arrow for hot tools */}
                                      {tool.trendScore >= 85 && (
                                        <ArrowUp className="h-3 w-3 text-red-600 animate-bounce" strokeWidth={3} />
                                      )}
                                    </div>

                                    {/* Hover Tooltip */}
                                    {isHovered && (
                                      <div 
                                        className="fixed z-[9999] w-72 rounded-xl border-3 border-blue-400 bg-gradient-to-br from-blue-600 to-indigo-700 p-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
                                        style={{
                                          left: '50%',
                                          top: '50%',
                                          transform: 'translate(-50%, -50%)',
                                          pointerEvents: 'none',
                                        }}
                                      >
                                        <div className="relative">
                                          {/* Header */}
                                          <div className="mb-3 flex items-center gap-2 border-b border-blue-400/30 pb-2">
                                            <span className="text-2xl">{tool.icon}</span>
                                            <div className="flex-1 min-w-0">
                                              <h6 className="font-bold text-white text-base leading-tight">{tool.name}</h6>
                                              <p className="text-blue-200 text-xs">{tool.subCategory}</p>
                                            </div>
                                            <div className={`flex items-center gap-1 flex-shrink-0 rounded-full px-2.5 py-1 font-bold text-sm ${heatColor}`}>
                                              <Flame className="h-3.5 w-3.5" />
                                              {tool.trendScore}
                                            </div>
                                          </div>

                                          {/* Why Trending */}
                                          <div className="mb-3">
                                            <div className="mb-1.5 flex items-center gap-1.5">
                                              <Sparkles className="h-4 w-4 text-yellow-300" />
                                              <span className="font-semibold text-blue-100 text-sm">Why Trending?</span>
                                            </div>
                                            <p className="text-blue-50 text-sm leading-relaxed">
                                              {tool.reason}
                                            </p>
                                          </div>

                                          {/* Stats Grid */}
                                          <div className="grid grid-cols-3 gap-2 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                                            <div className="text-center">
                                              <div className="font-bold text-green-300 text-base leading-tight">{tool.usageGrowth}</div>
                                              <div className="text-blue-200 text-xs">Growth</div>
                                            </div>
                                            <div className="text-center">
                                              <div className="font-bold text-white text-base leading-tight">{(tool.activeUsers / 1000).toFixed(1)}K</div>
                                              <div className="text-blue-200 text-xs">Users</div>
                                            </div>
                                            <div className="text-center">
                                              <div className={`inline-block rounded-full px-2 py-1 font-bold text-xs ${heatColor}`}>
                                                {tool.trendScore >= 90 ? '🔥 Blazing' : tool.trendScore >= 80 ? '🌶️ Hot' : tool.trendScore >= 70 ? '☀️ Warm' : '🌱 Cool'}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
