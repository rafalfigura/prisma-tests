import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
declare const crudResolversMap: {
    User: typeof crudResolvers.UserCrudResolver;
};
declare type ModelNames = keyof typeof crudResolversMap;
declare type ModelResolverActionNames<TModel extends ModelNames> = keyof typeof crudResolversMap[TModel]["prototype"];
export declare type ResolverActionsConfig<TModel extends ModelNames> = {
    [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};
export declare type ResolversEnhanceMap = {
    [TModel in ModelNames]?: ResolverActionsConfig<TModel>;
};
export declare function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap): void;
export {};
