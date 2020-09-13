import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder()
    .setTitle('product')
    .setDescription('The Product API description')
    .setVersion('1.0')
    // .addTag('product')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  const port = 3000
  await app.listen(port)
  console.log('Server on port http://localhost:' + port)
}
bootstrap()
