import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('card')],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
