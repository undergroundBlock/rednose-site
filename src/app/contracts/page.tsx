'use client';

export default function Contracts() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Rednose Token Details</h1>

      <p className="mb-4">
        The Rednose token is being built as the core utility and reward asset for our ecosystem. Designed with long-term 
        sustainability and fairness in mind, it will power various tools, incentives, and community-driven initiatives as 
        our project evolves.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Maximum Supply</h2>
      <p className="mb-4">
        The Rednose token will have a fixed maximum supply of <strong>100 million tokens</strong>. This hard cap ensures 
        no inflation over time and allows for a transparent and predictable distribution model.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Token Allocation</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>45%</strong> – Community Rewards & Airdrops (including domain holder allocations)</li>
        <li><strong>20%</strong> – Liquidity & Exchange Listings</li>
        <li><strong>15%</strong> – Ecosystem Growth & Partnerships</li>
        <li><strong>10%</strong> – Core Development Fund</li>
        <li><strong>10%</strong> – Team & Contributors (vested over time)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Smart Contract Transparency</h2>
      <p className="mb-4">
        The smart contract for Rednose will be published and verified publicly before launch. Users will be able to 
        inspect the code, review key functions like minting (which will be disabled), and confirm the total supply and 
        allocation models.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Future Utility</h2>
      <p className="mb-4">
        Rednose will be used for staking, governance voting, early access features, and potential ecosystem incentives 
        including partner project integrations. We're building for utility beyond speculation.
      </p>

      <p className="mt-6 text-sm text-gray-600">
        Please note that the contract is still under development. Follow us on social media or check our announcements 
        for the launch date and smart contract address.
      </p>
    </div>
  );
}
