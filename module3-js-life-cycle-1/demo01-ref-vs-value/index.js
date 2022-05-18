const { deepStrictEqual } = require('assert')
let counter = 0
let counter2 = counter
counter2++ // 1
counter //0

const item = { counter: 0 }
item2 = item

// tipo primitivo gera copia em memoria
deepStrictEqual(counter, 0)
deepStrictEqual(counter2, 1)

// tipo ref, copia o endereco de memoria
// aponta para o mesmo lugar
item2.counter++
deepStrictEqual(item, { counter: 1 })
item.counter++
deepStrictEqual(item2, { counter: 2 })