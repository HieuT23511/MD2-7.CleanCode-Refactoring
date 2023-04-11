export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let isFizz : boolean = n % 3 == 0;
        let isBuzz : boolean = n%5 ==0;
        if (isFizz && isBuzz) {
            this.message = 'FizzBuzz';
        } else if (isBuzz) {
            this.message = 'Fizz';
        } else if (isFizz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}