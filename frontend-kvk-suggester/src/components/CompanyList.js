import React from 'react';
import { CompanyContainer } from '../styled/Shared';

import { useCompanyFinderState } from './CompanyFinderContext'

function CompanyList(props) {

    const { companies } = useCompanyFinderState();

    return (<>
        {
            companies.map((company) => {
                return <CompanyContainer key={company.companyCode}>
                    <pre>{company.name}</pre>
                    <pre>{company.companyCode}</pre>
                    <pre>{company.city}</pre>
                </CompanyContainer>
            })
        }
    </>);
}

export default CompanyList;