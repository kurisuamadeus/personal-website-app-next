"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageStore {
    lang: string,
    isHydrated: boolean,
    setLang: (lang: string) => void
}


export const useLanguageStore = create<LanguageStore>()(persist((set) => ({
    lang: '',
    isHydrated: false,
    setLang: (lang: string) => set({ lang })
}), {
    name: 'lang'
}));