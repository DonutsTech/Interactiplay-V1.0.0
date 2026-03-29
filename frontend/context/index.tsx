import { IsMobileProvider } from './isMobileContext';
import { AccessTypeProvider } from './AcessTypeContext';
import { IsLoadingProvider } from './IsLoadingContext';
import { UserProvider } from './UserContext';

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

const provider: ProviderComponent[] = [
  IsMobileProvider, 
  AccessTypeProvider,
  IsLoadingProvider,
  UserProvider,
];

export const AppProvider = composeProviders(provider);
