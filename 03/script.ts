class Mother {
  name: string;
  eyes: number;
  constructor(n:string, e:number) {
    this.name = n
    this.eyes = e
  }
  speak() {
    console.log(`Je me présente, je m'appelle ${this.name}`)
  }
}

let henri = new Mother('Henri', 2)
henri.speak()

interface Person {
  name:string
  eyes:number
  speak(a:string):string
}

let helene: Person
helene = {
  name: 'Hélène',
  eyes: 2,
  speak(a:string) : string {
    return `${a} ${this.name}`
  }
}

const talkingPerson = (a:Person, b:string) => {
  return a.speak
}