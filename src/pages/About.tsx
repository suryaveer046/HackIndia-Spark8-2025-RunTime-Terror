import React from "react";

type TechStack = {
  title: string;
  desc: string;
};

const About: React.FC = () => {
  const techStacks: TechStack[] = [
    { title: "Frontend", desc: "React.js, Tailwind CSS" },
    { title: "Blockchain", desc: "Ethereum Network" },
    { title: "Web3 Integration", desc: "Web3.js / Ethers.js" },
    { title: "Wallet Support", desc: "Metamask" },
    { title: "Credentials Storage", desc: "NFTs (Non-Fungible Tokens)" },
    { title: "Backend (Optional)", desc: "Node.js, Express, MongoDB" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-violet-500 to-purple-500">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center bg-white bg-clip-text text-transparent mb-6">
          About EduCred Chain
        </h1>

        {/* Description */}
        <p className="text-white text-lg text-center max-w-3xl mx-auto mb-14">
          EduCred Chain is a blockchain-powered platform that revolutionizes how
          educational credentials are stored, verified, and shared. By
          leveraging NFTs and decentralized networks, we empower students and
          institutions with secure, tamper-proof records.
        </p>

        {/* Tech Stack */}
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          🚀 Tech Stack
        </h2>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-600">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
