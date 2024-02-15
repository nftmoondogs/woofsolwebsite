// components/Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
        <a href="/" className="flex items-center">
          <img src="https://i.ibb.co/XCnhwBb/WOOF1.png" alt="WOOF Logo" className="h-12" />
        </a>
        <div className="flex items-center">
          {/* Social Icons */}
          <a href="https://twitter.com/wooflabs/" target="_blank" rel="noopener noreferrer" className="text-white px-3">
          <svg className="fill-current text-white hover:text-gray-400" width="30" height="30" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
              {/* Replace with your Twitter path */}
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
          <a href="https://t.me/woofcult" target="_blank" rel="noopener noreferrer" className="text-white px-3">
          <svg className="fill-current text-white hover:text-gray-400" width="30" height="30" viewBox="0 0 25 19" xmlns="http://www.w3.org/2000/svg">
              {/* Replace with your Telegram path */}
              <path d="M13.3103 4.23944C7.20757 6.43516 1.93754 8.32934 1.59915 8.44876C0.546349 8.81994 0.233791 9.3417 0.73107 9.89772C0.924439 10.1137 1.49152 10.3176 3.88269 11.0306L6.79864 11.9L8.00543 15.3452C9.22023 18.813 9.31004 18.9985 9.83576 19.1254C10.1929 19.2117 10.4922 18.9993 12.1484 17.4847C13.0069 16.6995 13.76 16.0571 13.8219 16.0571C13.8839 16.0571 15.2357 16.9669 16.8261 18.0788C18.5122 19.2576 19.8793 20.143 20.1054 20.2026C20.5626 20.323 21.1189 20.121 21.3712 19.7429C21.5125 19.5311 25.5 1.34493 25.5 0.912331C25.5 0.617991 25.0344 0.226573 24.6972 0.237593C24.5371 0.242803 19.4129 2.04361 13.3103 4.23944ZM20.9967 3.94049C21.016 4.03857 19.1595 5.71494 15.9968 8.45527C13.2299 10.8526 10.816 12.9464 10.6328 13.1081C10.3007 13.4011 10.2988 13.4088 10.1221 15.0818C10.0245 16.0056 9.92557 16.743 9.90203 16.7204C9.87859 16.6978 9.48497 15.4956 9.02728 14.0487C8.43728 12.1832 8.22755 11.387 8.30653 11.3111C8.36768 11.2523 11.1478 9.52403 14.4844 7.47066C18.1016 5.24458 20.6348 3.74673 20.7585 3.76086C20.8725 3.77388 20.9797 3.85473 20.9967 3.94049Z" />
            </svg>
          </a>
          <a href="https://birdeye.so/token/WARcU61sECeEK5DEbkY3wcjGxSGr4W8bVUpKbBNbgbu?chain=solana" target="_blank" rel="noopener noreferrer" className="text-white px-3">
          <svg className="fill-current text-white hover:text-gray-400" width="2em" height="2em" viewBox="0 0 497 497" xmlns="http://www.w3.org/2000/svg">
              {/* Replace with your third social path */}
              <path d="M386.996 59.5663C376.7 63.4298 362.55 77.07 187.976 251.391C84.6129 354.608 0.0410156 439.853 0.0410156 440.826C0.0410156 441.797 6.6515 442.259 14.7312 441.852C36.5519 440.749 49.7849 433.297 80.4693 404.829C113.405 374.274 124.451 368.546 150.147 368.699C166.706 368.8 169.793 369.477 184.798 376.299C211.689 388.531 228.963 392.291 258.011 392.243C299.022 392.172 332.48 380.588 362.812 355.954C405.185 321.543 423.755 283.781 427.171 225.078C428.83 196.559 428.874 196.369 438.093 177.416C444.564 164.117 449.864 156.237 455.701 151.24C464.833 143.423 478.731 137.828 489.013 137.828C492.631 137.828 496.077 137.038 496.674 136.073C498.329 133.396 492.431 112.736 486.954 102.02C467.691 64.3347 423.878 45.7266 386.996 59.5663ZM361.901 153.447C380.434 176.733 389.038 200.355 388.977 227.803C388.903 261.406 377.77 291.427 357.295 313.248C334.358 337.692 307.443 349.436 270.775 350.996C251.874 351.8 246.062 351.282 234.498 347.761C210.942 340.589 177.396 317.405 177.396 308.298C177.396 303.465 201 280.921 206.062 280.921C207.582 280.921 212.294 284.476 216.536 288.819C220.779 293.164 229.806 299.267 236.596 302.385C247.362 307.324 251.393 308.052 268.088 308.068C284.802 308.084 288.752 307.379 299.186 302.512C312.937 296.095 328.55 284.008 328.55 279.778C328.55 278.19 327.502 276.89 326.22 276.89C321.7 276.89 309.948 266.196 307.175 259.558C298.12 237.884 311.58 215.064 334.733 212.839C343.863 211.962 344.659 211.485 343.458 207.601C340.608 198.386 332.095 183.656 325.225 176.05L318.007 168.063L331.845 155.047C339.455 147.891 347.255 141.994 349.177 141.945C351.102 141.897 356.826 147.075 361.901 153.447Z" />
            </svg>
          </a>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="hover:text-gray-400 text-xl font-courier">About</a>
            <a href="#tokenomics" className="hover:text-gray-400 text-xl font-courier">Tokenomics</a>
            <a href="#foundation" className="hover:text-gray-400 text-xl font-courier">Foundation</a>
            <a href="https://file.io/pVibt6bQsQO1" className="hover:text-gray-400 text-xl font-courier">Brand</a>
            {/* Trade Button */}
            <a href="#tokenomics" className="bg-white text-black px-3 py-1 border border-white text-xl font-courier hover:bg-gray-200 transition duration-300" style={{ boxShadow: '1px 1px 3px 2px #722d84' }}>
              Trade WOOF
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
