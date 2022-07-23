// THEMES RELATED TYPES

type Colors = {
  bgClr: string;
  fancyClr: string;
  boringClr: string;
  bgVariationClr: string;
  bgNestedClr: string;
  selectionClr ?: string;
  captionClr ?: string;

}

type Utils = {
  navSaturation: string;
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