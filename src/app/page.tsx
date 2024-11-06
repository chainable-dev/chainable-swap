'use client';
import Footer from 'src/components/Footer';
import Swapper from 'src/components/Swapper';
import { CHAINABLE_LINK } from 'src/constants/links';
import LoginButton from '../components/LoginButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--background)]">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-[var(--border-color)]">
        <a 
          href={CHAINABLE_LINK} 
          className="relative group"
        >
          <span className="text-white text-2xl font-semibold tracking-tight relative z-10">
            Chainable
          </span>
          <div className="absolute inset-0 blur-[8px] bg-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <LoginButton />
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="container max-w-[480px] mx-auto">
          <Swapper />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
