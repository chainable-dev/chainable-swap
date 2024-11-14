'use client';
import WalletWrapper from './WalletWrapper';

export default function LoginButton() {
  return (
    <WalletWrapper 
    //@ts-ignore
      text="Sign In"
      className="px-6 py-2.5 bg-[#2C3E50] text-white font-medium rounded-lg 
        hover:bg-[#1A242F] transition-all duration-200 shadow-md 
        hover:shadow-[#2C3E50]/20"
    />
  );
}
