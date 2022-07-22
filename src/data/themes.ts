import { Theme } from "../types"

const darkTheme: Theme = {
  colors: {
    bgClr: 'rgb(15, 15, 15)',
    fancyClr: '#7FFFD4',
    boringClr: 'rgb(235, 255, 251)',
    selectionClr: 'rgb(95, 95, 95)',
    bgVariationClr: '#202020',
    bgNestedClr: '#242424',
    captionClr: "#0f0f0fa0",
  },
  utils: {
    navSaturation: '75%'
  }
}

const FuschiaTheme: Theme = {
  colors: {
    bgClr: '#0E0B16',
    fancyClr: '#BF46EF',
    boringClr: '#F8EFFC',
    selectionClr: '#313131',
    bgVariationClr: '#202020',
    bgNestedClr: '#242424',
    captionClr: "#0f0f0fa0",
  },
  utils: {
    navSaturation: '100%'
  }
}

const greenTheme: Theme = {
  colors: {
    bgClr: '#f5faf5',
    fancyClr: '#DDFFC7',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: 'rgb(131, 241, 208)',
    bgNestedClr: '#fff',
    bgVariationClr: '#f8fff8',
    captionClr : "#0f0f0fa0"

  },
  utils: {
    navSaturation: '100%'
  }
}

const lightTheme: Theme = {
  colors: {
    bgClr: '#f0f2f5',
    fancyClr: '#005ce6',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: 'rgb(131, 241, 208)',
    bgVariationClr: '#f8f8f8',
    bgNestedClr: '#fff',
    captionClr: "#f0f2f598",

  },
  utils: {
    navSaturation: '140%'
  }
}

const Themes = {
  darkTheme,
  lightTheme,
  greenTheme,
  FuschiaTheme

}

export default Themes