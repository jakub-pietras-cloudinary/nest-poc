import { Controller, Get, Param } from '@nestjs/common';

import { HelloParamsDTO } from './dto/HelloParams.dto';

@Controller()
export class AppController {
  @Get('/hello/:testString')
  getHello(@Param() params: HelloParamsDTO) {
    return { testString: params.testString };
  }
}
