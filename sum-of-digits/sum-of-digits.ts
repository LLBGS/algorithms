export class SumOfDigits {
  private _currentNumber!: number;

  public get currentNumber(){
    return this._currentNumber;
  }

  public set currentNumber(tmpNumber: number){
    this._currentNumber = tmpNumber;
  }

  public execute(){
    if(this.currentNumber < 10) return this.number;
    let newCurrentNumber = 0;
    String(this.currentNumber).split('').map(el => newCurrentNumber += Number(el));
    this.currentNumber = newCurrentNumber;
    this.execute()
  }
}

const sum = new SumOfDigits();
sum.currentNumber = 456;
sum.execute()
console.log('last value ::>', sum.currentNumber);

