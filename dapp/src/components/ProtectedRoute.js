import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login page if not logged in
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;