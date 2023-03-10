import { councilConfigs } from "src/config/council.config";
import { allChains, ChainProviderFn, configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const configuredChains = allChains.filter((chain) => {
  return Object.keys(councilConfigs).includes(`${chain.id}`);
});

const configuredProviders = configuredChains.map((chain) => {
  if (chain.id === 1) {
    const mainnetAlchemyKey = process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_KEY;
    if (!mainnetAlchemyKey) {
      console.error(
        "Chain ID 1 (mainnet) exists in council.config.ts, but no provider was given, see .env",
      );
    }
    return alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_KEY,
    });
  }

  if (chain.id === 5) {
    const goerliAlchemyKey = process.env.NEXT_PUBLIC_GOERLI_ALCHEMY_KEY;
    if (!goerliAlchemyKey) {
      console.error(
        "Chain ID 5 (goerli) exists in council.config.ts, but no provider was given, see .env",
      );
    }
    return alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_GOERLI_ALCHEMY_KEY,
    });
  }

  if (chain.id === 31337) {
    const localURL = process.env.NEXT_PUBLIC_LOCAL_RPC_URL;
    if (!localURL) {
      console.error(
        "Chain ID 31337 (hardhat/foundry) exists in council.config.ts, but no provider was given, see .env",
      );
    }
    const localRpcUrl = process.env.NEXT_PUBLIC_LOCAL_RPC_URL;
    if (localRpcUrl) {
      return jsonRpcProvider({
        rpc: () => ({ http: localRpcUrl }),
      });
    }
  }
}) as ChainProviderFn[]; // safe to cast

/**
 * Use configureChains from wagmi to specify providers for each chain at
 * config-time.
 *
 * See: https://wagmi.sh/docs/providers/configuring-chains
 */
export const { provider, chains } = configureChains(
  configuredChains,
  // If a provider does not support a chain, it will fall back onto the next one
  // in the array.
  configuredProviders,
);
