"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email Sent to " + to.name + ": " + message.subject + "!");
    };
    return EmailService;
}());
exports.default = EmailService;
