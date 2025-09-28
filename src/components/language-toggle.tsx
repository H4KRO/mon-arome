"use client"

import * as React from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('language')

  const toggleLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      aria-label={locale === 'fr' ? t('english') : t('french')}
    >
      {locale === 'fr' ? '🇺🇸 EN' : '🇫🇷 FR'}
    </button>
  )
}
