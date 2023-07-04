import { useContext } from 'react';
import { AuthContext } from 'Contexts/AuthContext';

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
};

export default useAuthContext;
