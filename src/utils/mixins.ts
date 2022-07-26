
export const textOutline = (size: number, blur:number, color: string) => `
  text-shadow: 
  ${size}rem ${size}rem ${blur}rem ${color},
  ${-size}rem ${size}rem ${blur}rem ${color},
  ${size}rem ${-size}rem ${blur}rem ${color},
  ${-size}rem ${-size}rem ${blur}rem ${color}
`