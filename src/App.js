import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import Referral from "./components/Referral/Referral";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
//import { useState } from "react";
import { Toaster } from "react-hot-toast";

// 1. Get projectId
const projectId = "862e2544b694a246addaff50ba2ab87e";

// 2. Set chains for BSC
const bscMainnet = {
  chainId: 56,  // BSC Mainnet chain ID
  name: "Binance Smart Chain",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc-dataseed.binance.org/",
};

const bscTestnet = {
  chainId: 97,  // BSC Testnet chain ID
  name: "Binance Smart Chain Testnet",
  currency: "BNB",
  explorerUrl: "https://testnet.bscscan.com",
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

// 3. Create a metadata object (optional)
const metadata = {
  name: "My BSC dApp",
  description: "A decentralized app on Binance Smart Chain",
  url: "https://mybscdapp.com",
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
});

// 5. Create a Web3Modal instance with BSC configuration
createWeb3Modal({
  ethersConfig,
  chains: [bscMainnet, bscTestnet],  // Use BSC mainnet and testnet
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  return (
    <div className="sc-eDLKkx eTbKOW">
      <Navbar />
      <MainSection />
      <Referral />
      <Toaster />
    </div>
  );
}

export default App;
