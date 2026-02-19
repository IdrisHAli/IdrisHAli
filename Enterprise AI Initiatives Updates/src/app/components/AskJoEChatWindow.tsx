import { ExternalLink, Sparkles, ChevronRight, Zap } from 'lucide-react';

export function AskJoEChatWindow() {
  const sharePointUrl = 'https://eaton.sharepoint.com/:u:/r/SiteAssets/Copilots/Approved/Ask%20JOE_etnit_askJoe.agent?csf=1&web=1&e=0bZrbH';

  return (
    <div className="flex h-full flex-col rounded-lg border-2 border-blue-400 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl">
      {/* Header */}
      <div className="rounded-t-lg border-b-2 border-blue-300 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
            <Sparkles className="h-7 w-7 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-xl">Ask JoE Live Demo</h3>
            <p className="text-sm text-blue-100">Experience the Enterprise AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col justify-center p-8">
        {/* Features List */}
        <div className="mb-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">92% Accuracy Rate</p>
              <p className="text-gray-600 text-xs">Highly accurate responses across enterprise knowledge</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Agentic Capabilities</p>
              <p className="text-gray-600 text-xs">Advanced AI features with app link integration</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Enhanced UX Design</p>
              <p className="text-gray-600 text-xs">Improved interface with excellent user feedback</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border-2 border-blue-400 bg-white p-6 shadow-lg">
          <div className="mb-4 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              <h4 className="font-bold text-gray-900 text-lg">Ready to Try?</h4>
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-gray-600 text-sm">
              Launch the interactive Ask JoE demo and experience the AI assistant in action
            </p>
          </div>
          
          <a
            href={sharePointUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-bold text-lg text-white shadow-lg transition-all hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl"
          >
            <Sparkles className="h-6 w-6 animate-pulse" />
            Launch Ask JoE Demo
            <ExternalLink className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            <span className="font-semibold">Note:</span> Requires Eaton credentials to access SharePoint
          </p>
        </div>
      </div>
    </div>
  );
}