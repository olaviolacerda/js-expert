"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var Person;module.link('../src/person.js',{default(v){Person=v}},2);
const { describe, it } = mocha;

const { expect } = chai;


describe('#Person', () => {
  describe('#formatted', () => {
    it('should return a person instance from a string', () => {
      const person = Person.generateInstanceFromString('1 car,motorcycle 100 2020-01-01 2020-01-02')

      const expected = {
        id: "1",
        vehicles: ['car', 'motorcycle'],
        kmTraveled: "100",
        from: '2020-01-01',
        to: '2020-01-02',
      }

      expect(person).to.be.deep.equal(expected)
    })

    it('should format values', () => {
      const person = new Person({
        from: '2020-01-01',
        to: '2020-01-02',
        vehicles: ['car', 'motorcycle'],
        kmTraveled: "100",
        id: "1",
      })

      const result = person.formatted('pt-BR');

      const expected = {
        id: 1,
        vehicles: 'car e motorcycle',
        kmTraveled: '100 km',
        from: '01 de janeiro de 2020',
        to: '02 de janeiro de 2020'
      }

      expect(result).to.be.deep.equal(expected)
    })
  })
})