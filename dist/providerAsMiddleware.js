"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerAsMiddleware = void 0;
function providerAsMiddleware(provider) {
    return (req, res, _next, end) => {
        // send request to provider
        provider.sendAsync(req, (err, providerRes) => {
            // forward any error
            if (err) {
                return end(err);
            }
            // copy provider response onto original response
            Object.assign(res, providerRes);
            return end();
        });
    };
}
exports.providerAsMiddleware = providerAsMiddleware;
//# sourceMappingURL=providerAsMiddleware.js.map