/* eslint-disable prefer-const */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';

@ApiTags('card')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  async create(@Body() createCardDto: CreateCardDto) {
    const { cardNumber } = createCardDto;
    const isValid = await this.validateCard(cardNumber);
    if (isValid) {
      return this.cardService.create(createCardDto);
    }
    throw new BadRequestException('Card number is not valid');
  }

  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(id);
  }

  async validateCard(value) {
    return !(
      value
        .replace(/\D/g, '')
        .split('')
        .reverse()
        .reduce(function (a, d, i) {
          return (a + d * (i % 2 ? 2.2 : 1)) | 0;
        }, 0) % 10
    );
  }
}
