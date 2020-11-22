"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyResolversEnhanceMap = void 0;
const crudResolvers = require("./resolvers/crud/resolvers-crud.index");
const actionResolvers = require("./resolvers/crud/resolvers-actions.index");
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver
    }
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
            const decorators = resolverActionsConfig[modelResolverActionName];
            const crudTarget = crudResolversMap[modelName].prototype;
            const actionResolversConfig = actionResolversMap[modelName];
            const actionTarget = actionResolversConfig[modelResolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName));
                decorator(actionTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
