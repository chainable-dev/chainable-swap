'use client';

import { useState } from 'react';

interface Token {
  symbol: string;
  name: string;
  logoURI?: string;
}

const ETH: Token = {
  symbol: "ETH",
  name: "Ethereum",
  logoURI: "https://assets.coingecko.com/coins/images/279/small/ethereum.png"
};

const USDC: Token = {
  symbol: "USDC",
  name: "USD Coin",
  logoURI: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png"
};

export default function Swapper() {
  const [fromToken, setFromToken] = useState<Token>(ETH);
  const [toToken, setToToken] = useState<Token>(USDC);

  return (
    <div className="w-[450px] max-w-full rounded-xl bg-[#240750] p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#57A6A1]">Swap</h2>
      </div>

      {/* From Token */}
      <div className="mb-2 rounded-lg bg-[#344C64]/20 p-4">
        <div className="mb-2 text-sm text-[#577B8D]">You pay</div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="0.0"
            className="w-full bg-transparent text-3xl text-[#57A6A1] outline-none placeholder:text-[#577B8D]/50"
          />
          <button
            className="flex items-center gap-2 rounded-lg bg-[#344C64]/20 px-3 py-2 text-[#57A6A1] hover:bg-[#344C64]/30"
          >
            {fromToken.logoURI && (
              <img
                src={fromToken.logoURI}
                alt={fromToken.symbol}
                className="h-5 w-5 rounded-full"
              />
            )}
            <span>{fromToken.symbol}</span>
            <span className="text-[#577B8D]">▼</span>
          </button>
        </div>
      </div>

      {/* Swap Direction Button */}
      <div className="relative my-2 flex justify-center">
        <button
          className="absolute -translate-y-1/2 rounded-lg bg-[#344C64]/20 p-2 text-[#57A6A1] hover:bg-[#344C64]/30"
          onClick={() => {
            const temp = fromToken;
            setFromToken(toToken);
            setToToken(temp);
          }}
        >
          ↓
        </button>
      </div>

      {/* To Token */}
      <div className="mb-6 rounded-lg bg-[#344C64]/20 p-4">
        <div className="mb-2 text-sm text-[#577B8D]">You receive</div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="0.0"
            className="w-full bg-transparent text-3xl text-[#57A6A1] outline-none placeholder:text-[#577B8D]/50"
          />
          <button
            className="flex items-center gap-2 rounded-lg bg-[#344C64]/20 px-3 py-2 text-[#57A6A1] hover:bg-[#344C64]/30"
          >
            {toToken.logoURI && (
              <img
                src={toToken.logoURI}
                alt={toToken.symbol}
                className="h-5 w-5 rounded-full"
              />
            )}
            <span>{toToken.symbol}</span>
            <span className="text-[#577B8D]">▼</span>
          </button>
        </div>
      </div>

      {/* Swap Button */}
      <button
        className="w-full rounded-lg bg-[#577B8D] py-4 text-lg font-medium text-[#240750] hover:bg-[#577B8D]/90 disabled:opacity-50"
        disabled={false}
      >
        Swap
      </button>

      {/* Help Text */}
      <div className="mt-4 text-center text-sm text-[#577B8D]">
        Complete the fields to continue
      </div>
    </div>
  );
}
