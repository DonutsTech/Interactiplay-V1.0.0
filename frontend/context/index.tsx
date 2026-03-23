type ProviderProps = {
  children: React.ReactNode;
};

type ProviderComponent = React.ComponentType<ProviderProps>;

function composeProviders(providers: ProviderComponent[]): ProviderComponent {
  return ({ children }) => {
    return providers.reduceRight((acc, Provider) => {
      return <Provider>{acc}</Provider>;
    }, children);
  };
}

const provider: ProviderComponent[] = [];

export const AppProvider = composeProviders(provider);
