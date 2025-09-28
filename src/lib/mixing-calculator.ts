export interface MixingInputs {
  finalVolume: number; // Volume final souhaité en ml
  nicotineStrength: number; // Taux de nicotine souhaité en mg/ml
  aromaPercentage: number; // Pourcentage d'arôme concentré
  baseNicotine: number; // Taux de nicotine de la base (généralement 18mg/ml)
}

export interface MixingResults {
  baseNeutral: number; // Volume de base neutre en ml
  baseNicotine: number; // Volume de base nicotine en ml
  aroma: number; // Volume d'arôme concentré en ml
  total: number; // Volume total en ml
}

export function calculateMixing(inputs: MixingInputs): MixingResults {
  const { finalVolume, nicotineStrength, aromaPercentage, baseNicotine } = inputs;

  // Calcul du volume d'arôme
  const aroma = (finalVolume * aromaPercentage) / 100;

  // Calcul du volume de base nicotine nécessaire
  const baseNicotineVolume = (finalVolume * nicotineStrength) / baseNicotine;

  // Calcul du volume de base neutre
  const baseNeutral = finalVolume - aroma - baseNicotineVolume;

  return {
    baseNeutral: Math.max(0, baseNeutral),
    baseNicotine: Math.max(0, baseNicotineVolume),
    aroma: Math.max(0, aroma),
    total: finalVolume
  };
}

export function validateInputs(inputs: MixingInputs): string[] {
  const errors: string[] = [];

  if (inputs.finalVolume <= 0) {
    errors.push("Le volume final doit être supérieur à 0");
  }

  if (inputs.nicotineStrength < 0) {
    errors.push("Le taux de nicotine ne peut pas être négatif");
  }

  if (inputs.aromaPercentage < 0 || inputs.aromaPercentage > 100) {
    errors.push("Le pourcentage d'arôme doit être entre 0 et 100%");
  }

  if (inputs.baseNicotine <= 0) {
    errors.push("Le taux de nicotine de la base doit être supérieur à 0");
  }

  // Vérification que le mélange est possible
  const results = calculateMixing(inputs);
  if (results.baseNeutral < 0) {
    errors.push("Impossible de créer ce mélange avec les paramètres donnés");
  }

  return errors;
}
