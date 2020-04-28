import axios from 'axios';
import { Handelsnaam, CompaniesList, CompanySearchParameters } from './openKVKTypes'

const BASEURL = 'https://api.overheid.io/suggest/openkvk';
const APIKEY = '9be1b31754a640463b3e240e7327332ec7cb1ccbe870953e4b018389d132b410';

import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'


export class OpenKVKClient {
    private _client: AxiosInstance;

    constructor() {
        const config: AxiosRequestConfig = {
            baseURL: BASEURL,
            params: {
                'fields[]': 'handlesnaam,dossiernummer'
            },
            headers: {
                'Content-Type': 'application/json',
                'ovio-api-key': APIKEY
            }
        }

        this._client = Axios.create(config)
    }

    public getCompaniesBySubstring = async (params: CompanySearchParameters): Promise<CompaniesList> => {
        var response;
        var companies = [];
        try {
            response = await this._client.get(params.companySubstring)
        } catch (error) {
            console.log(error);
            throw new Error('Axios broke');
        }

        if (response.status !== 200) {
            console.log(response)
            throw new Error('Something went wrong')
        }

        if (response.data && response.data && response.data.handelsnaam) {
            companies = response.data.handelsnaam.map((company: Handelsnaam) => {
                return {
                    companyCode: company.dossiernummer,
                    name: company.handelsnaam,
                    city: company.plaats
                }
            })
        }

        var companyHash = {};
        companies.forEach((company) => {
            companyHash[company.companyCode] = company;
        })

        return { companies: Object.keys(companyHash).map((k) => companyHash[k]) }
    }
}
