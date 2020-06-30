export class PeekIterator {
  it: Iterator<string, string>
  cache: string[] = []

  constructor(it: Iterator<string, string>) {
    this.it = it
  }

  peek() {
    const value = this.next()
    this.cache.push(value)
    return value
  }

  next() {
    if(this.cache.length) {
      return this.cache.pop()
    }
    const next = this.it.next()
    if(!next.done) {
      return next.value
    }
    throw new Error('no next')
  }

  hasNext() {
    if(this.cache.length) {
      return true
    }
    const next = this.it.next()
    if(!next.done) {
      this.cache.push(next.value)
      return true
    }
    return false
  }
}