import { Injectable } from '@nestjs/common';
import { OpenKVKClient } from './vendors/openkvk'
import { CompaniesList } from './vendors/openKVKTypes'


const openKvkClient = new OpenKVKClient();

@Injectable()
export class AppService {

  getCompanySubstring(substring: string): Promise<CompaniesList> {
    return openKvkClient.getCompaniesBySubstring({ companySubstring: substring })
  }
}
