
class BCD {
    private numbers: string[] = [];

    // Во избежание переполнение Double чисел на вход используем BigInt
    constructor(num: bigint) {
        this.#getNumberToBcd(num); 
    }

    #getNumberToBcd(num: bigint) {
        let arrOfNum = String(num).split('').map(Number);
        let arrOfBinaryStrNumbers = arrOfNum.map((num) => num.toString(2).padStart(4, '0'));
        this.numbers = arrOfBinaryStrNumbers;
        return arrOfBinaryStrNumbers;
    }

    // Во избежание переполнение Double чисел на выход используем BigInt
    valueOf(): bigint {
       let stringOfBinaryBCD = this.numbers.join('');
       let result = BigInt(`0b${stringOfBinaryBCD}`);
       return result;
}

 // Возвращает разряд BCD числа по заданной позиции.
 // Отрицательная позиция означает разряд "с конца".
 //     get(pos: number): number {
 // return 123;
 //     }
}

const n = new BCD(65536n);
console.log(n.valueOf());
