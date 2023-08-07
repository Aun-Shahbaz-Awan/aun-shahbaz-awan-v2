import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3ModalTheme } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { publicProvider } from "wagmi/providers/public";
import { bscTestnet } from "wagmi/chains";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const chains = [bscTestnet];
const projectId = "cb6c7f58fe331c255089dcb388eb06db";

const { publicClient } = configureChains(
  [bscTestnet],
  [w3mProvider({ projectId })]
);

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
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}

export default App;
