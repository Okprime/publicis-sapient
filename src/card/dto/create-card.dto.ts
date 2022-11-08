import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateCardDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  cardName: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  cardNumber: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  limit: number;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  amount: number;
}
