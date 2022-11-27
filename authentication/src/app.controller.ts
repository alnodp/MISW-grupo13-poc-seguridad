import { Controller, Get, Request, Post, UseGuards, Logger, Headers, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  private readonly logger = new Logger('AppController');

  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get(['', 'health'])
  health(): string {
    const env = this.appService.getEnv();
    this.logger.log(env);
    const message = 'Service healthy';
    this.logger.log(message);
    return message;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    this.logger.log('Login ', req);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('auth/login/validate')
  validToken(@Request() req, @Headers() headers) {
    this.logger.log('login/validate headers ', headers);
    const response = {
      'access-token': headers.authorization ? headers.authorization.replace('Bearer ', '') : '',
      valid: !!headers.authorization,
    };

    this.logger.log('Token response', response);

    return response;
  }

}
