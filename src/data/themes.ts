import { Theme } from "../types"

const darkTheme: Theme = {
  colors: {
    bgClr: 'rgb(15, 15, 15)',
    optionClr: 'rgb(15, 15, 15)',
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
    optionClr: '#0E0B16',
    fancyClr: '#BF46EF',
    boringClr: '#F8EFFC',
    selectionClr: '#313131',
    bgVariationClr: '#202020',
    bgNestedClr: '#242424',
    captionClr: "#0f0f0fa0",
  },
  utils: {
    navSaturation: '100%',
    hueRotateDeg: '150deg'
  }
}

const monoTheme: Theme = {
  colors: {
    bgClr: '#0f0f0f',
    optionClr: '#0f0f0f',
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
    optionClr: '#f5faf5',
    fancyClr: '#DDFFC7',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: '#E9C7FF',
    bgNestedClr: '#fff',
    bgVariationClr: '#f8fff8',
    captionClr : "#0f0f0fa0"

  },
  utils: {
    navSaturation: '100%',
    hueRotateDeg: '300deg'
  }
}

const lightTheme: Theme = {
  colors: {
    bgClr: '#f0f2f5',
    optionClr: '#f0f2f5',
    fancyClr: '#005ce6',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: '#E68A00',
    bgVariationClr: '#f8f8f8',
    bgNestedClr: '#fff',
    captionClr: "#f0f2f598",

  },
  utils: {
    navSaturation: '140%',
    hueRotateDeg: '45deg'

  }
}

const peachTheme: Theme = {
  colors: {
    bgClr: 'linear-gradient(45deg,#ffc8c8,#ff5858,#ffc8c8)',
    optionClr: '#c2cad0'  ,
    fancyClr: '#D12335',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: '#23D1C0  ',
    bgVariationClr: '#E87A72',
    bgNestedClr: '#E88E72',
    captionClr: "#f0f2f598",

  },
  utils: {
    navSaturation: '140%',
    hueRotateDeg: '200deg'
  }
}

const vividTheme: Theme = {
  colors: {
    bgClr: 'linear-gradient(45deg,#ffd91b, #1b4395, #e663e3)',
    optionClr: '#0A0C10',
    fancyClr: '#ffe885',
    boringClr: '#EF7B45',
    selectionClr: '#ce81a8',
    bgVariationClr: '#080b10',
    bgNestedClr: '#272729 ',
    captionClr: "#C270A8b0",

  },
  utils: {
    navSaturation: '250%',
    hueRotateDeg: '60deg'
  }
}

const happyTheme: Theme = {
  colors: {
    bgClr: 'linear-gradient( 90deg, rgba(255,187,187,1) -8.8%, rgba(255,220,177,1) 12.4%, rgba(255,249,177,1) 35.6%, rgba(220,255,177,1) 59.6%, rgba(177,218,255,1) 84%, rgba(222,177,255,1) 107.9% )',
    optionClr: '#0A0C10',
    fancyClr: '#FF5A5C',
    boringClr: '#E1FF59',
    selectionClr: '#5CFFFC  ',
    bgVariationClr: '#272729',
    bgNestedClr: '#36363A ',
    captionClr: "#0f0f0fa0",

  },
  utils: {
    navSaturation: '300%',
    hueRotateDeg: '140deg'
  }
}

//background-image: 
const Themes = {
  darkTheme,
  lightTheme,
  greenTheme,
  fuschiaTheme,
  monoTheme,
  peachTheme,
  vividTheme,
  happyTheme

}

export default Themes