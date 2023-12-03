export function media(x: number[]): number{
    let media: number = 0;
    let suma: number = 0;
    for(let val of x){
      suma = suma + val;
    }
    media = suma/x.length;
    console.log(media);
    return Number(media.toFixed(2));
}