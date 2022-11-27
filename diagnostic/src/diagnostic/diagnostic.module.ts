import { Module } from '@nestjs/common';
import { DiagnosticService } from './diagnostic.service';

@Module({
  providers: [DiagnosticService]
})
export class DiagnosticModule {}
