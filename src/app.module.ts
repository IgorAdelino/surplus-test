import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseOrderModule } from './modules/purchase-order/purchase-order.module';
import { DatabaseModule } from './database/database.module';
import { AcumaticaModule } from './providers/acumatica/acumatica.module';
import { EnvModule } from './env/env.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env/env';

@Module({
  imports: [
    PurchaseOrderModule,
    DatabaseModule,
    AcumaticaModule,
    EnvModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
