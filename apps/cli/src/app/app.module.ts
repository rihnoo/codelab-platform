import { PuppeteerModule, SeedDbModule } from '@codelab/backend/infra'
import { Module } from '@nestjs/common'
import { ConsoleModule } from 'nestjs-console'
import { DgraphCliModule } from '../dgraph-cli'
import { E2eModule } from '../e2e'
import { GraphqlCodegenModule } from '../graphql-codegen'
import { SeederModule } from '../seeder'
import { AppService } from './app.service'

@Module({
  imports: [
    ConsoleModule,
    GraphqlCodegenModule,
    SeedDbModule,
    SeederModule,
    PuppeteerModule,
    E2eModule,
    DgraphCliModule,
  ],
  controllers: [AppService],
})
export class AppModule {}