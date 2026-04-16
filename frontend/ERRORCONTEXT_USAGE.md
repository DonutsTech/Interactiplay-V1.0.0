# Exemplos de Uso do ErrorContext

Este documento fornece exemplos práticos de como usar o novo sistema de erros baseado em React-Toastify.

## Importação

```tsx
import { useError } from '@/context/ErrorContext';
```

## Exemplo 1: Exibir Toast Simples

```tsx
const MeuComponente = () => {
  const { showSuccess, showError, showWarning, showInfo } = useError();

  const handleClick = () => {
    showSuccess('Operação realizada com sucesso!');
    // ou
    showError('Ocorreu um erro!');
    // ou
    showWarning('Atenção: verifique os dados!');
    // ou
    showInfo('Informação importante');
  };

  return <button onClick={handleClick}>Testar Toast</button>;
};
```

## Exemplo 2: Usar handleRequest para Requisições

### Antes (método antigo com setIsLoading manual):

```tsx
const FormLogin = () => {
  const { setIsLoading } = useIsLoading();
  const [errorModal, setErrorModal] = useState<ErrorModalState>({...});

  const handleSubmit = async () => {
    setIsLoading(true); // ❌ Manual
    
    try {
      const response = await postLogin({ email, password });
      
      if (response && 'STATUS' in response) { // ❌ Verificação manual
        setErrorModal({
          mensagem: response.MESSAGE,
          type: 'error',
        });
        setIsLoading(false); // ❌ Manual
        return;
      }
      
      // Sucesso
      setIsLoading(false); // ❌ Manual
    } catch (error) {
      setErrorModal({...});
      setIsLoading(false); // ❌ Manual
    }
  };
};
```

### Depois (método novo com handleRequest):

```tsx
const FormLogin = () => {
  const { handleRequest } = useError();

  const handleSubmit = async () => {
    const response = await handleRequest(
      () => postLogin({ email, password }),
      { 
        successMessage: 'Login realizado com sucesso!',
        onSuccess: () => router.push('/dashboard'),
      }
    );
    
    // response é null se houve erro, ou contém os dados se sucesso
    if (response) {
      // Sucesso - fazer algo com response
      setToken(response.ACCESTOKEN);
    }
    // Loading e toast de erro são gerenciados automaticamente! ✅
  };
};
```

## Exemplo 3: handleRequest com Tratamento de Erro Customizado

```tsx
const MeuComponente = () => {
  const { handleRequest } = useError();
  const router = useRouter();

  const handleAction = async () => {
    const response = await handleRequest(
      () => apiCall(),
      {
        successMessage: 'Dados salvos com sucesso!',
        onError: (error) => {
          // Tratamento customizado por status code
          if (error.STATUS === 403) {
            router.push('/acess/plans');
          } else if (error.STATUS === 402) {
            window.open(error.PORTAL, '_blank');
          }
        },
      }
    );
  };
};
```

## Exemplo 4: Toast com Botão de Ação

```tsx
const MeuComponente = () => {
  const { showWarning } = useError();
  const router = useRouter();

  const handleWarning = () => {
    showWarning('Você não possui um plano ativo.', {
      action: {
        text: 'Escolher Plano',
        onClick: () => router.push('/acess/plans'),
      },
    });
  };
};
```

## Exemplo 5: Suprimir Loading ou Toast de Erro

```tsx
const MeuComponente = () => {
  const { handleRequest } = useError();

  const handleSilentRequest = async () => {
    // Não exibe loading nem toast de erro
    const response = await handleRequest(
      () => fetchData(),
      {
        suppressLoading: true,
        suppressErrorToast: true,
      }
    );
    
    // Tratar erro manualmente se necessário
    if (!response) {
      console.log('Erro silencioso');
    }
  };
};
```

## Exemplo 6: Toast Customizado com Duração

```tsx
const MeuComponente = () => {
  const { showSuccess, showError } = useError();

  const handleCustomToast = () => {
    // Toast que não fecha automaticamente
    showError('Erro crítico!', {
      autoClose: false,
      closeOnClick: false,
    });

    // Toast com duração customizada (10 segundos)
    showSuccess('Operação concluída!', {
      autoClose: 10000,
    });
  };
};
```

## Exemplo 7: Gerenciar Loading Manualmente (se necessário)

```tsx
const MeuComponente = () => {
  const { isLoading, setIsLoading } = useError();

  const handleManualLoading = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      {isLoading && <p>Carregando...</p>}
      <button onClick={handleManualLoading}>Ativar Loading</button>
    </div>
  );
};
```

## Exemplo 8: Tratamento de Diferentes Tipos de ErrorMessage

```tsx
const MeuComponente = () => {
  const { showError } = useError();

  const handleDifferentErrors = () => {
    // ErrorMessage do backend
    const backendError: ErrorMessage = {
      STATUS: 404,
      MESSAGE: 'Recurso não encontrado',
    };
    showError(backendError);

    // String simples
    showError('Erro genérico');

    // Detecta automaticamente o tipo e formata
  };
};
```

## Padrões de Status Code Especiais

Para manter compatibilidade com o sistema antigo:

- **403**: Usuário sem plano ativo → Toast com botão "Escolher Plano"
- **402**: Plano expirado → Toast com botão "Renovar" (abre PORTAL do ErrorMessage)
- **409**: Conflito → Toast com ação customizada
- **401**: Não autorizado → Toast de warning com auto-close
- **500**: Erro interno → Toast de erro padrão

## Migração de ErrorModal para Toast

### ❌ Antes (ErrorModal):
```tsx
const [modalMessage, setModalMessage] = useState(false);
const [errorModal, setErrorModal] = useState<ErrorModalState>({
  mensagem: '',
  statusCode: 0,
  type: 'warning',
});

// ...no código
setModalMessage(true);
setErrorModal({
  mensagem: response.MESSAGE,
  type: 'warning',
  statusCode: response.STATUS,
  butonProps: {
    text: 'Escolher o Plano',
    goClick: () => router.push('/acess/plans'),
  },
});

// ...no JSX
{modalMessage && <ErrorModal isOpen={setModalMessage} {...errorModal} />}
```

### ✅ Depois (Toast):
```tsx
const { showWarning } = useError();

// ...no código
showWarning(response.MESSAGE, {
  action: {
    text: 'Escolher o Plano',
    onClick: () => router.push('/acess/plans'),
  },
});

// Sem JSX extra necessário! ✅
```

## Vantagens do Novo Sistema

1. ✅ **Menos código**: Não precisa gerenciar estados de modal/loading manualmente
2. ✅ **Loading automático**: `handleRequest` gerencia isLoading automaticamente
3. ✅ **Erro automático**: `handleRequest` exibe toast de erro automaticamente
4. ✅ **Tipagem forte**: TypeScript completo em todas as interfaces
5. ✅ **Menos JSX**: Não precisa renderizar componente ErrorModal
6. ✅ **UX melhor**: Toasts são menos invasivos que modais
7. ✅ **Múltiplas mensagens**: Toasts empilham, modais bloqueiam
8. ✅ **Centralizado**: Toda lógica de erro em um único context

## Quando NÃO Usar Toast

Considere manter ErrorModal (ou criar um Dialog) para:
- Formulários complexos dentro do modal
- Confirmações que exigem atenção total do usuário
- Múltiplas ações com inputs adicionais
- Wizards ou fluxos multi-etapa

Para a maioria dos casos de erro/sucesso/warning simples, **use Toast**! 🎉
