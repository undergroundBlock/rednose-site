"use client";

import { useState } from "react";
import Image from "next/image";

export default function MintPage() {
  const [minting, setMinting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleMint = async () => {
    setMinting(true);
    setSuccess(false);
    setError("");

    try {
      // 🧪 Replace this with actual mint logic (smart contract interaction)
      await new Promise((res) => setTimeout(res, 2000)); // Fake delay
      setSuccess(true);
    } catch (e) {
      setError("Minting failed. Please try again.");
    } finally {
      setMinting(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Mint Your RedNose NFT</h1>
      <p className="text-lg mb-10 text-gray-700">
        Each NFT represents your place in the RedNose community. No gas wars. No stress.
      </p>

      {/* NFT Preview */}
      <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6 mb-10">
        <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <Image
            src="/nft-preview.png"
            alt="RedNose Pitbull NFT Preview"
            width={400}
            height={300}
            className="rounded-lg max-h-[300px] w-full object-cover mx-auto"
            />
        </div>
        <p className="text-gray-800">Unique RedNose NFT #001</p>
      </div>

      {/* Mint Button */}
      <button
        onClick={handleMint}
        disabled={minting}
        className="bg-[#54B2A1] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#469f91] transition disabled:opacity-50"
      >
        {minting ? "Minting..." : "Mint Now"}
      </button>

      {/* Feedback */}
      <div className="mt-6 text-sm">
        {success && <p className="text-green-600">✅ Mint successful! Your NFT is on its way.</p>}
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </section>
  );
}
