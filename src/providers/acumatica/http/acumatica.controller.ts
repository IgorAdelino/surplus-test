import { Body, Controller, Post, Res, UsePipes } from '@nestjs/common';
import { AcumaticaAuthService } from '../services/acumatica-auth.service';
import { Response } from 'express';
import { z } from 'zod';
import { ZodValidationPipe } from 'src/http/zod-validation-pipe';

const loginBodySchema = z.object({
  name: z.string(),
  password: z.string(),
});

type loginBodySchema = z.infer<typeof loginBodySchema>;

@Controller('acumatica')
export class AcumaticaController {
  constructor(private acumaticaAuthService: AcumaticaAuthService) {}

  @Post('/auth')
  @UsePipes(new ZodValidationPipe(loginBodySchema))
  async auth(@Res() res: Response, @Body() body: loginBodySchema) {
    const { name, password } = body;
    const authResponse = await this.acumaticaAuthService.authenticate({
      name,
      password,
    });
    res
      .status(authResponse.status)
      .set(authResponse.headers)
      .send(authResponse.data);
  }
}
