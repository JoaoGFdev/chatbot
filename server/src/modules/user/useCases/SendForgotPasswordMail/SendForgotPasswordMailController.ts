import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendForgotPasswordMailUseCase } from './SendForgotPasswordMailUseCase';

export class SendForgotPasswordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordMailService = container.resolve(
      SendForgotPasswordMailUseCase,
    );

    await sendForgotPasswordMailService.execute({
      email,
    });

    return response.status(201).send();
  }
}
