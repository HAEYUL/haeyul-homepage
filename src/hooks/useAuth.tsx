import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { supabase } from '@/lib/supabase';

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
}

interface AuthContextType {
  user: Customer | null;
  loading: boolean;
  signup: (name: string, phone: string, email: string) => Promise<{ success: boolean; error?: string }>;
  login: (name: string, phone: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const SESSION_KEY = 'haeyul_customer';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Customer;
        setUser(parsed);
      }
    } catch {
      // corrupted session, clear it
      localStorage.removeItem(SESSION_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (name: string, phone: string, email: string) => {
    try {
      // Check if phone already exists
      const { data: existing } = await supabase
        .from('customers')
        .select('id')
        .eq('phone', phone)
        .maybeSingle();

      if (existing) {
        return { success: false, error: '이미 등록된 전화번호입니다.' };
      }

      const { data: newUser, error } = await supabase
        .from('customers')
        .insert({ name, phone, email })
        .select('id, name, phone, email')
        .single();

      if (error || !newUser) {
        return { success: false, error: '회원가입에 실패했습니다. 다시 시도해주세요.' };
      }

      const customer: Customer = {
        id: newUser.id,
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email,
      };

      localStorage.setItem(SESSION_KEY, JSON.stringify(customer));
      setUser(customer);
      return { success: true };
    } catch {
      return { success: false, error: '오류가 발생했습니다. 다시 시도해주세요.' };
    }
  }, []);

  const login = useCallback(async (name: string, phone: string) => {
    try {
      const { data: found, error } = await supabase
        .from('customers')
        .select('id, name, phone, email')
        .eq('name', name)
        .eq('phone', phone)
        .maybeSingle();

      if (error || !found) {
        return { success: false, error: '이름 또는 전화번호가 일치하지 않습니다.' };
      }

      const customer: Customer = {
        id: found.id,
        name: found.name,
        phone: found.phone,
        email: found.email,
      };

      localStorage.setItem(SESSION_KEY, JSON.stringify(customer));
      setUser(customer);
      return { success: true };
    } catch {
      return { success: false, error: '오류가 발생했습니다. 다시 시도해주세요.' };
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}