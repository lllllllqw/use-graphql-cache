import { TokenType } from "./TokenType";

export class Token {
  private value: TokenType

  constructor(type: TokenType) {
    this.value = type
  }

  getValue() {
    return this.value
  }
}