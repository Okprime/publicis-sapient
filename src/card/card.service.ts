import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { CardEntity } from './entities/card.entity';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Injectable()
export class CardService {
  constructor(private cardService: InMemoryDBService<CardEntity>) {}

  async create(createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  async findAll() {
    return this.cardService.getAll();
  }

  async findOne(id: string) {
    return this.cardService.query((data) => data.id === id);
  }
}
