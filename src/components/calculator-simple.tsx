"use client"

import React, { useState, useEffect } from "react"
import { MixingInputs, MixingResults, calculateMixing, validateInputs } from "@/lib/mixing-calculator"

export default function Calculator() {
  const [inputs, setInputs] = useState<MixingInputs>({
    finalVolume: 30,
    nicotineStrength: 6,
    aromaPercentage: 15,
    baseNicotine: 18
  })

  const [results, setResults] = useState<MixingResults>({
    baseNeutral: 0,
    baseNicotine: 0,
    aroma: 0,
    total: 0
  })

  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    const validationErrors = validateInputs(inputs)
    setErrors(validationErrors)

    if (validationErrors.length === 0) {
      const calculatedResults = calculateMixing(inputs)
      setResults(calculatedResults)
    }
  }, [inputs])

  const handleInputChange = (field: keyof MixingInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const resetInputs = () => {
    setInputs({
      finalVolume: 30,
      nicotineStrength: 6,
      aromaPercentage: 15,
      baseNicotine: 18
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Calculateur de Mélange</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="space-y-4">
              <div>
                <label htmlFor="finalVolume" className="block text-sm font-medium mb-2">
                  Volume final (ml)
                </label>
                <input
                  id="finalVolume"
                  type="number"
                  min="1"
                  max="500"
                  step="0.5"
                  value={inputs.finalVolume}
                  onChange={(e) => handleInputChange('finalVolume', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="nicotineStrength" className="block text-sm font-medium mb-2">
                  Taux de nicotine souhaité (mg/ml)
                </label>
                <input
                  id="nicotineStrength"
                  type="number"
                  min="0"
                  max="20"
                  step="0.1"
                  value={inputs.nicotineStrength}
                  onChange={(e) => handleInputChange('nicotineStrength', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="aromaPercentage" className="block text-sm font-medium mb-2">
                  Pourcentage d'arôme concentré (%)
                </label>
                <input
                  id="aromaPercentage"
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={inputs.aromaPercentage}
                  onChange={(e) => handleInputChange('aromaPercentage', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="baseNicotine" className="block text-sm font-medium mb-2">
                  Taux de nicotine de la base (mg/ml)
                </label>
                <input
                  id="baseNicotine"
                  type="number"
                  min="1"
                  max="72"
                  step="1"
                  value={inputs.baseNicotine}
                  onChange={(e) => handleInputChange('baseNicotine', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={resetInputs}
                  className="flex-1 px-4 py-2 border border-input rounded-md bg-background hover:bg-accent transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>

          {errors.length > 0 && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4">
              <h4 className="font-medium text-destructive mb-2">Erreurs :</h4>
              <ul className="text-sm text-destructive space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Composition du mélange</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Arôme concentré:</span>
                <span className="font-mono">{results.aroma.toFixed(1)} ml</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Base nicotine:</span>
                <span className="font-mono">{results.baseNicotine.toFixed(1)} ml</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Base neutre:</span>
                <span className="font-mono">{results.baseNeutral.toFixed(1)} ml</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between items-center font-semibold">
                <span>Total:</span>
                <span className="font-mono">{results.total.toFixed(1)} ml</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
