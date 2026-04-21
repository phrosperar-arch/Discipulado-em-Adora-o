import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Lock, Mail, ArrowRight, User as UserIcon, Eye, EyeOff } from 'lucide-react';

export function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/toc';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    
    setError('');
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    if (isRegister && (!firstName || !lastName)) {
      setError('Preencha seu nome e sobrenome.');
      setLoading(false);
      return;
    }

    if (!cleanEmail || !password) {
      setError('Preencha todos os campos obrigatórios.');
      setLoading(false);
      return;
    }

    if (isRegister) {
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      const { success, error: authError } = await register(cleanEmail, password, fullName);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError(authError || 'Erro ao criar conta. Tente novamente.');
      }
    } else {
      const { success, error: authError } = await login(cleanEmail, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError(authError || 'Falha na autenticação.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf9] dark:bg-zinc-950 flex flex-col items-center justify-center p-6 font-sans transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Glows matching home */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-100/40 blur-3xl pointer-events-none mix-blend-multiply dark:hidden"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-3xl pointer-events-none mix-blend-multiply dark:hidden"></div>

      <div className="w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl shadow-xl shadow-rose-900/5 border border-rose-100 dark:border-zinc-800 p-8 space-y-6 z-10">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-sm font-medium text-gray-500 hover:text-rose-700 dark:text-gray-400 dark:hover:text-rose-400 transition"
        >
          Voltar a capa
        </button>

        <div className="flex flex-col items-center text-center space-y-2 pt-2">
          <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-2">
            <BookOpen className="text-rose-700 dark:text-rose-400" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-[#1f2937] dark:text-gray-100 font-serif">
            {isRegister ? 'Criar sua Conta' : 'Acesso ao E-book'}
          </h1>
          <p className="text-sm text-[#6b7280] dark:text-gray-400">
            {isRegister ? 'Crie seu cadastro no acesso restrito' : 'Faça login para continuar sua leitura exclusíva'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm text-center border border-red-100 dark:border-red-900/30">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {isRegister && (
            <div className="flex gap-3">
              <div className="space-y-1 w-1/2">
                <label className="text-sm font-medium text-[#374151] dark:text-gray-300">Nome</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#f9fafb] dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition text-[#1f2937] dark:text-gray-200"
                    placeholder="Seu nome"
                  />
                </div>
              </div>
              <div className="space-y-1 w-1/2">
                <label className="text-sm font-medium text-[#374151] dark:text-gray-300">Sobrenome</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#f9fafb] dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition text-[#1f2937] dark:text-gray-200"
                    placeholder="Sobrenome"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-medium text-[#374151] dark:text-gray-300">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#f9fafb] dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition text-[#1f2937] dark:text-gray-200"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-[#374151] dark:text-gray-300">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-2.5 bg-[#f9fafb] dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 outline-none transition text-[#1f2937] dark:text-gray-200"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-rose-700 hover:bg-rose-800 disabled:bg-rose-400 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 group mt-2 shadow-lg shadow-rose-700/20"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {isRegister ? 'Cadastrar e Acessar' : 'Entrar e Ler'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-4 border-t border-gray-100 dark:border-zinc-800">
          <button 
            onClick={() => {
              setIsRegister(!isRegister);
              setError('');
            }}
            className="text-sm text-[#6b7280] dark:text-gray-400 hover:text-rose-700 dark:hover:text-rose-400 transition font-medium"
          >
            {isRegister 
              ? 'Já tem uma conta? Faça login aqui' 
              : 'Não tem acesso? Crie sua conta aqui'}
          </button>
        </div>
      </div>
    </div>
  );
}
