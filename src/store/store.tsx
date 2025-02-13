"use client";
import { create } from "zustand";

interface LanguageStore {
    lang: string,
    setLang: (lang: string) => void
}


export const useLanguageStore = create<LanguageStore>((set) => ({
    lang: '',
    setLang: (lang: string) => set({ lang })
}))