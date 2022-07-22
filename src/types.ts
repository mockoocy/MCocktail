type Colors = {
  bgClr: string;
  fancyClr: string;
  boringClr: string;
  bgVariationClr: string;
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
export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};