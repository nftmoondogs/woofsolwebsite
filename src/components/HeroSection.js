export default function HeroSection() {
  return (
    <div id="about" className="flex flex-col items-center justify-center min-h-0 bg-black pt-10 pb-10">
      <div className="text-center text-white">
        <h1 className="font-courier text-6xl font-bold mb-4">
          {/* Your other content */}
        </h1>
        <video 
          src="/videos/woof3d.mp4" 
          alt="WOOF Logo" 
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
          loop
          muted
          className="inline h-100"
        />
        <p className="font-courier text-xl mb-8">WOOF TOKEN BY WOOFLABS HERE TO PUSH THE LIMITS OF SOLANA BLOCKCHAIN</p>
        <a href="#about" className="font-courier text-white uppercase underline text-base px-6 py-3 transition duration-300">
          Learn More
        </a>
      </div>
    </div>
  );
}
