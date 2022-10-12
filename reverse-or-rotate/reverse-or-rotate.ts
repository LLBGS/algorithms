export class ReverseOrRotate {

  private _text: string;
  private _size: number;

  public get text(): string{
    return this._text;
  }

  public set text(tmpText): string {
    this._text = tmpText;
  }

  public get size(): number {
    return this._size;
  }

  public set size(tmpSize): number {
    this._size = tmpSize;
  }

  public execute() {
    this.validate();
    let str = '';
    
    this.getChucks().forEach(el => {
      let res = this.calculate(el);
      if(res){
        str += this.revert(el)
      } else {
        str += this.rotate(el);
      }
    });
    return str;
  }

  private validate(){
    if(!this.size || this.size > this.text.length) return ''; 
  }

  private getChucks(): Array<string[]> {
    const total = this.text.split('');
    const second = this.text.split('');
    const first = second.splice(0, this.size);
    console.log('total', total.length - this.size)
    // second.splice(0, (total.length - this.size))
    return [first, second]
  }

  private calculate(chuck: string[]): boolean {
    let sum = 0;
    chuck.map(el => sum += Number(el));
    return !((sum ** 3) % 2);
  }

  private revert(data: string[]): string {
    return data.reverse().join('')

  }

  private rotate(data: string[]): string {
    data.push(data[0]);
    data.splice(0,1);
    return data.join('');
  }
}

[ 
  {
    input: '123456987654',
    output: '234561876549',
    size: 6
  },
  {
    input: '123456987653',
    output: '234561356789',
    size: 6
  },
  {
    input: "66443875",
    output: "44668753" ,
    size: 4
  },
  {
    input: "66443875",
    output: "64438756",
    size: 8
  },
  {
    input: "664438769",
    output: "67834466",
    size: 8
  },
  {
    input: "123456779",
    output: "23456771",
    size: 8
  },
  {
    input: "",
    output: "",
    size: 8
  },
  {
    input: "123456779",
    output: "",
    size: 0
  },
  {
    input: "563000655734469485",
    output: "0365065073456944",
    size: 4
  },
 // {
 //   input: "733049910872815764",
 //   output: "330479108928157",
 //   size: 5
 // },
  
].map((data: ITestData, i) => {
  const reverseOrRotate = new ReverseOrRotate();
  reverseOrRotate.text = data.input;
  reverseOrRotate.size = data.size;
  const result = reverseOrRotate.execute();
  if(result === data.output){ 
    console.log(`${i+1} `+'[OKAY] '+ data.output + ' === ' + result);
  } else { 
    console.log(`${i+1} `+'[FALSE] '+ data.output + ' !== ' + result)
  }
});
export interface ITestData {
  input: string, 
  output: string, 
  size: number
}
