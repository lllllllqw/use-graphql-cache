import { graphql, parse, visit, buildASTSchema, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: {
    name: {
      type: GraphQLString,
    },
    uuid: {
      type: GraphQLString
    }
  }
})

const AppGraphQLSchema = new GraphQLSchema({
  query: UserType
})

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

graphql({
  schema: 
}) //?

ast

visit(ast, {
  Field(node) {
    if(node.selectionSet) {
      node.name.value //?
      node //?
    }
  }
})