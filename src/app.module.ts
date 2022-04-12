import { Logger, Module, OnApplicationBootstrap } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule implements OnApplicationBootstrap {
  private logger: Logger = new Logger('AppModule')

  async onApplicationBootstrap(): Promise<void> {
    this.logger.log('onApplicationBootstrap')
  }
}
