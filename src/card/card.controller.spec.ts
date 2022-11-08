import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { CardService } from './card.service';

describe('CardController', () => {
  let controller: CardController;
  let service: CardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [
        CardService,
        {
          provide: CardService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CardController>(CardController);
    service = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('save a card', () => {
    it('should save a card', async () => {
      const result = {
        cardName: 'John Doe',
        cardNumber: '5610591081018250',
        limit: 100,
        amount: 600,
        id: '503901f5-45ca-4045-8a10-64a68c509862',
      };

      const isValid = true;

      jest
        .spyOn(service, 'create')
        .mockImplementation(async () => result as any);

      jest
        .spyOn(controller, 'validateCard')
        .mockImplementation(async () => isValid as any);

      jest.enableAutomock();

      expect(
        await controller.create({
          cardName: 'John Doe',
          cardNumber: '5610591081018250',
          limit: 100,
          amount: 600,
        }),
      ).toEqual(result);
    });
  });

  describe('get all cards', () => {
    it('return all cards', async () => {
      const result = [
        {
          cardName: 'John Doe',
          cardNumber: '4485-2757-4230-8327',
          limit: 100,
          amount: 600,
          id: '7c120b52-656d-45a4-88a5-9579131c4c13',
        },
        {
          cardName: 'John Doe',
          cardNumber: '5610591081018250',
          limit: 100,
          amount: 600,
          id: '503901f5-45ca-4045-8a10-64a68c509862',
        },
      ];

      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => result as any);

      jest.enableAutomock();

      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('get all cards', () => {
    it('return all cards', async () => {
      const result = {
        cardName: 'John Doe',
        cardNumber: '4485-2757-4230-8327',
        limit: 100,
        amount: 600,
        id: '7c120b52-656d-45a4-88a5-9579131c4c13',
      };

      const id = '7c120b52-656d-45a4-88a5-9579131c4c13';

      jest
        .spyOn(service, 'findOne')
        .mockImplementation(async () => result as any);

      jest.enableAutomock();

      expect(await controller.findOne(id)).toEqual(result);
    });
  });
});
