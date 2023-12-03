import { sum, sumPow, sumXY } from "./common";

export function B1(x: number[], y: number[]): number{
    const sigmaX: number = sum(x);
    const sigmaY: number = sum(y);
    const sigmaXY: number = sumXY(x,y);
    const n: number = x.length;
    const Xavg: number = sigmaX/n;
    const Yavg: number = sigmaY/n;
    const powX: number = sumPow(x);
    const powXavg: number = Math.pow(Xavg, 2);

    const nominator: number = sigmaXY - (n*Xavg*Yavg);
    const denominator: number = powX - n*powXavg;

    const B1: number = nominator/denominator;
    return B1;
  }

export function B0(x: number[], y: number[], B1: number): number{
    const sigmaX: number = sum(x);
    const sigmaY: number = sum(y);
    const n: number = x.length;
    const Xavg: number = sigmaX/n;
    const Yavg: number = sigmaY/n;

    const B0: number = Yavg - B1*Xavg;
    return B0;
  }

export function Yk(B0: number, B1: number, Xk: number): number{
  const Yk: number = B0 + B1*Xk;
  return Yk;
}