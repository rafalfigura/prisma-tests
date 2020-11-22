import { NonEmptyArray } from "type-graphql";
export * from "./enums";
export * from "./models";
export * from "./resolvers/crud";
export * from "./resolvers/inputs";
export * from "./resolvers/outputs";
export * from "./enhance";
export declare const crudResolvers: NonEmptyArray<Function>;
export declare const resolvers: NonEmptyArray<Function>;