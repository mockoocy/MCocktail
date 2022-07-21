import { Theme } from "../types"

const darkTheme: Theme = {
  colors: {
    bgClr: 'rgb(15, 15, 15)',
    fancyClr: '#7FFFD4',
    boringClr: 'rgb(235, 255, 251)',
    selectionClr: 'rgb(95, 95, 95)',
    bgVariationClr: '#1f1f1f',
    captionClr: "#0f0f0fa0",
  },
  utils: {
    loadingIcon: './assets/WhitePac.svg',
    navSaturation: '75%'
  }
}

const greenTheme: Theme = {
  colors: {
    bgClr: '#f5faf5',
    fancyClr: '#DDFFC7',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: 'rgb(131, 241, 208)',
    bgVariationClr: '#fff',
    captionClr : "#0f0f0fa0"

  },
  utils: {
    loadingIcon: './assets/BlackPac.svg',
    navSaturation: '100%'
  }
}

const lightTheme: Theme = {
  colors: {
    bgClr: '#f0f2f5',
    fancyClr: '#005ce6',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: 'rgb(131, 241, 208)',
    bgVariationClr: '#fff',
    captionClr: "#f0f2f598",

  },
  utils: {
    loadingIcon: './assets/BlackPac.svg',
    navSaturation: '140%'
  }
}

const Themes = {
  darkTheme,
  lightTheme,
  greenTheme

}

export default Themes