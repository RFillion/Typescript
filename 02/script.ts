class Invoice {
  client: string;
  product: string;
  price: number;
  constructor(client:string, product:string, price:number) {
    this.client = client
    this.product = product
    this.price = price
  }
}

const facture = new Invoice('Dora', 'Template', 45)
let arrFacture: Invoice[] = []

/* ======================================================================================================================================================================================== */

class Mother {
  name: string;
  hair: string;
  eyes: number;
  constructor(n:string, h:string, e:number) {
    this.name = n
    this.hair = h
    this.eyes = e
  }
  speak() {
    console.log(`Je suis ${this.name} et j'ai des cheveux ${this.hair}`)
  }
}

class Children extends Mother {
  speak() {
    console.log(`I am ${this.name} and I have ${this.hair} hair`)
  }
  speakMotherLanguage() {
    super.speak()
  }
}

const person_01 = new Mother('Rhea', 'maron', 2)
person_01.speak()

const person_02 = new Children('Déméter', 'brown', 2)
person_02.speakMotherLanguage()

/* ======================================================================================================================================================================================== */

