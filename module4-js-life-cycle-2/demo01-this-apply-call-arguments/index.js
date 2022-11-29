'use strict'

const { watch, promises: { readFile } } = require('fs')

class File {
  watch(event, filename) {
    console.log('this', this);
    console.log('arguments', Array.prototype.slice.call(arguments));
    this.showContent(filename)
  }

  async showContent() {
    console.log((await readFile(filename)).toString())
  }
}

const file = new File()

// dessa forma ele ignora o 'this da classe File herdando o this do watch
// watch(__filename, file.watch)

// para nao herdar o this da funcao, mas fica feio
// watch(__filename, (event, filename) => file.watch(event, filename))

// podemos deixar explicito o this da classe File
// bind retorna uma funcao com o this setado, ignorando o watch
// watch(__filename, file.watch.bind(file))

file.watch.call({ showContent: () => console.log('call: hey sinon') }, null, __filename)
file.watch.apply({ showContent: () => console.log('apply: hey sinon') }, [null, __filename])