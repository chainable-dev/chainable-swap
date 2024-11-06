'use client';
import Footer from 'src/components/Footer';
import Swapper from 'src/components/Swapper';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { CHAINABLE_LINK } from 'src/constants/links';

export default function Page() {
  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <a
            href={CHAINABLE_LINK}
            title="Chainable"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-primary-accent">Chainable</span>
          </a>
          <div className="flex items-center gap-3">
            <SignupButton />
            <LoginButton />
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
        <Swapper />
      </section>
      <Footer />
    </div>
  );
}
