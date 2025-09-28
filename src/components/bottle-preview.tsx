"use client"

import React from "react"
import { MixingResults } from "@/lib/mixing-calculator"
import { useTranslation } from "react-i18next"

interface BottlePreviewProps {
  results: MixingResults
  className?: string
}

export default function BottlePreview({ results, className = "" }: BottlePreviewProps) {
  const { t } = useTranslation()

  const { baseNeutral, baseNicotine, aroma, total } = results

  // Calcul des pourcentages pour l'affichage
  const baseNeutralPercent = total > 0 ? (baseNeutral / total) * 100 : 0
  const baseNicotinePercent = total > 0 ? (baseNicotine / total) * 100 : 0
  const aromaPercent = total > 0 ? (aroma / total) * 100 : 0

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold">{t('bottle.preview')}</h3>
      
      {/* Flacon visuel */}
      <div className="relative mx-auto w-32 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg border-4 border-gray-300 dark:border-gray-600 overflow-hidden">
        {/* Base neutre (fond) */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-green-400 dark:bg-green-600 transition-all duration-500"
          style={{ height: `${baseNeutralPercent}%` }}
        />
        
        {/* Base nicotine (milieu) */}
        <div 
          className="absolute left-0 right-0 bg-orange-400 dark:bg-orange-600 transition-all duration-500"
          style={{ 
            height: `${baseNicotinePercent}%`,
            bottom: `${baseNeutralPercent}%`
          }}
        />
        
        {/* Arôme (haut) */}
        <div 
          className="absolute left-0 right-0 bg-purple-400 dark:bg-purple-600 transition-all duration-500"
          style={{ 
            height: `${aromaPercent}%`,
            bottom: `${baseNeutralPercent + baseNicotinePercent}%`
          }}
        />
      </div>

      {/* Légende des couleurs */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-purple-400 dark:bg-purple-600 rounded"></div>
          <span>{t('results.aroma')}: {aroma.toFixed(1)} {t('bottle.ml')} ({aromaPercent.toFixed(1)}%)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-orange-400 dark:bg-orange-600 rounded"></div>
          <span>{t('results.nicotine')}: {baseNicotine.toFixed(1)} {t('bottle.ml')} ({baseNicotinePercent.toFixed(1)}%)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-400 dark:bg-green-600 rounded"></div>
          <span>{t('results.base')}: {baseNeutral.toFixed(1)} {t('bottle.ml')} ({baseNeutralPercent.toFixed(1)}%)</span>
        </div>
        <div className="flex items-center space-x-2 font-semibold">
          <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded border"></div>
          <span>{t('results.total')}: {total.toFixed(1)} {t('bottle.ml')}</span>
        </div>
      </div>
    </div>
  )
}
