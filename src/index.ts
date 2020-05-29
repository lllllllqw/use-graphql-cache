import { parse, visit } from 'graphql'

const query = `
  query USER_LIST {
    aliasUser: users {
      key
      uuid
      name
    }
  }
`

const ast = parse(query)

ast

visit(ast, {
  Field(node) {
    if(node.selectionSet) {
      node.name.value //?
      node //?
    }
  }
})