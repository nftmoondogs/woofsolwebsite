// components/FooterSection.js
import React from 'react';

const FooterSection = () => {
  return (
    <footer id="foundation" className="bg-black text-white py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Logo and title */}
        <div className="mb-6">
          <img src="https://i.ibb.co/Thxk5mZ/FINE-logo.png" alt="FINE Logo" className="mx-auto mb-4" style={{ height: '80px' }} />
          <h2 className="font-courier-bold text-2xl">THE FINE CULT</h2>
        </div>
        
        {/* Description */}
        <p className="font-simpfxo mx-auto leading-relaxed max-w-2xl">
        As an inductee into The Fine Cult, you'll receive your very own rose-tinted shades to help you view the world through an ever-Fine lens. No more fear, no more doubt, no more FOMO or rage-quitting exchanges. Just you, your unwavering diamond hands, and unshakable faith that everything...is...FINE.
          <br /><br />
          FINE IS A TOKEN ON THE SOLANA BLOCKCHAIN. THIS IS NOT INVESTMENT ADVICE. THE COIN IS FOR ENTERTAINMENT AND EDUCATIONAL PURPOSES ONLY. THE FOUNDERS ARE NOT LIABLE FOR ANY LOSSES OR DAMAGES. THE MARKET IS VOLATILE; INVEST AT YOUR OWN RISK. NO GUARANTEES OF PROFIT OR VALUE RETENTION. RESEARCH THOROUGHLY BEFORE INVESTING. BY BUYING, YOU ACKNOWLEDGE THE RISKS INVOLVED. FOUNDERS HAVE NO OBLIGATION TO UPDATE INFORMATION. LAWS VARY BY JURISDICTION; COMPLY WITH LOCAL REGULATIONS. THIS DISCLAIMER IS SUBJECT TO CHANGES WITHOUT NOTICE.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
