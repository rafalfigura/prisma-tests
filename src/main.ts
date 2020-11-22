import "reflect-metadata";
import { buildSchema, createMethodDecorator } from 'type-graphql';
import { ApolloServer } from "apollo-server";
import * as path from "path";
import { PrismaClient } from "@prisma/client";
import { applyResolversEnhanceMap, resolvers, ResolversEnhanceMap } from '../prisma/generated/type-graphql';


export interface Context {
  prisma: PrismaClient;
}

function IsOwner() {
  return createMethodDecorator<Context>(async ({ context }, next) => {
    console.log({ context });
    await next();
  });
}

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    createUser: [],
    deleteUser: [],
    deleteManyUser: [],
    findFirstUser: [],
    user: [],
    users: [IsOwner()],
    updateUser: [],
    updateManyUser: [],
    upsertUser: []
  }
};

applyResolversEnhanceMap(resolversEnhanceMap);

const main = async() => {
  const schema = await buildSchema({
    resolvers: resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql")
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    playground: true,
    context: async  ({req}): Promise<Context> => {
      return { prisma }
    }
  });
  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main();
