import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Lock, QrCode, CheckCircle2, RotateCcw, LogOut } from 'lucide-react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, isLoaded, isApproved, isAdmin, logout, refreshAccess, debugError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf9] dark:bg-zinc-950">
        <div className="w-8 h-8 border-4 border-rose-200 border-t-rose-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isApproved && !isAdmin) {
    // Insira sua Chave PIX Estática VERDADEIRA aqui:
    const pixCode = "00020101021126540014br.gov.bcb.pix0114+55219983325410214Ebook Adoracao520400005303986540519.905802BR5916MARCIO L G NUNES6006MARICA62070503***630466ED";

    const handleCopyPix = () => {
      navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    };

    const handleRefreshStatus = async () => {
      setRefreshing(true);
      await refreshAccess(); // Faz verificação silenciosa e direta ao banco de dados no momento exato do clique
      setRefreshing(false);
    };

    const handleLogout = async () => {
      await logout();
      navigate('/');
    };

    return (
      <div className="min-h-screen bg-[#fdfaf9] dark:bg-zinc-950 flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          
          <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-3">
            Acesso Pendente
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-[0.95rem] leading-relaxed">
            Sua conta foi criada com sucesso e está aguardando liberação. Para ter acesso integral a todo o conteúdo do E-book, realize o pagamento único de <strong className="text-rose-700 dark:text-rose-400">R$ 19,90</strong> via PIX utilizando o código abaixo.
          </p>

          <div className="bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 mb-6 relative">
            <div className="flex items-center gap-2 mb-2">
              <QrCode size={16} className="text-gray-400" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">PIX Copia e Cola</span>
            </div>
            <p className="text-sm font-mono text-gray-800 dark:text-zinc-300 break-all select-all text-left bg-white dark:bg-zinc-800 p-3 rounded-lg border border-gray-200 dark:border-zinc-700">
              {pixCode}
            </p>
            
            <button 
              onClick={handleCopyPix}
              className={`w-full mt-4 py-3 px-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                copied 
                  ? 'bg-green-600 text-white' 
                  : 'bg-rose-700 hover:bg-rose-800 text-white shadow-md'
              }`}
            >
              {copied ? <><CheckCircle2 size={18} /> Código Copiado!</> : 'Copiar Código PIX'}
            </button>
          </div>

          {debugError && (
            <div className="bg-red-50 text-red-500 text-xs p-3 rounded mb-6 text-left">
              <strong>Info:</strong> {debugError}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleRefreshStatus}
              disabled={refreshing}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-[#1f2937] dark:text-gray-200 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
            >
              <RotateCcw size={16} className={refreshing ? "animate-spin" : ""} />
              {refreshing ? 'Atualizando...' : 'Já paguei, Atualizar Status'}
            </button>
            
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 py-3 px-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition text-sm font-medium"
            >
              <LogOut size={16} />
              Sair da conta
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
