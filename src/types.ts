type Colors = {
  bgClr: string;
  fancyClr: string;
  boringClr: string;
  bgVariationClr: string;
  selectionClr ?: string;
  captionClr ?: string;

}

type Utils = {
  loadingIcon: string
}

export type Theme = {
  colors : Colors;
  utils: Utils;
}
