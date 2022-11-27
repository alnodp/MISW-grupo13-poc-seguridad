import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios/dist';
import { AppService } from '../app.service';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');

  constructor(
    private readonly httpService: HttpService,
    private readonly appService: AppService,
  ) {}

  validateToken(accessToken: string): Promise<AxiosResponse<any>> {
    const authEndpoint = this.appService.getEnv()['AUTH_ENDPOINT'];
    const pathEndpoint = '/auth/login/validate';

    this.logger.log('validateToken', accessToken);
    this.logger.log('authEndpoint', authEndpoint + pathEndpoint);

    const headersRequest = {
      Authorization: `Bearer ${accessToken}`,
    };

    return this.httpService.axiosRef.post(
      authEndpoint + pathEndpoint,
      {},
      {
        headers: headersRequest,
      },
    );
  }
}
