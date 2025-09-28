"use client"

import { useTranslation } from "react-i18next"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { useState, useEffect } from "react"

export default function Header() {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  // Avoid hydration error by ensuring the component is rendered on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">
              {isClient ? t('app.title') : 'Mon Arôme'}
            </h1>
            <p className="text-sm text-muted-foreground hidden sm:block">
              {isClient ? t('app.description') : 'Calculateur de mélange pour e-liquides'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
