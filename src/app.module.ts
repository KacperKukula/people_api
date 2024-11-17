import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './mod/user/user.module';
import { AppStatusController } from './mod/appStatus/appStatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './database/person/person.controller';
import { PersonModule } from './database/person/person.module';
import { Person } from './database/person/entities/person.entity';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/people_api', {
    //   autoCreate: false
    // }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'local_user',
      password: 'local_password',
      database: 'pa_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    PersonModule
  ],
  controllers: [
    AppController,
    AppStatusController,
    PersonController
  ],
  providers: [AppService],
})
export class AppModule {}
