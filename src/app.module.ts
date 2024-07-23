import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './mod/user/user.module';
import { HealthController } from './mod/health/health.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/people_api', {
      autoCreate: false
    }),

    // User
    UserModule
  ],
  controllers: [
    AppController,
    HealthController
  ],
  providers: [AppService],
})
export class AppModule {}
