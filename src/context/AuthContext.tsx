import { createContext, useContext, useState } from 'react';
import { User, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

interface AuthContextType {
  user: User | null;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const logout = async () => {
    try {
      const result = await signOut(auth);
      console.log(result);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <AuthContext.Provider
      value={ {
        user,
        loginWithEmail,
        logout,
      } }
    >
      { children }
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, useAuth, AuthProvider };
