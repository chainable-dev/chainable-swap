'use client';

import { CHAINABLE_LINK } from 'src/constants/links';

export default function Footer() {
  return (
    <section className="mt-auto mb-2 flex w-full flex-col justify-between gap-2 md:mt-8 md:mb-6">
      <aside className="flex items-center pt-2 md:pt-0">
        <h3 className="mr-2 mb-2 text-m md:mb-0">
          Built by{' '}
          <a
            href={CHAINABLE_LINK}
            target="_blank"
            rel="noreferrer"
            title="Chainable"
            className="font-semibold hover:text-indigo-600"
          >
            Chainable
          </a>
        </h3>
      </aside>
    </section>
  );
}
