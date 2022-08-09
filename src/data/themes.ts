import { Theme } from "../types"

const darkTheme: Theme = {
  name: "Lime Dark",
  colors: {
    bgClr: 'rgb(15, 15, 15)',
    optionClr: 'rgb(15, 15, 15)',
    fancyClr: '#7FFFD4',
    boringClr: '#D1FFF0',
    selectionClr: 'rgb(95, 95, 95)',
    bgVariationClr: '#202020',
    bgNestedClr: '#242424',
    captionClr: "#0f0f0fa0",
    resultsClr: "linear-gradient(45deg,#0f0f0f, #272729,#363640)"
  },
  utils: {
    navSaturation: '75%',
    gradientButtonClrs: 'linear-gradient(to right, #0f0f0f 0%, #7fffd4 51%, #0f0f0f 100%)'
  }
}

const fuschiaTheme: Theme = {
  name: "Fuschia Dark",
  colors: {
    bgClr: '#0E0B16',
    optionClr: '#0E0B16',
    fancyClr: '#BF46EF',
    boringClr: '#F8EFFC',
    selectionClr: '#313131',
    bgVariationClr: '#202020',
    bgNestedClr: '#242424',
    captionClr: "#0f0f0fa0",
    resultsClr: "linear-gradient(45deg,#0f0f0f, #272729,#363640)"
  },
  utils: {
    navSaturation: '100%',
    hueRotateDeg: '150deg',
    gradientButtonClrs: 'linear-gradient(to right, #0E0B16 0%, #BF46EF 51%, #0E0B16 100%)'

  }
}

const monoTheme: Theme = {
  name: "Mono Dark",
  colors: {
    bgClr: '#0f0f0f',
    optionClr: '#0f0f0f',
    fancyClr: '#f8fff8',
    boringClr: '#999',
    selectionClr: 'rgb(131, 241, 208)',
    bgNestedClr: '#242424',
    bgVariationClr: '#202020',
    captionClr : "#0f0f0fa0",
    resultsClr: "linear-gradient(45deg,#0f0f0f, #272729,#363640)"

  },
  utils: {
    navSaturation: '0%',
    gradientButtonClrs: '#f8fff8'

  }
}

const greenTheme: Theme = {
  name: "Green Light",
  colors: {
    bgClr: '#f5faf5',
    optionClr: '#f5faf5',
    fancyClr: '#DDFFC7',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: '#E9C7FF',
    bgNestedClr: '#fff',
    bgVariationClr: '#f8fff8',
    captionClr : "#0f0f0fa0",
    resultsClr: "#f8fff8"

  },
  utils: {
    navSaturation: '100%',
    hueRotateDeg: '300deg',
    gradientButtonClrs: 'linear-gradient(to right, #f5faf5 0%, #DDFFC7 51%, #f5faf5 )'

  }
}

const lightTheme: Theme = {
  name: "Blue Light",
  colors: {
    bgClr: '#f0f2f5',
    optionClr: '#f0f2f5',
    fancyClr: '#005ce6',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: '#E68A00',
    bgVariationClr: '#f8f8f8',
    bgNestedClr: '#fff',
    captionClr: "#f0f2f598",
    resultsClr: "#f8f8f8"

  },
  utils: {
    navSaturation: '140%',
    hueRotateDeg: '45deg',
    gradientButtonClrs: 'linear-gradient(to right, #f0f2f5 0%, #005ce6 51%, #f0f2f5)'


  }
}

const peachTheme: Theme = {
  name: "Peach",
  colors: {
    bgClr: 'linear-gradient(45deg,#ffc8c8,#ff5858,#ffc8c8)',
    optionClr: '#c2cad0'  ,
    fancyClr: '#D12335',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: '#23D1C0  ',
    bgVariationClr: 'transparent',
    bgNestedClr: 'transparent',
    captionClr: "#f0f2f5b0",
    resultsClr: "#E87A72"

  },
  utils: {
    navSaturation: '140%',
    hueRotateDeg: '200deg',
    gradientButtonClrs: 'linear-gradient(to right, #c2cad0 0%, #D12335 51%, #c2cad0)'

  }
}

const vividTheme: Theme = {
  name: "Vivid",
  colors: {
    bgClr: 'linear-gradient(45deg,#00DBDE, #FC00FF)',
    optionClr: '#0A0C10',
    fancyClr: '#ffe885',
    boringClr: '#EF7B45',
    selectionClr: '#ce81a8',
    bgVariationClr: '#272729',
    bgNestedClr: '#363640 ',
    captionClr: "#C270A8b0",
    resultsClr: "linear-gradient(45deg,#0f0f0f, #272729,#363640)"

  },
  utils: {
    navSaturation: '250%',
    hueRotateDeg: '60deg',
    gradientButtonClrs: 'linear-gradient(to right, #0A0C10 0%, #00DBDE 33%, #FC00FF 66%, #0A0C10)'

  }
}

const happyTheme: Theme = {
  name: "Happy 🏳️‍🌈",
  colors: {
    bgClr: 'linear-gradient( 90deg, rgba(255,187,187,1) -8.8%, rgba(255,220,177,1) 12.4%, rgba(255,249,177,1) 35.6%, rgba(220,255,177,1) 59.6%, rgba(177,218,255,1) 84%, rgba(222,177,255,1) 107.9% )',
    optionClr: '#0A0C10',
    fancyClr: '#FF5A5C',
    boringClr: '#00BD71',
    selectionClr: '#5CFFFC  ',
    bgVariationClr: 'transparent', //E7F9A9 if i decide to not use transparent 
    bgNestedClr: 'transparent ', // F6FAAA if i decide to not use transparent 
    captionClr: "#0f0f0fa0",
    resultsClr: "#d3fbe5"

  },
  utils: {
    navSaturation: '300%',
    hueRotateDeg: '140deg',
    gradientButtonClrs: 'linear-gradient( to right, rgba(255,187,187,1) 0%, rgba(255,220,177,1) 20%, rgba(255,249,177,1) 40%, rgba(220,255,177,1) 60%, rgba(177,218,255,1) 80%, rgba(222,177,255,1) 100% )'

  }
}


const sunsetTheme: Theme = {
  name: "Sunset",
  colors: {
    bgClr: 'linear-gradient(45deg, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
    optionClr: '#FF9D78',
    fancyClr: '#ff7981',
    boringClr: '#FFFA78',
    selectionClr: '#49A3FD  ',
    bgVariationClr: 'transparent',
    bgNestedClr: 'transparent ',
    captionClr: "#f0f2f598",
    resultsClr: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"

  },
  utils: {
    navSaturation: '110%',
    hueRotateDeg: '110deg',
    gradientButtonClrs:  'linear-gradient(to right, #fcc5e4 0%, #fda34b 16.6%, #ff7882 33.3%, #c8699e 50%, #7046aa 66.6%, #0c1db8 83.3%, #020f75 100%)',

  }
}


const Themes = {
  darkTheme,
  lightTheme,
  greenTheme,
  fuschiaTheme,
  monoTheme,
  peachTheme,
  vividTheme,
  happyTheme,
  sunsetTheme

}

export default Themes