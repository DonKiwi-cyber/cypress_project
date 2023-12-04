import {Width, error, Simpson} from './common/common'

export function t_student(x0: number, x1: number, func: string, seg: number, dof: number): number{
    if (x1 < x0){
      let a: number = x0
      x0 = x1
      x1 = a
    }
    const width: number = Width(x0, x1, seg)
    const w_3: number = width/3
    let p: number = parseFloat(Simpson(x0, x1, width, func, w_3, dof).toFixed(7))
    return p
  }