import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
    user: any | null; // do i need to replace 'any' with a specific User type?
    token: string | null;
    login: (// user: any, 
        token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any | null>(null); // same here as above ^^
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken
            // && storedUser
        ) {
            setToken(storedToken);
            // setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (
        // user: any, 
        token: string) => {
        // setUser(user);
        setToken(token);
        localStorage.setItem('token', token);
        // localStorage.setItem('user', JSON.stringify(user));
        navigate('/feed'); // redirect
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/signin'); // redirect
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};