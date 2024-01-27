// Fibonacci: o proximo nro da sequencia é sempre a soma dos anteriories
// input: 3
// 0,1,1
// input 5
// 0,1,1,2,3
const { createSandbox } = require("sinon");
const Fibonacci = require("./fibonacci");
const sinon = createSandbox();
const assert = require("assert");

(async () => {
  // Nro de sequencias : 5
  // [0] input = 5, current = 0, next = 1, resultado = 0
  // ....
  // [5] input = 0 -> PARA
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    for (const sequencia of fibonacci.execute(5)) {
    }
    const expectedCallCount = 6;
    assert.strictEqual(spy.callCount, expectedCallCount);
    const { args } = spy.getCall(2);
    const expectedParams = [3, 1, 2];
    assert.deepStrictEqual(args, expectedParams, "os arrays não são iguais");
  }

  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    for (const sequencia of fibonacci.execute(3)) {
    }
    const expectedCallCount = 4;
    assert.strictEqual(spy.callCount, expectedCallCount);
  }

  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);

    const results = [...fibonacci.execute(5)];

    const expectedCallCount = 6;
    assert.strictEqual(spy.callCount, expectedCallCount);
    const { args } = spy.getCall(2);
    const expectedParams = [3, 1, 2];
    assert.deepStrictEqual(args, expectedParams, "os arrays não são iguais");

    const expectedResults = [0, 1, 1, 2, 3];
    assert.deepStrictEqual(
      results,
      expectedResults,
      "os resultados sejam iguais"
    );
  }
})();
