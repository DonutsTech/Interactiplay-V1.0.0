# Guia de Migração: FormLogin (Exemplo Prático)

Este documento mostra como migrar o FormLogin do sistema antigo (ErrorModal) para o novo sistema (ErrorContext + React-Toastify).

## ⚠️ Antes de Começar

Este é um **exemplo de referência**. O arquivo [FormLogin](../components/acess/FormLogin/index.tsx) original **NÃO foi modificado ainda**. Use este guia como base para fazer a migração quando estiver pronto.

---

## Estado Atual (Antes da Migração)

### Imports Antigos
```tsx
import { useIsLoading } from '@/context/ErrorContext';
import { ErrorMessage, ErrorModalState } from '@/@types/error';
import ErrorModal from '@/components/globals/ErrorModal';
```

### Estados Antigos
```tsx
const { setIsLoading } = useIsLoading();
const [modalMessage, setModalMessage] = useState(false);
const [errorModal, setErrorModal] = useState<ErrorModalState>({
  mensagem: '',
  statusCode: 0,
  type: 'warning',
});
```

### Lógica Antiga (handleSubmit)
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true); // ❌ Manual

  try {
    const response = await postLogin({
      EMAIL: loginPackage.email,
      HASHED_PASSWORD: loginPackage.password,
    });

    // Verifica se é erro
    if (response && 'MESSAGE' in response && 'STATUS' in response) {
      // Status 403: Sem plano
      if (response.STATUS === 403) {
        setUser({...response.USER});
        setModalMessage(true);
        setErrorModal({
          mensagem: response.MESSAGE,
          type: 'warning',
          statusCode: response.STATUS,
          onClose: handleModalClose,
          butonProps: {
            text: 'Escolher o Plano',
            goClick: () => {
              setIsLoading(false);
              setModalMessage(false);
              router.push('/acess/plans');
            },
          },
        });
      }

      // Status 402: Plano expirado
      if (response.STATUS === 402) {
        setModalMessage(true);
        setErrorModal({
          mensagem: response.MESSAGE,
          type: 'warning',
          statusCode: response.STATUS,
          onClose: handleModalClose,
          butonProps: {
            text: 'Renovar Plano',
            goClick: () => {
              handleModalClose();
              window.open(`${response.PORTAL}`, '_blank');
            },
          },
        });
      }

      // Status 401: Não autorizado
      if (response.STATUS === 401) {
        setModalMessage(true);
        setErrorModal({
          mensagem: response.MESSAGE,
          type: 'warning',
          statusCode: response.STATUS,
          onClose: handleModalClose,
        });
        setTimeout(() => {
          handleModalClose();
        }, 5000);
      }
    }

    // Sucesso
    if (response && 'ACCESTOKEN' in response) {
      setToken(response.ACCESTOKEN);
      await loadAuthUser();
      setModalMessage(true);
      setErrorModal({
        mensagem: 'Login realizado com sucesso!',
        type: 'success',
        onClose: () => {
          router.push('/dashboard');
          handleModalClose();
        },
      });
      setTimeout(() => {
        router.push('/dashboard');
        handleModalClose();
      }, 3000);
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    setErrorModal({
      mensagem: 'Erro desconhecido ao fazer login',
      type: 'error',
      statusCode: 500,
    });
    setModalMessage(true);
  } finally {
    setIsLoading(false); // ❌ Manual
  }
};
```

### JSX Antigo
```tsx
{modalMessage && (
  <ErrorModal isOpen={setModalMessage} {...errorModal} />
)}
```

---

## Novo Sistema (Depois da Migração)

### Imports Novos
```tsx
import { useError } from '@/context/ErrorContext';
import { ErrorMessage } from '@/@types/error';
// ❌ Removidos: ErrorModalState, ErrorModal, useIsLoading
```

### Estados Novos
```tsx
const { handleRequest, showSuccess, showWarning } = useError();
// ❌ Removidos: modalMessage, errorModal, setIsLoading manual
```

### Lógica Nova (handleSubmit)
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await handleRequest(
    () => postLogin({
      EMAIL: loginPackage.email,
      HASHED_PASSWORD: loginPackage.password,
    }),
    {
      // Suprime toast de erro automático para tratamento customizado
      suppressErrorToast: true,
      onError: (error) => {
        // Status 403: Sem plano
        if (error.STATUS === 403) {
          setUser({
            id: error.USER?.ID || '',
            name: error.USER?.NAME || '',
            email: error.USER?.EMAIL || '',
            selectedPlan: '',
          });
          
          showWarning(error.MESSAGE, {
            action: {
              text: 'Escolher o Plano',
              onClick: () => router.push('/acess/plans'),
            },
          });
        }
        // Status 402: Plano expirado
        else if (error.STATUS === 402) {
          showWarning(error.MESSAGE, {
            action: {
              text: 'Renovar Plano',
              onClick: () => window.open(error.PORTAL, '_blank'),
            },
          });
        }
        // Status 401: Não autorizado
        else if (error.STATUS === 401) {
          showWarning(error.MESSAGE, {
            autoClose: 5000,
          });
        }
        // Outros erros
        else {
          showError(error);
        }
      },
    }
  );

  // Sucesso
  if (response && 'ACCESTOKEN' in response) {
    setToken(response.ACCESTOKEN);
    await loadAuthUser();
    
    showSuccess('Login realizado com sucesso!', {
      autoClose: 3000,
    });
    
    setTimeout(() => {
      router.push('/dashboard');
    }, 3000);
  }
};
```

### JSX Novo
```tsx
// ✨ Nada! Não precisa renderizar ErrorModal
// Os toasts são gerenciados pelo ToastContainer no layout.tsx
```

---

## Comparação: Linhas de Código

| Métrica | Antes | Depois | Redução |
|---------|-------|--------|---------|
| **Imports** | 3 | 2 | -33% |
| **Estados** | 3 | 1 | -67% |
| **Linhas handleSubmit** | ~120 | ~60 | -50% |
| **JSX extra** | 3 | 0 | -100% |
| **setIsLoading manual** | 4x | 0x | -100% |

---

## Benefícios da Migração

### ✅ Código Mais Limpo
- Menos estados para gerenciar
- Menos imports
- Menos JSX

### ✅ Loading Automático
- `handleRequest` gerencia `isLoading` automaticamente
- Sem necessidade de `setIsLoading(true/false)` em `try/catch/finally`

### ✅ Erro Automático
- Toast de erro é exibido automaticamente para erros não tratados
- Tratamento customizado via `onError` callback

### ✅ Menos Bugs
- Sem risco de esquecer `setIsLoading(false)` no `finally`
- Sem risco de não fechar modal
- Sem estados desincronizados

### ✅ Melhor UX
- Toasts são menos invasivos que modais
- Múltiplas mensagens podem aparecer simultaneamente
- Usuário pode continuar usando a aplicação enquanto vê notificações

---

## Checklist de Migração

Ao migrar um componente do sistema antigo para o novo:

- [ ] Substituir `import { useIsLoading }` por `import { useError }`
- [ ] Remover `import ErrorModal` e `import ErrorModalState`
- [ ] Remover estados `modalMessage` e `errorModal`
- [ ] Substituir `setIsLoading(true/false)` por `handleRequest()`
- [ ] Converter lógica de `setErrorModal()` para `showToast()` / `showError()` / `showSuccess()` / `showWarning()`
- [ ] Remover `<ErrorModal />` do JSX
- [ ] Testar todos os fluxos (sucesso, erro, diferentes status codes)
- [ ] Verificar que loading funciona corretamente
- [ ] Validar que toasts aparecem conforme esperado

---

## Próximos Passos

1. **Validar implementação base**: Acesse `/test-error-context` para testar o ErrorContext
2. **Revisar este exemplo**: Entenda bem as mudanças antes de começar a migração
3. **Migrar FormLogin**: Use este guia como referência para a primeira migração real
4. **Migrar outros componentes**: Aplique o mesmo padrão em FormCadastro, FormForgotPassword, etc.

---

## Ajuda e Suporte

- 📖 **Documentação completa**: Ver [ERRORCONTEXT_USAGE.md](../ERRORCONTEXT_USAGE.md)
- 🧪 **Página de testes**: http://localhost:3000/test-error-context
- 💡 **Dúvidas**: Consulte os exemplos na documentação ou no componente TestErrorContext

---

**Migração criada em**: 16/04/2026  
**Componente de referência**: [FormLogin](../components/acess/FormLogin/index.tsx)  
**Status**: Exemplo de referência (não aplicado ainda)
