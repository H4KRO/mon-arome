"use client"

import * as React from "react"
import { useTranslation } from "react-i18next"

export function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const [isClient, setIsClient] = React.useState(false)

  // Avoid hydration error by ensuring the component is rendered on the client side
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleLanguage = () => {
    const newLocale = i18n.language === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(newLocale)
  }

  // Default server-side rendering to avoid hydration error
  if (!isClient) {
    return (
      <button
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        aria-label="Français"
      >
        🇺🇸 EN
      </button>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      aria-label={i18n.language === 'fr' ? t('language.english') : t('language.french')}
    >
      {i18n.language === 'fr' ? '🇺🇸 EN' : '🇫🇷 FR'}
    </button>
  )
}
