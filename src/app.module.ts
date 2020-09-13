import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/product.module'

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://root:rootpassword@0.0.0.0:27017/nestjs?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    userNewUrlParser: true
  }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
