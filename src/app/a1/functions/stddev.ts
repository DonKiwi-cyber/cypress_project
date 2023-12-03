export function stddev(x: number[], media: number): number{
    let stddev: number = 0;
    let suma: number = 0;
    let denominador: number = x.length - 1;
    for(const val of x){
      let pow = Math.pow(val - media, 2);
      suma = suma + pow;
    }
    stddev = Math.sqrt(suma/denominador)
    return Number(stddev.toFixed(2));
}