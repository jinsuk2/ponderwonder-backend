"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("../infra/Route");
exports.getRoutes = () => {
    return [
        new Route_1.Route('/api/v1/users', 'get', [
            async (req, res) => {
                try {
                }
                catch (e) { }
            }
        ])
    ];
};
//# sourceMappingURL=routes.js.map