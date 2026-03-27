/**
 * Extrai o caminho após /acess/
 * @param fullPath - O pathname completo (ex: '/acess/login')
 * @returns A parte após /acess/ (ex: 'login')
 */
export function getAcessPath(fullPath: string): string {
  return fullPath.replace(/^\/acess\/?/, '') || 'home';
}

/**
 * Formata o caminho para exibição no título
 */
export function formatAcessTitle(path: string): string {
  const pathMap: Record<string, string> = {
    'login': 'Login',
    'register': 'Cadastro',
    '': 'Acesso',
  };
  
  return pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
}