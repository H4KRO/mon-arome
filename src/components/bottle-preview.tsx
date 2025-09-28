"use client"

import React, { useState, useEffect } from "react"
import { MixingResults } from "@/lib/mixing-calculator"
import { useTranslation } from "react-i18next"

interface BottlePreviewProps {
  results: MixingResults
  className?: string
}

export default function BottlePreview({ results, className = "" }: BottlePreviewProps) {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  // Avoid hydration error
  useEffect(() => {
    setIsClient(true)
  }, [])

  const { baseNeutral, baseNicotine, aroma, total } = results

  // Calculate percentages for display
  const baseNeutralPercent = total > 0 ? (baseNeutral / total) * 100 : 0
  const baseNicotinePercent = total > 0 ? (baseNicotine / total) * 100 : 0
  const aromaPercent = total > 0 ? (aroma / total) * 100 : 0

  return (
    <div className={`bg-card p-6 rounded-lg border shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold mb-4">
        {isClient ? t('bottle.preview') : 'Prévisualisation du flacon'}
      </h3>
      
      <div className="space-y-4">
        {/* Visual bottle */}
        <div className="relative mx-auto w-32 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg border-4 border-gray-300 dark:border-gray-600 overflow-hidden">
          {/* Neutral base (background) */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-green-400 dark:bg-green-600 transition-all duration-500"
            style={{ height: `${baseNeutralPercent}%` }}
          />
          
          {/* Nicotine base (middle) */}
          <div 
            className="absolute left-0 right-0 bg-orange-400 dark:bg-orange-600 transition-all duration-500"
            style={{ 
              height: `${baseNicotinePercent}%`,
              bottom: `${baseNeutralPercent}%`
            }}
          />
          
          {/* Aroma (top) */}
          <div 
            className="absolute left-0 right-0 bg-purple-400 dark:bg-purple-600 transition-all duration-500"
            style={{ 
              height: `${aromaPercent}%`,
              bottom: `${baseNeutralPercent + baseNicotinePercent}%`
            }}
          />
        </div>

        {/* Color legend */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-400 dark:bg-purple-600 rounded"></div>
            <span>{isClient ? t('results.aroma') : 'Arôme'}: {aroma.toFixed(1)} {isClient ? t('bottle.ml') : 'ml'} ({aromaPercent.toFixed(1)}%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-400 dark:bg-orange-600 rounded"></div>
            <span>{isClient ? t('results.nicotine') : 'Nicotine'}: {baseNicotine.toFixed(1)} {isClient ? t('bottle.ml') : 'ml'} ({baseNicotinePercent.toFixed(1)}%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-400 dark:bg-green-600 rounded"></div>
            <span>{isClient ? t('results.base') : 'Base'}: {baseNeutral.toFixed(1)} {isClient ? t('bottle.ml') : 'ml'} ({baseNeutralPercent.toFixed(1)}%)</span>
          </div>
          <div className="flex items-center space-x-2 font-semibold">
            <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded border"></div>
            <span>{isClient ? t('results.total') : 'Total'}: {total.toFixed(1)} {isClient ? t('bottle.ml') : 'ml'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
