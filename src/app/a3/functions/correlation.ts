import { sum, sumPow, sumXY } from "./common";

function numerator(x: number[], y: number[], n: number): number{
    const num1: number = n*sumXY(x,y)
    const num2: number = sum(x)*sum(y)
    const numerator: number = num1-num2
    return numerator
  }

function denominator(x: number[], y: number[], n: number): number{
    const denom1: number = (n*sumPow(x))-Math.pow(sum(x),2)
    const denom2: number = (n*sumPow(y))-Math.pow(sum(y),2)
    const denominator: number = Math.sqrt(denom1*denom2)
    return denominator
  }

export function correlation(x: number[], y: number[]): number{
    const n: number = x.length
    const numerador: number = numerator(x, y, n)
    const denominador: number = denominator(x, y, n)
    const r: number = numerador/denominador
    return r
  }