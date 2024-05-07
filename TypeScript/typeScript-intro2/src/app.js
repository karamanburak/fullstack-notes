//! Interface !\\
const person1 = {
    name: "John",
    age: 40,
};
class LMSCalendar {
    constructor(events) {
        this.events = events;
    }
    addEvents(event) {
        this.events.push(event);
    }
}
const de08 = new LMSCalendar(['HTML', 'CSS', 'JS', 'REACT']);
de08.addEvents('TS');
console.log(de08);
