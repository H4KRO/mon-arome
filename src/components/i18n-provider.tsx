"use client"

import { useEffect } from 'react'
import '@/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // L'initialisation d'i18next se fait dans le fichier i18n/index.ts
    // Ce composant sert juste de wrapper pour s'assurer que i18next est chargé
  }, [])

  return <>{children}</>
}
