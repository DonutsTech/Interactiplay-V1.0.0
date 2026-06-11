'use client';

import { useError } from '@/context/ErrorContext';
import styles from './TestErrorContext.module.scss';
import ButtonAcess from '@/components/acess/ButtonAcess';

/**
 * Componente de teste para validar ErrorContext
 * 
 * Acesse /test-error-context para testar as funcionalidades
 */
const TestErrorContext = () => {
  const { 
    showToast, 
    showSuccess, 
    showError, 
    showWarning, 
    showInfo,
    showConfirmation,
    handleRequest,
    isLoading,
    setIsLoading,
  } = useError();

  // Simula requisição bem-sucedida
  const mockSuccessRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Dados mockados', success: true });
      }, 2000);
    });
  };

  // Simula requisição com erro (ErrorMessage)
  const mockErrorRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          STATUS: 400,
          MESSAGE: 'Erro mockado: dados inválidos',
        });
      }, 2000);
    });
  };

  // Simula requisição com exceção
  const mockExceptionRequest = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject({
          STATUS: 500,
          MESSAGE: 'Erro de servidor mockado',
        });
      }, 2000);
    });
  };

  const handleTestHandleRequestSuccess = async () => {
    const result = await handleRequest(
      () => mockSuccessRequest(),
      {
        loadingMessage: 'Processando requisição...',
        successMessage: 'Requisição bem-sucedida! ✅',
      }
    );
    // console.log('Resultado:', result);
  };

  const handleTestHandleRequestError = async () => {
    const result = await handleRequest(
      () => mockErrorRequest(),
      {
        loadingMessage: 'Tentando buscar dados...',
        onError: (error) => {
          // console.log('Erro capturado:', error);
        },
      }
    );
    // console.log('Resultado (deve ser null):', result);
  };

  const handleTestHandleRequestException = async () => {
    const result = await handleRequest(
      () => mockExceptionRequest(),
      {
        loadingMessage: 'Executando operação...',
      }
    );
    // console.log('Resultado (deve ser null):', result);
  };

  const handleTestToastWithAction = () => {
    showWarning('Você não possui um plano ativo.', {
      action: {
        text: 'Escolher Plano',
        onClick: () => {
          alert('Redirecionando para /acess/plans');
          // console.log('Ação do botão executada!');
        },
      },
    });
  };

  // Teste de confirmação simples
  const handleTestConfirmationSimple = async () => {
    const confirmed = await showConfirmation(
      'Tem certeza que deseja continuar?'
    );
    
    if (confirmed) {
      showSuccess('✅ Você confirmou a ação!');
      // console.log('Usuário CONFIRMOU');
    } else {
      showInfo('❌ Você cancelou a ação.');
      // console.log('Usuário CANCELOU');
    }
  };

  // Teste de confirmação de exclusão (warning)
  const handleTestConfirmationDelete = async () => {
    const confirmed = await showConfirmation(
      'Esta ação não pode ser desfeita. Todos os dados serão perdidos permanentemente.',
      {
        title: '⚠️ Confirmar exclusão',
        type: 'warning',
        confirmText: 'Sim, excluir',
        cancelText: 'Não, manter',
      }
    );
    
    if (confirmed) {
      showSuccess('Item excluído com sucesso!');
      // console.log('Item EXCLUÍDO');
    } else {
      showInfo('Exclusão cancelada.');
      // console.log('Exclusão CANCELADA');
    }
  };

  // Teste de confirmação crítica (error)
  const handleTestConfirmationCritical = async () => {
    const confirmed = await showConfirmation(
      'Você está prestes a remover TODOS os usuários do sistema. Esta ação é irreversível!',
      {
        title: '🚨 AÇÃO CRÍTICA',
        type: 'error',
        confirmText: 'Confirmar remoção',
        cancelText: 'Cancelar',
        onConfirm: () => console.log(''),
        onCancel: () => console.log(''),
      }
    );
    
    if (confirmed) {
      showError('⚠️ Ação crítica executada!');
    } else {
      showSuccess('Ação crítica cancelada com segurança.');
    }
  };

  // Teste de confirmação para ação positiva (info)
  const handleTestConfirmationInfo = async () => {
    const confirmed = await showConfirmation(
      'Deseja salvar as alterações feitas no documento?',
      {
        title: '💾 Salvar alterações',
        type: 'info',
        confirmText: 'Salvar',
        cancelText: 'Descartar',
      }
    );
    
    if (confirmed) {
      showSuccess('Documento salvo com sucesso!');
    } else {
      showWarning('Alterações descartadas.');
    }
  };

  // Teste de confirmação com isLoading ativo (demonstra que loading é ativado automaticamente)
  const handleTestConfirmationWithLoading = async () => {
    showInfo('⏳ Ao abrir a confirmação, o loading será ATIVADO automaticamente! Observe o indicador no topo.');
    
    // Pequeno delay para mostrar a mensagem antes
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const confirmed = await showConfirmation(
      'O loading foi ATIVADO automaticamente ao abrir este toast. Isso bloqueia todas as novas solicitações até você decidir.',
      {
        title: '🔒 Loading Automático Ativo',
        type: 'warning',
        confirmText: 'Confirmar (desativa loading)',
        cancelText: 'Cancelar (desativa loading)',
      }
    );
    
    if (confirmed) {
      showSuccess('✅ Confirmado! Loading foi DESATIVADO automaticamente.');
    } else {
      showInfo('❌ Cancelado! Loading foi DESATIVADO automaticamente.');
    }
  };


  return (
    <div className={styles.container}>
      <h1>Teste do ErrorContext</h1>
      
      {/* Indicador Visual de Loading Global */}
      <div className={`${styles.loadingIndicator} ${isLoading ? styles.active : ''}`}>
        {isLoading && (
          <div className={styles.spinner}>
            <div className={styles.spinnerCircle}></div>
          </div>
        )}
        <div className={styles.loadingStatus}>
          <strong>isLoading:</strong>
          <span className={isLoading ? styles.statusActive : styles.statusInactive}>
            {isLoading ? '🔄 ATIVO - Carregando...' : '✅ Inativo'}
          </span>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Estado Global</h2>
        <p className={styles.noteHighlight}>
          🔒 <strong>PROTEÇÃO ATIVA:</strong> Quando isLoading está ativo, TODOS os botões são bloqueados automaticamente.
          <br />Isso previne múltiplas requisições simultâneas e garante que o usuário finalize uma ação antes de iniciar outra.
        </p>
        <p>Use o botão abaixo para alternar o loading manualmente e ver todos os botões sendo bloqueados:</p>
        <button 
          onClick={() => setIsLoading(!isLoading)}
          disabled={isLoading}
        >
          {isLoading ? 'Loading Ativo...' : 'Ativar Loading Manual'}
        </button>
      </div>

      <div className={styles.section}>
        <h2>1. Toasts Simples</h2>
        <p className={styles.note}>⚠️ Toasts simples <strong>NÃO ativam loading</strong> (comportamento esperado)</p>
        <p className={styles.note}>🔒 Mas são <strong>BLOQUEADOS quando isLoading está ativo</strong> (previne múltiplas ações)</p>
        <div className={styles.buttons}>
          <button 
            onClick={() => showSuccess('Operação realizada com sucesso!')}
            disabled={isLoading}
          >
            Success Toast
          </button>
          <button 
            onClick={() => showError('Ocorreu um erro!')}
            disabled={isLoading}
          >
            Error Toast
          </button>
          <button 
            onClick={() => showWarning('Atenção: verifique os dados!')}
            disabled={isLoading}
          >
            Warning Toast
          </button>
          <button 
            onClick={() => showInfo('Informação importante')}
            disabled={isLoading}
          >
            Info Toast
          </button>
          <button 
            onClick={() => showToast('Toast padrão', 'default')}
            disabled={isLoading}
          >
            Default Toast
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>2. Toasts com Duração Customizada</h2>
        <div className={styles.buttons}>
          <button 
            onClick={() => showSuccess('Toast rápido (1s)', { autoClose: 1000 })}
            disabled={isLoading}
          >
            Toast Rápido (1s)
          </button>
          <button 
            onClick={() => showError('Toast longo (10s)', { autoClose: 10000 })}
            disabled={isLoading}
          >
            Toast Longo (10s)
          </button>
          <button 
            onClick={() => showWarning('Toast sem auto-close', { autoClose: false })}
            disabled={isLoading}
          >
            Toast Sem Auto-Close
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>3. Toast com Ação (Botão)</h2>
        <div className={styles.buttons}>
          <button 
            onClick={handleTestToastWithAction}
            disabled={isLoading}
          >
            Warning com Botão "Escolher Plano"
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>4. handleRequest - Requisições Automáticas</h2>
        <p className={styles.noteHighlight}>✨ Estes botões <strong>ATIVAM isLoading automaticamente!</strong> Observe o indicador no topo.</p>
        <p className={styles.noteHighlight}>🔒 <strong>Durante os 2 segundos de requisição, TODOS os botões da página ficam bloqueados!</strong></p>
        <div className={styles.buttons}>
          <button 
            onClick={handleTestHandleRequestSuccess}
            disabled={isLoading}
          >
            Requisição Sucesso (2s + loading)
          </button>
          <button 
            onClick={handleTestHandleRequestError}
            disabled={isLoading}
          >
            Requisição Erro (2s + toast erro)
          </button>
          <button 
            onClick={handleTestHandleRequestException}
            disabled={isLoading}
          >
            Requisição Exceção (2s + toast erro)
          </button>
        </div>
        <p className={styles.note}>
          💡 Durante os 2 segundos de requisição, observe:
          <br />• <strong>Toast de Loading aparece</strong> com AnimatedLogo + mensagem customizada
          <br />• Indicador no topo fica ATIVO (🔄)
          <br />• Spinner aparece
          <br />• <strong>TODOS os botões da página ficam desabilitados</strong> (disabled={isLoading})
          <br />• <strong>Tente clicar em outros botões</strong> - eles estarão bloqueados!
          <br />• <strong>Toast de loading fecha automaticamente</strong> ao finalizar
          <br />• Toast de sucesso/erro aparece em seguida
          <br />• <strong>Todos os botões voltam a ficar habilitados</strong>
        </p>
      </div>

      <div className={styles.section}>
        <h2>5. Múltiplos Toasts</h2>
        <div className={styles.buttons}>
          <button 
            onClick={() => {
              showSuccess('Toast 1');
              setTimeout(() => showInfo('Toast 2'), 200);
              setTimeout(() => showWarning('Toast 3'), 400);
              setTimeout(() => showError('Toast 4'), 600);
            }}
            disabled={isLoading}
          >
            Disparar 4 Toasts Sequenciais
          </button>
        </div>
        <p className={styles.note}>
          💡 Note que os toasts empilham (limite de 3 configurado no ToastContainer)
        </p>
      </div>

      <div className={styles.section}>
        <h2>6. Simular Erros com Status Code Específico</h2>
        <div className={styles.buttons}>
          <button 
            onClick={() => showError({ STATUS: 403, MESSAGE: 'Acesso negado - sem plano ativo' })}
            disabled={isLoading}
          >
            Erro 403 (Sem Plano)
          </button>
          <button 
            onClick={() => showError({ STATUS: 402, MESSAGE: 'Plano expirado - renove seu plano', PORTAL: 'https://example.com' })}
            disabled={isLoading}
          >
            Erro 402 (Plano Expirado)
          </button>
          <button 
            onClick={() => showError({ STATUS: 401, MESSAGE: 'Não autorizado - faça login' })}
            disabled={isLoading}
          >
            Erro 401 (Não Autorizado)
          </button>
          <button 
            onClick={() => showError({ STATUS: 500, MESSAGE: 'Erro interno do servidor' })}
            disabled={isLoading}
          >
            Erro 500 (Servidor)
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>7. Confirmações (Confirmar/Cancelar) - ⭐ NOVO!</h2>
        <p className={styles.noteHighlight}>
          ✨ Toasts interativos que retornam Promise&lt;boolean&gt; - aguardam decisão do usuário
          <br />🔒 <strong>isLoading é ATIVADO automaticamente enquanto toast está ativo</strong> (bloqueia novas solicitações)
          <br />🚫 <strong>TODOS os botões da página ficam bloqueados até você confirmar/cancelar!</strong>
        </p>
        <div className={styles.buttons}>
          <button 
            onClick={handleTestConfirmationSimple}
            disabled={isLoading}
          >
            Confirmação Simples (padrão)
          </button>
          <button 
            onClick={handleTestConfirmationDelete}
            disabled={isLoading}
          >
            Confirmação de Exclusão (⚠️ warning)
          </button>
          <button 
            onClick={handleTestConfirmationCritical}
            disabled={isLoading}
          >
            Confirmação Crítica (🚨 error)
          </button>
          <button 
            onClick={handleTestConfirmationInfo}
            disabled={isLoading}
          >
            Confirmação Info (💾 salvar)
          </button>
          <button 
            onClick={handleTestConfirmationWithLoading}
            disabled={isLoading}
            style={{ 
              background: 'linear-gradient(135deg, #00FFF1 0%, #0CB189 100%)',
              color: '#1A2228',
              fontWeight: 'bold',
            }}
          >
            � Teste Loading Bloqueio Auto
          </button>
        </div>
        <p className={styles.note}>
          💡 Características:
          <br />• <strong>🔒 isLoading ATIVADO automaticamente</strong> ao exibir toast (bloqueia novas requisições)
          <br />• <strong>✅ isLoading DESATIVADO automaticamente</strong> ao confirmar ou cancelar
          <br />• <strong>🧪 TESTE: Abra uma confirmação e tente clicar em QUALQUER outro botão da página</strong> - todos estarão bloqueados!
          <br />• <strong>Aguarda resposta do usuário</strong> (Promise resolve após clicar)
          <br />• Retorna <code>true</code> se confirmado, <code>false</code> se cancelado
          <br />• <strong>Fechar o toast (X) = Cancelar</strong> (retorna false e desativa isLoading)
          <br />• Callbacks opcionais: <code>onConfirm</code> e <code>onCancel</code>
          <br />• Textos customizáveis dos botões
          <br />• Tipos visuais: warning (amarelo), error (vermelho), info (verde)
          <br />• Título opcional para contexto adicional
        </p>
      </div>

      <div className={styles.section}>
        <h2>Console</h2>
        <p className={styles.note}>
          Abra o DevTools (F12) para ver os logs de resultado das requisições mockadas.
        </p>
      </div>
    </div>
  );
};

export default TestErrorContext;
