import Footer from '@/components/Footer';
import { Swapper } from '@/components/Swapper';
import { CHAINABLE_LINK } from '@/constants/links';
import LoginButton from '@/components/LoginButton';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#0D111C] overflow-x-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-[0.05] pointer-events-none overflow-hidden" />

      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div className="orb" />
        <div className="orb" />
      </div>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D111C]/80 backdrop-blur-md border-b border-[#3EB8B3]/20">
        <nav className="w-full max-w-[1600px] mx-auto flex justify-between items-center h-[64px] sm:h-[72px] px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href={CHAINABLE_LINK} className="relative group flex items-center">
              <img src="/logo-swap.svg" alt="Chainable Logo" className="h-6 sm:h-8 mr-2" />
              <span className="text-white text-lg sm:text-2xl font-semibold tracking-tight relative z-10 shine-effect hidden sm:block">
                Chainable
              </span>
            </a>
            <div className="h-6 w-[1px] bg-[#3EB8B3]/20 hidden sm:block" />
          </div>

          <LoginButton />
        </nav>
      </header>

      {/* Main Content - Adjusted for fixed header and mobile */}
      <div className="flex-1 w-full flex flex-col items-center justify-center min-h-[calc(100vh-128px)] mt-[64px] sm:min-h-[calc(100vh-144px)] sm:mt-[72px] relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[480px]">
              <div className="standard-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <Swapper />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
