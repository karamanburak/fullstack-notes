//! Interface !\\

interface Person {
  name: string;
  readonly age: number;
}

const person1: Person = {
  name: "John",
  age: 40,
};


interface Calendar {
  events: string[];
  addEvents(event: string): void;
}

class LMSCalendar implements Calendar {
  constructor(public events: string[]) {}

  addEvents(event: string): void {
    this.events.push(event);
  }
}

const de08 = new LMSCalendar(['HTML', 'CSS', 'JS', 'REACT'])

de08.addEvents('TS')

console.log(de08);

