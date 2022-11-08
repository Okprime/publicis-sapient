import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CardEntity } from './entities/card.entity';

describe('CardService', () => {
  let service: CardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardService,
        {
          provide: InMemoryDBService<CardEntity>,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
