import {
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  private readonly logger = new Logger('AppController');

  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get(['', 'health'])
  health(): string {
    const message = 'Service healthy';
    const env = this.appService.getEnv();
    this.logger.log(env);
    this.logger.log(message);
    return message;
  }

  @Post('diagnostic')
  async doDiagnostic(@Headers() headers, @Request() req) {
    this.logger.log('diagnostic headers ', headers);
    this.logger.log('diagnostic ', req);

    const accessToken = headers.authorization.replace('Bearer ', '');
    this.logger.log('diagnostic accessToken ', accessToken);

    try {
      const response = await this.authService.validateToken(accessToken);
      this.logger.log('response ', response.data, response.status);
    } catch (err) {
      this.logger.error('err ', err);
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    const diagnosticRs = {
      message: 'Diagnostico realizado con éxito',
    };
    this.logger.log(diagnosticRs);
    return diagnosticRs;
  }
}
