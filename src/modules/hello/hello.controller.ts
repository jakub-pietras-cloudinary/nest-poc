import { Controller, Get, Param } from '@nestjs/common';

import { HelloParamsDTO } from './dto/HelloParams.dto';

@Controller('/hello')
export class HelloController {
  @Get('/:testString')
  getHello(@Param() params: HelloParamsDTO) {
    return { testString: params.testString };
  }
}
