'use client';

import { DisclaimerComponent } from '@rainbow-me/rainbowkit';

export const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  //@ts-ignore
  <Text>
    By connecting your wallet, you acknowledge that you have read and understood the{' '}
    {/* @ts-ignore */}
    <Link href="https://www.chainable.co/terms-of-service">Terms of Service</Link> and 
    agree to the{' '}
    {/* @ts-ignore */}
    <Link href="https://www.chainable.co/privacy-policy">Privacy Policy</Link>. This is in beta.
  </Text>
);
