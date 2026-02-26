
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/iniciar-sesion" />;
    }
    return children;
};