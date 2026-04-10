import { IsMobileProvider } from './isMobileContext';
import { IsLoadingProvider } from './IsLoadingContext';
import { UserProvider } from './UserContext';
import { AuthUserProvider } from './AuthUserContext';

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
  IsLoadingProvider,
  UserProvider,
  AuthUserProvider
];

export const AppProvider = composeProviders(provider);
