import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3ModalTheme } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  arbitrum,
  avalanche,
  bsc,
  celo,
  zkSync,
} from "wagmi/chains";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const chains = [mainnet, polygon, arbitrum, avalanche, bsc, celo, zkSync];
const projectId = "cb6c7f58fe331c255089dcb388eb06db";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  const { setTheme } = useWeb3ModalTheme();
  // Set modal theme
  setTheme({
    themeMode: "light",
    themeVariables: {
      "--w3m-accent-color": "#A91F4D",
      "--w3m-background-color": "#A91F4D",
      "--w3m-background-border-radius	": "12px",
      "--w3m-container-border-radius": "12px",
    },
  });
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          {" "}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RainbowKitProvider>
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-font-family": "poppins, sans-serif",
          "--w3m-accent-color": "#60E1A9",
          "--w3m-accent-fill-color": "#000000",
        }}
      />
    </div>
  );
}

export default App;
