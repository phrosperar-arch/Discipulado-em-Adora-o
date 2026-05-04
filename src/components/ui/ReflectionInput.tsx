import React, { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Loader2, Check } from 'lucide-react';

interface ReflectionInputProps {
  id: string;
  placeholder?: string;
  question?: string;
}

export function ReflectionInput({ id, placeholder = "Escreva sua reflexão aqui...", question }: ReflectionInputProps) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchReflection(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, [id]);

  const fetchReflection = async (uid: string) => {
    try {
      const docRef = doc(db, "users", uid, "reflections", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setValue(docSnap.data()?.content || "");
      }
    } catch (error) {
      console.error("Error fetching reflection", error);
    }
  };

  const saveReflection = useCallback(async (text: string) => {
    if (!userId) return;
    setStatus("saving");
    try {
      const docRef = doc(db, "users", userId, "reflections", id);
      const dataToSave: any = { content: text, updatedAt: new Date().toISOString() };
      if (question) {
        dataToSave.question = question;
      }
      await setDoc(docRef, dataToSave, { merge: true });
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    } catch(err) {
      console.error("Error saving reflection", err);
      setStatus("idle");
    }
  }, [userId, id, question]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Don't save on initial empty state or if we just fetched it and haven't touched it.
      // Easiest is to only save if there was an actual user change 
      // but value dependency changes when fetch resolves as well. 
      // Handled in onChange instead.
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [value, saveReflection]);

  const actSave = useCallback((text: string) => {
     let t;
     if ((window as any)[`timeout_${id}`]) {
        clearTimeout((window as any)[`timeout_${id}`]);
     }
     (window as any)[`timeout_${id}`] = setTimeout(() => {
        saveReflection(text);
     }, 1000);
  }, [id, saveReflection]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    actSave(e.target.value);
  };

  return (
    <div className="relative w-full">
      <textarea 
        className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" 
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={!userId}
      ></textarea>
      
      {/* Show Saving Indicators */}
      {status === 'saving' && (
        <div className="absolute right-3 bottom-3 text-rose-500 flex items-center justify-center bg-white/80 dark:bg-zinc-900/80 rounded-full p-1 shadow-sm border border-rose-100 dark:border-zinc-800">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      )}
      {status === 'saved' && (
        <div className="absolute right-3 bottom-3 text-emerald-500 flex items-center justify-center bg-white/80 dark:bg-zinc-900/80 rounded-full p-1 shadow-sm border border-emerald-100 dark:border-zinc-800">
          <Check className="w-4 h-4" />
        </div>
      )}
      {!userId && (
        <div className="absolute right-3 bottom-3 text-sm text-gray-400 dark:text-gray-500 bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded">
          Faça login para salvar
        </div>
      )}
    </div>
  );
}
