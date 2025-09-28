"use client"

import { useTranslation } from "react-i18next"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">
              {t('app.title')}
            </h1>
            <p className="text-sm text-muted-foreground hidden sm:block">
              {t('app.description')}
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
