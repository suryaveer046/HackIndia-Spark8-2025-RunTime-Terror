import React, { createContext, useContext, useCallback } from 'react';
import {
  useAddress,
  useMetamask,
  useDisconnect,
} from '@thirdweb-dev/react';

interface WalletContextType {
  address: string | undefined;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType>({
  address: undefined,
  isConnecting: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: React.ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();

  const connectWallet = useCallback(async () => {
    try {
      await connectWithMetamask();
    } catch (err) {
      console.error("Failed to connect wallet:", err);
    }
  }, [connectWithMetamask]);

  const disconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnecting: false, // optional: use your own state if needed
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
