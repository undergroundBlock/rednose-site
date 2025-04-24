// app/page.tsx
export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-white bg-gradient-to-br from-[#70C7BA] to-[#54B2A1] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            RedNose Token
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A fair-launched Kaspa meme token with zero team allocation and NFT rewards.
          </p>
          <a
            href="/mint"
            className="inline-block bg-white text-[#54B2A1] font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:bg-gray-100 transition"
          >
            Mint NFTs Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why RedNose?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Fair Launch</h3>
            <p>No presale. No pre-mine. RedNose is built for the community.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">NFT Rewards</h3>
            <p>Mint NFTs that reflect your RedNose spirit. No team allocation.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Powered by Kaspa</h3>
            <p>Blazing-fast blocks with PoW and DAG architecture.</p>
          </div>
        </div>
      </section>

      {/* Domain Sales Funding Section */}
      <section className="bg-[#F7FDFC] py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Domain Sales Supporting RedNose</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          When you purchase a domain in the KNS domain market, a portion of the sale directly contributes to funding the RedNose token. 
          Each domain has a specific allocation percentage, helping to fuel further development, liquidity, and adoption of RedNose within the Kaspa ecosystem. 
          Your purchase is more than just an asset—it's an investment in the future of decentralized finance and meme tokens on Kaspa.
        </p>
        <a
          href="/domains"
          className="bg-[#54B2A1] text-white font-semibold px-10 py-3 rounded-full text-lg shadow-md hover:bg-[#469f91] transition"
        >
          Explore Domains
        </a>
      </section>

      {/* Call to Action */}
      <section className="bg-[#F7FDFC] py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get your RedNose?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Join the fun and become part of the community. Mint your NFT and show off your RedNose!
        </p>
        <a
          href="/mint"
          className="bg-[#54B2A1] text-white font-semibold px-10 py-3 rounded-full text-lg shadow-md hover:bg-[#469f91] transition"
        >
          Go to Mint Page
        </a>
      </section>
    </div>
  );
}
