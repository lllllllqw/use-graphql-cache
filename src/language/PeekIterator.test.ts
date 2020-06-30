import { PeekIterator } from "./PeekIterator"

function *createIterator(): Iterator<string, string> {
  const string = 'abc'
  for(const char of [...string]) {
    yield char
  }
  return null
}

const it = createIterator()

const pIt = new PeekIterator(it)

pIt.peek() // ?
pIt.peek() // ?
pIt.next() // ?
pIt.hasNext() // ?
pIt.peek() // ?
pIt.next() // ?
pIt.next() // ?
pIt.hasNext() // ?

