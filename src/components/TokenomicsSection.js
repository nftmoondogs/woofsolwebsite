// components/TokenomicsSection.js
import React from 'react';

const TokenomicsSection = () => {
  return (
    <div id="tokenomics" className="bg-gradient-to-b from-black to-purple-900 text-white py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-courier-bold mb-4">TOKENOMICS</h1>
          <p className="font-simpfxo mb-6">An original total supply of 1 Billion tokens</p>
          
          {/* Items with percentages */}
          <div className="space-y-4">
            <div>
              <h2 className="font-courier-bold">AIRDROP</h2>
              <p className="font-simpfxo">30%</p>
            </div>
            <div>
              <h2 className="font-courier-bold">LIQUIDITY POOL</h2>
              <p className="font-simpfxo">35%</p>
            </div>
            <div>
              <h2 className="font-courier-bold">LEFT FOR CEX LISTING</h2>
              <p className="font-simpfxo">20%</p>
            </div>
            <div>
              <h2 className="font-courier-bold">TREASURY</h2>
              <p className="font-simpfxo">10%</p>
            </div>
          </div>

          {/* Additional Text */}
          <p className="font-simpfxo">
            The WOOF claim period has ended. The remaining 236M WOOF allocated for the airdrop
            (23.6% of the total supply) have been burned.
            </p>
            <p className="font-simpfxo">
            100% of all LP Tokens have been burned to ensure fairness and security
          </p>

          <div>
  <a href="https://birdeye.so/token/WARcU61sECeEK5DEbkY3wcjGxSGr4W8bVUpKbBNbgbu?chain=solana" class="mt-4 bg-transparent border border-white py-2 px-6 rounded uppercase" target="_blank" rel="noopener noreferrer">
    Track Charts
  </a>
</div>
        </div>
        
        {/* Right Section - Jupiter Terminal */}
        <div id="integrated-terminal" className="flex-1 mt-8 md:mt-0">
          {/* Placeholder for Jupiter Terminal */}
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
