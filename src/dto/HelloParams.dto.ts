import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class HelloParamsDTO {
  @IsAlphanumeric()
  @MaxLength(10)
  @MinLength(2)
  testString: string;
}
