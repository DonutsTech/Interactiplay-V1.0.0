# Sistema de Erros com ErrorContext + React-Toastify

## 📋 Resumo

Sistema centralizado de tratamento de erros e notificações usando React-Toastify v11, com gerenciamento automático de loading states durante requisições.

---

## ✨ Principais Funcionalidades

### 1. **Toasts Tipados**
- `showSuccess()` - Notificações de sucesso (3s, verde)
- `showError()` - Notificações de erro (5s, vermelho)
- `showWarning()` - Notificações de aviso (5s, amarelo)
- `showInfo()` - Notificações informativas (4s, azul)
- `showToast()` - Toast genérico customizável

### 2. **Wrapper de Requisições (`handleRequest`)**
- ✅ **Loading automático**: Ativa `isLoading` antes, desativa depois
- ✅ **Erro automático**: Exibe toast de erro se requisição falhar
- ✅ **Callback customizado**: `onSuccess` / `onError` para lógica adicional
- ✅ **Toast de sucesso**: Opcional via `successMessage`
- ✅ **Supressão**: Desabilite loading ou toasts via opções

### 3. **Toasts com Ações**
- Botões customizados em toasts (ex: "Escolher Plano", "Renovar")
- Não fecham automaticamente quando têm ação
- Ideais para status codes específicos (403, 402, 409)

### 4. **Estado Global de Loading**
- `isLoading` disponível via `useError()`
- Compatível com `useIsLoading()` legado (deprecated)

---

## 🚀 Como Usar

### Importação Básica
```tsx
import { useError } from '@/context/ErrorContext';
```

### Exemplo 1: Toast Simples
```tsx
const { showSuccess, showError } = useError();

showSuccess('Operação realizada com sucesso!');
showError('Ocorreu um erro!');
```

### Exemplo 2: Requisição com handleRequest
```tsx
const { handleRequest } = useError();

const handleSubmit = async () => {
  const response = await handleRequest(
    () => postLogin({ email, password }),
    { 
      successMessage: 'Login realizado com sucesso!',
      onSuccess: () => router.push('/dashboard'),
    }
  );
  
  if (response) {
    // Sucesso - fazer algo com response
    setToken(response.ACCESTOKEN);
  }
  // Loading e toast de erro são automáticos!
};
```

### Exemplo 3: Toast com Botão
```tsx
const { showWarning } = useError();

showWarning('Você não possui um plano ativo.', {
  action: {
    text: 'Escolher Plano',
    onClick: () => router.push('/acess/plans'),
  },
});
```

---

## 📁 Arquivos Principais

### **Core**
- [`context/ErrorContext.tsx`](context/ErrorContext.tsx) — Provider principal com toda a lógica
- [`@types/error.d.ts`](@types/error.d.ts) — Interfaces TypeScript
- [`app/layout.tsx`](app/layout.tsx) — Configuração do `ToastContainer`

### **Documentação**
- [`ERRORCONTEXT_USAGE.md`](ERRORCONTEXT_USAGE.md) — Guia completo de uso com 8 exemplos
- [`MIGRATION_EXAMPLE_FormLogin.md`](MIGRATION_EXAMPLE_FormLogin.md) — Exemplo prático de migração (antes/depois)

### **Testes**
- [`app/test-error-context/page.tsx`](app/test-error-context/page.tsx) — Página de testes
- [`components/globals/TestErrorContext/`](components/globals/TestErrorContext/) — Componente de teste interativo

---

## 🧪 Como Testar

1. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

2. **Acessar página de testes**:
   ```
   http://localhost:3000/test-error-context
   ```

3. **Testar funcionalidades**:
   - Toasts simples (success, error, warning, info)
   - Toasts com duração customizada
   - Toasts com botões de ação
   - Requisições mockadas (sucesso, erro, exceção)
   - Loading automático
   - Múltiplos toasts simultâneos

---

## 📦 Configuração do ToastContainer

Localização: [`app/layout.tsx`](app/layout.tsx)

```tsx
<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  limit={3}
/>
```

### Personalizações Disponíveis:
- **position**: `top-right` | `top-center` | `bottom-right` | etc.
- **theme**: `colored` | `light` | `dark`
- **limit**: Máximo de toasts visíveis simultaneamente
- **autoClose**: Tempo padrão (pode ser sobrescrito por toast)

Para customizar estilos, edite [`app/globals.scss`](app/globals.scss) ou crie arquivo específico para toasts.

---

## 🔄 Migração do Sistema Antigo

### Antes (ErrorModal):
```tsx
const [modalMessage, setModalMessage] = useState(false);
const [errorModal, setErrorModal] = useState<ErrorModalState>({...});

setModalMessage(true);
setErrorModal({ mensagem: 'Erro!', type: 'error' });

{modalMessage && <ErrorModal isOpen={setModalMessage} {...errorModal} />}
```

### Depois (Toast):
```tsx
const { showError } = useError();

showError('Erro!');
// Sem JSX extra! ✨
```

### Checklist de Migração:
- [ ] Substituir `useIsLoading()` por `useError()`
- [ ] Remover estados `modalMessage` e `errorModal`
- [ ] Substituir `setIsLoading(true/false)` por `handleRequest()`
- [ ] Converter `setErrorModal()` para `showToast()`
- [ ] Remover `<ErrorModal />` do JSX
- [ ] Testar todos os fluxos

**Exemplo completo**: Ver [`MIGRATION_EXAMPLE_FormLogin.md`](MIGRATION_EXAMPLE_FormLogin.md)

---

## 🎯 Padrões de Status Code

Para manter compatibilidade com o backend:

| Status | Comportamento | Exemplo |
|--------|---------------|---------|
| **403** | Sem plano → Toast com botão "Escolher Plano" | `showWarning(msg, { action: {...} })` |
| **402** | Plano expirado → Toast com botão "Renovar" | `showWarning(msg, { action: {...} })` |
| **401** | Não autorizado → Toast warning (5s) | `showWarning(msg)` |
| **409** | Conflito → Toast error com ação | `showError(msg, { action: {...} })` |
| **500** | Erro servidor → Toast error padrão | `showError(msg)` |

---

## 🛠️ API Completa

### **useError() Hook**

```tsx
const {
  // Estados
  isLoading,
  setIsLoading,
  
  // Toasts
  showToast,
  showSuccess,
  showError,
  showWarning,
  showInfo,
  
  // Requisições
  handleRequest,
} = useError();
```

### **handleRequest Options**

```tsx
interface HandleRequestOptions {
  suppressErrorToast?: boolean;      // Não exibe toast de erro
  suppressLoading?: boolean;         // Não gerencia isLoading
  successMessage?: string;           // Mensagem de sucesso
  successToastOptions?: ShowToastOptions;
  errorToastOptions?: ShowToastOptions;
  onSuccess?: () => void;            // Callback de sucesso
  onError?: (error: ErrorMessage) => void; // Callback de erro
}
```

### **ShowToastOptions**

```tsx
interface ShowToastOptions extends ToastOptions {
  autoClose?: number | false;        // Duração (ms) ou false
  closeOnClick?: boolean;            // Fecha ao clicar
  pauseOnHover?: boolean;            // Pausa em hover
  action?: {                         // Botão customizado
    text: string;
    onClick: () => void;
  };
}
```

---

## 📚 Documentação Adicional

- **Guia de Uso Completo**: [`ERRORCONTEXT_USAGE.md`](ERRORCONTEXT_USAGE.md) — 8 exemplos detalhados
- **Exemplo de Migração**: [`MIGRATION_EXAMPLE_FormLogin.md`](MIGRATION_EXAMPLE_FormLogin.md) — Comparação antes/depois
- **React-Toastify Docs**: https://fkhadra.github.io/react-toastify/
- **Migration Guide v11**: https://fkhadra.github.io/react-toastify/migration-v11

---

## ✅ Status da Implementação

### Fase 1: Estrutura Base ✅ CONCLUÍDO
- [x] ErrorContext.tsx criado
- [x] Tipos atualizados em error.d.ts
- [x] ToastContainer configurado no layout.tsx
- [x] ErrorProvider adicionado ao AppProvider

### Fase 2: Testes e Documentação ✅ CONCLUÍDO
- [x] Componente TestErrorContext criado
- [x] Página /test-error-context criada
- [x] Documentação de uso (ERRORCONTEXT_USAGE.md)
- [x] Exemplo de migração (MIGRATION_EXAMPLE_FormLogin.md)
- [x] README principal

### Próximas Fases (Aguardando)
- [ ] Refatorar useCallDataBase para usar handleRequest
- [ ] Criar hook useApiCall moderno
- [ ] Migrar componentes batch 1 (FormLogin, FormCadastro, etc.)
- [ ] Migrar componentes batch 2 (UserProfile, UserPlan, etc.)
- [ ] Migrar componentes batch 3 (restantes)
- [ ] Deprecar/remover código legado

---

## 🚨 Notas Importantes

1. **IsLoadingContext ainda existe**: Mantido para compatibilidade. `useError()` agora também exporta `isLoading`.
2. **ErrorModal ainda existe**: Não removido. Pode ser usado para casos especiais (formulários complexos).
3. **Migração gradual**: Componentes antigos continuam funcionando. Migre gradualmente.
4. **TypeScript**: Todas as interfaces têm tipagem forte.

---

## 👥 Contribuindo

Ao migrar um componente:
1. Consulte [`MIGRATION_EXAMPLE_FormLogin.md`](MIGRATION_EXAMPLE_FormLogin.md)
2. Teste no [`/test-error-context`](http://localhost:3000/test-error-context)
3. Valide todos os fluxos (sucesso, erro, loading)
4. Remova imports não utilizados

---

## 📞 Ajuda

- 🐛 **Bugs**: Verifique console do navegador (F12)
- 📖 **Dúvidas**: Consulte ERRORCONTEXT_USAGE.md
- 🧪 **Testes**: Acesse /test-error-context
- 💬 **Suporte**: Contate a equipe de desenvolvimento

---

**Versão**: 1.0.0  
**Data de criação**: 16/04/2026  
**Compatibilidade**: React 19.2.3, Next.js 16.2.1, React-Toastify 11.0.5
