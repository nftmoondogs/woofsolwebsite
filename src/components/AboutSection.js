// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          
          {/* Left Side */}
          <div className="space-y-6 flex justify-center">
            <img src="https://i.ibb.co/XxnCHTG/perfected.png" alt="just fine bro" className="max-w-xs md:max-w-sm" />
          </div>
          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">$FINE Token Description</h2>
            <p className="font-simpfxo text-base mb-4">
            First off, let's address the elephant in the room: yes, everything about this project is 100% unequivocally FINE. The tokenomics, the community, the "team" (if you can even call a bunch of slackers in Hawaiian shirts a team)...it's all stupendously, indescribably Fine.

But what really sets the Fine Token apart is our cult-like obsession with being chill at all costs. Got rugged? It's fine. Market crashing? Fiiiine. Solana went down for a week? Fine by us, bro! We're so transcendentally zen that literally nothing can ruin our platinum-level vibes.

Join our ranks and you'll gain entry into an elite club of diamond-handed holders who spend more time meditating than they do checking coin prices. Plus, we have accomplished literally zero real-world utility - because true Fineness comes from within, maaaan.

So gather your finest tie-dye attire, spark up a bifter, and get ready to reach levels of chill you never knew were possible. With the Fine Token, everything is groovy, everything is copacetic, and everything is...you guessed it...FINE. Wow, that's freaking Fine!
            </p>
            <h3 className="font-courier-bold text-xl font-bold">FINE KEY POINTS</h3>
            <ul className="font-simpfxo text-base space-y-2">
  <li>• Believe me bro this token is just fine ;D</li>
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
  