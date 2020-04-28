export interface Handelsnaam {
    text: string;
    dossiernummer: string;
    subdossiernummer: string;
    link: string;
    id: string;
    handelsnaam: string;
    plaats: string;
}

export interface RootObject {
    handelsnaam: Handelsnaam[];
}

export interface CompanySearchParameters {
    companySubstring: string;
}

export interface CompaniesList {
    companies: CompanyResult[];
}

export interface CompanyResult {
    companyCode: string;
    name: string;
    city: string;
}
