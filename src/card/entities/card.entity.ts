import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface CardEntity extends InMemoryDBEntity {
  cardName: string;
  cardNumber: string;
  limit: number;
  amount: number;
}
