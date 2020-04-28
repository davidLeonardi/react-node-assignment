import { Controller, Get, Param, HttpException, HttpStatus, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CompaniesList, CompanyResult } from './vendors/openKVKTypes'
import { Http2ServerRequest } from 'http2';

var mock: CompaniesList = {
  companies: [
    {
      companyCode: 'asd',
      name: 'asasd',
      city: 'asd'
    }
  ]
};


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('getCompanies')
  async getCompanySubstring(@Query('substring') substring: string): Promise<CompaniesList> {
    console.dir(substring);
    if (substring.length <= 3) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Company name not long enough. Pleas specify at least 4 charachters'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.appService.getCompanySubstring(substring)
      .then((result) => {
        // return mock;
        return result;
      })
      .catch((error) => {
        return error;
      })
  }
}
