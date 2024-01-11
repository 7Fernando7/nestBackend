import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { User, UserSchema } from './auth/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    MongooseModule.forFeature([
      { 
        name: User.name, 
        schema: UserSchema 
      }
    ]),

    MongooseModule.forRoot(process.env.MONGO_URI),

    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  // constructor(){
  //   console.log(process.env)
  // }
}
