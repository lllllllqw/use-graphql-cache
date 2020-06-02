import {
  graphql,
  parse,
  visit,
  buildASTSchema,
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const AppGraphQLSchema = buildSchema(`
  type Query {
    user: User!
    # project: Project!
  }

  type User {
    uuid: String!
    name: String!
  }

  type Project {
    uuid: String!
    name: String!
    owner: User
    members: [User]
  }
`)

const TypeGraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'rootType',
    fields: {
      user: {
        type: new GraphQLObjectType({
          name: 'user',
          fields: {
            uuid: {
              type: GraphQLString
            },
            name: {
              type: GraphQLString,
            }
          }
        })
      }
    }
  })
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
AppGraphQLSchema
TypeGraphQLSchema
graphql(
  AppGraphQLSchema,
  `
    query QueryUser {
      user {
        uuid
        name
      }
    }
  `,
  {
    user: () => {
      return {
        uuid: '1',
        name: 'lqw',
      }
    },
  }
) //?

ast

visit(ast, {
  Field(node) {
    if (node.selectionSet) {
      node.name.value //?
      node //?
    }
  },
})
