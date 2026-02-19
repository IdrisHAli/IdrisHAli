import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Sidebar } from '@/app/components/Sidebar';
import { InitiativeView } from '@/app/components/InitiativeView';
import { Home } from '@/app/components/Home';
import { initiativesData } from '@/app/data/initiatives';

export default function App() {
  const [activeView, setActiveView] = useState('home');

  const currentInitiative = initiativesData[activeView];

  return (
    <div className="flex h-screen w-full flex-col bg-gray-50">
      {/* Header - Full Width */}
      <Header />
      
      {/* Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeView={activeView} onNavigate={setActiveView} />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {activeView === 'home' ? (
            <Home onSelectInitiative={setActiveView} />
          ) : currentInitiative ? (
            <InitiativeView initiative={currentInitiative} />
          ) : null}
        </main>
      </div>
    </div>
  );
}