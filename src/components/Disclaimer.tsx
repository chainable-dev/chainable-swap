import { DisclaimerComponent } from '@rainbow-me/rainbowkit';

export const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
    //@ts-ignore
    <Text>
      By connecting your wallet, you agree to the{' '}
      {/* @ts-ignore */}
      <Link href="https://www.chainable.co/terms-of-service" style={{color: '#0066CC', textDecoration: 'underline'}}>
        Terms of Service
      </Link> and
      acknowledge you have read and understand that Chainable is in beta. Please review our{' '}
      {/* @ts-ignore */}
      <Link href="https://www.chainable.co/privacy-policy" style={{color: '#0066CC', textDecoration: 'underline'}}>
        Privacy Policy
      </Link>
    </Text>
  );        