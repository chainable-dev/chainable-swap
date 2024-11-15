'use client';

import {
  RainbowKitProvider,
  DisclaimerComponent,
} from '@rainbow-me/rainbowkit';

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    This is beta. By connecting your wallet, you agree to the{' '}
    <Link href="https://www.chainable.co/terms-of-service">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{' '}
    <Link href="https://www.chainable.co/privacy-policy">Privacy Policy</Link>
  </Text>
);

export default Disclaimer;