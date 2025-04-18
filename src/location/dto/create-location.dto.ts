import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  locationNumber: string;

  @IsNumber()
  area: number;

  @IsNumber()
  @IsOptional()
  parentId?: number;
}
