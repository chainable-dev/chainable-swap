'use client';
import WalletWrapper from './WalletWrapper';
export default function LoginButton() {
  return (
    <WalletWrapper 
    //@ts-ignore
      text="Sign In"
      className="px-6 py-2.5 bg-[#4A9D9C] text-white font-medium rounded-lg 
        hover:bg-[#3D8382] transition-all duration-200 shadow-md 
        hover:shadow-[#4A9D9C]/20"
    />
  );
}
