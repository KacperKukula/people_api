import { Module } from '@nestjs/common';
import { AppStatusController } from './appStatus.controller';

@Module({
    imports: [],
    controllers: [AppStatusController]
})
export class appStatus {}