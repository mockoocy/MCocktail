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

const fuschiaTheme: Theme = {
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

const monoTheme: Theme = {
  colors: {
    bgClr: '#0f0f0f',
    fancyClr: '#f8fff8',
    boringClr: '#999',
    selectionClr: 'rgb(131, 241, 208)',
    bgNestedClr: '#242424',
    bgVariationClr: '#202020',
    captionClr : "#0f0f0fa0"

  },
  utils: {
    navSaturation: '0%'
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

const peachTheme: Theme = {
  colors: {
    bgClr: '#c2cad0',
    fancyClr: '#e7717d',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: 'rgb(131, 241, 208)',
    bgVariationClr: '#CBD2D7',
    bgNestedClr: '#D4D9DE',
    captionClr: "#f0f2f598",

  },
  utils: {
    navSaturation: '140%'
  }
}

const vividTheme: Theme = {
  colors: {
    bgClr: '#0A0C10',
    fancyClr: '#ffe885',
    boringClr: '#EF7B45',
    selectionClr: '#ce81a8',
    bgVariationClr: '#121236',
    bgNestedClr: '#59F1FF0f ',
    captionClr: "#C270A8b0",

  },
  utils: {
    navSaturation: '250%'
  }
}

const Themes = {
  darkTheme,
  lightTheme,
  greenTheme,
  fuschiaTheme,
  monoTheme,
  peachTheme,
  vividTheme

}

export default Themes