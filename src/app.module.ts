import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './mod/user/user.module';
import { AppStatusController } from './mod/appStatus/appStatus.controller';

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
    AppStatusController
  ],
  providers: [AppService],
})
export class AppModule {}
