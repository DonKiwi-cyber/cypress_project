import {Width, error, Simpson} from './common/common'

export function simpson(x0: number, x1: number, seg: number, func: string): number{
    if (x1 < x0){
      let a: number = x0
      x0 = x1
      x1 = a
    }
    const width: number = Width(x0, x1, seg)
    const w_3: number = width/3
    let p: number = Simpson(x0, x1, width, func, w_3, 0)
    switch(func){
      case "2x":
        p = Math.round(p)
        break
      case "x2":
        p = parseFloat(p.toFixed(4))
        break
      case "1_x":
        p = parseFloat(p.toFixed(2))
        break
    }
    return p
  }