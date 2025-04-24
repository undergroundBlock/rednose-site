'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function Liquidity() {
  const data = [
    { name: 'Liquidity Pool', value: 80 },
    { name: 'Airdrops to Domain Holders', value: 5 },
    { name: 'Future Listing', value: 10 },
    { name: 'Owner Reserve', value: 1 },
    { name: 'Team', value: 4 },
  ];

  const COLORS = ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#FF9F40'];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Liquidity & Token Strategy</h1>

      <p className="mb-6">
        Rednose tokenomics are designed to ensure strong liquidity, incentivize early supporters, and
        fund future growth through strategic listings and community campaigns.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Token Allocation Chart</h2>

      <div className="h-64 w-full mb-8">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ul className="list-disc list-inside mb-8">
        {data.map((item) => (
          <li key={item.name}>
            <strong>{item.name}:</strong> {item.value}%
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Q2 2025 – Premium Domain Sales</h3>
          <p>Initial sales fund Rednose token liquidity and development. Domains serve as digital assets.</p>
        </div>
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Q3 2025 – Token Launch</h3>
          <p>Rednose token released with a fair and transparent liquidity pool setup on a decentralized exchange.</p>
        </div>
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Q4 2025 – Listings & Airdrops</h3>
          <p>Token listing preparations using reserved funds. Airdrops distributed to early domain holders.</p>
        </div>
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">2026 – Community Growth</h3>
          <p>Expansion of Rednose token utility and ecosystem growth through strategic partnerships and features.</p>
        </div>
      </div>
    </div>
  );
}
