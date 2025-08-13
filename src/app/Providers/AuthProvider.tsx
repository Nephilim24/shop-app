import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
    isAuth: boolean | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    const navigate = useNavigate();

    const checkToken = () => {
        const token = Cookies.get('token');
        if (token) {
            try {
                const decoded: { exp: number } = jwtDecode(token);
                const istokenValid = decoded.exp * 1000 > Date.now();
                if (!istokenValid) {
                    logout();
                } else {
                    setIsAuth(true);
                }
            } catch (error) {
                logout();
            }
        }
    }

    useEffect(() => {
        checkToken();
        const interval = setInterval(checkToken, 1000);
        return () => clearInterval(interval);
    }, []);

    const login = (token: string) => {
        Cookies.set('token', token, { expires: 7 });
        setIsAuth(true);
    }

    const logout = () => {
        Cookies.remove('token');
        navigate('/login/auth');
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}

