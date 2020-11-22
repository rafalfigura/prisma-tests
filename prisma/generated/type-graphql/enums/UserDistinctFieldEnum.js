"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var UserDistinctFieldEnum;
(function (UserDistinctFieldEnum) {
    UserDistinctFieldEnum["id"] = "id";
    UserDistinctFieldEnum["name"] = "name";
})(UserDistinctFieldEnum = exports.UserDistinctFieldEnum || (exports.UserDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
    name: "UserDistinctFieldEnum",
    description: undefined,
});
