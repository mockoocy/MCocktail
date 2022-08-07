// THEMES RELATED TYPES

type Colors = {
  bgClr: string;
  fancyClr: string;
  boringClr: string;
  bgVariationClr: string;
  bgNestedClr: string;
  optionClr : string;
  selectionClr : string;
  captionClr : string;
  resultsClr : string;
}

type Utils = {
  navSaturation: string;
  gradientButtonClrs: string;
  hueRotateDeg?: string;
}

export type Theme = {
  colors : Colors;
  utils: Utils;
}

// Used by  UseApiGet hook
export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

// Represents filter option in explore (such as alcoholic, non-alcoholic, etc.)
export type Option = {
  value: string;
  clicked: boolean;
  url: string;
  id: number
}
// Used in single drink page

export interface IngredientsWithMeasures  {
  [key: string]: string;
}

export type Drink = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  ingredientsWithMeasures: IngredientsWithMeasures;
  // For a shortcut I have assigned some other attributes to the drink state. 
  // I won't throw it away anyway, because of the suggestion I will get tahnks to this type 
}

export type FavoriteDrink = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
}

export type Ingredient = {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string; 
  strABV: string;
}