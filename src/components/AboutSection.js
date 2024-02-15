// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          
          {/* Left Side */}
          <div className="space-y-6 flex justify-center">
            <img src="https://i.ibb.co/fXRS1kD/to-woof-cult.png" alt="A Love Letter To Wen Bros" className="max-w-xs md:max-w-sm" />
          </div>
          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">COLLECTIVE FORCE OF DEGENS</h2>
            <p className="font-simpfxo text-base mb-4">
            WOOF have a Community of Degens dedicated to working together as a Collective Force of Average Joe's with a single goal of supporting the
          development and adoption of WOOF token and further amplifying the message of what is only possible on Solana.
            </p>
            <h3 className="font-courier-bold text-xl font-bold">WOOF was born to push the limits of Solana</h3>
            <ul className="font-simpfxo text-base space-y-2">
  <li>• Initially launched as a free airdrop to the Solana community on 1st Feb 2024, WOOF's adoption has since grown parabolically, cementing its status as the quintessential community coin of web3.</li>
  
  <li>• With the ambition to become web3's premier community coin, we're broadening our integration across the Solana blockchain's expansive ecosystem.</li>
  
  <li>• We are on a mission to build the strongest, most engaged community in the web3 landscape.</li>
  
  <li>• Proudly achieved equitable distribution to over 22,000 active Solana wallets, ensuring widespread ownership and community involvement.</li>
</ul>

            <div className="space-y-2 mb-4">
              <div>
                <h3 className="font-courier text-lg font-bold">Token Address</h3>
                <a href="https://solscan.io/token/WARcU61sECeEK5DEbkY3wcjGxSGr4W8bVUpKbBNbgbu" className="font-courier text-sm underline" target="_blank" rel="noopener noreferrer">
                  WARcU61sECeEK5DEbkY3wcjGxSGr4W8bVUpKbBNbgbu
                </a>
              </div>
              {/* NFT Address and additional content can be added here */}
            </div>
            <a href="https://solscan.io/token/WARcU61sECeEK5DEbkY3wcjGxSGr4W8bVUpKbBNbgbu#holders" className="font-courier text-white bg-transparent border border-white py-2 px-4 rounded uppercase">
              View on SolScan
            </a>
          </div>
        </div>
      </div>
    );
  }
  