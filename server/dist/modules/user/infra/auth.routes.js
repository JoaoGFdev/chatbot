"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("../useCases/AuthenticateUser/AuthenticateUserController");
const ResetPasswordController_1 = require("../useCases/ResetPassword/ResetPasswordController");
const SendForgotPasswordMailController_1 = require("../useCases/SendForgotPasswordMail/SendForgotPasswordMailController");
exports.authRouter = (0, express_1.Router)();
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
const resetPasswordController = new ResetPasswordController_1.ResetPasswordController();
const forgotPasswordController = new SendForgotPasswordMailController_1.SendForgotPasswordMailController();
exports.authRouter.post('/', authenticateUserController.handle);
exports.authRouter.post('/resetPassword', resetPasswordController.handle);
exports.authRouter.post('/forgotPassword', forgotPasswordController.handle);