import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { AuthService } from './auth.service';

@Module({
  imports: [HttpModule],
  providers: [AuthService, AppService],
  exports: [AuthService],
})
export class AuthModule {}
