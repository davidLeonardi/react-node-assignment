import React from 'react'

import { CompanyFinderProvider } from './CompanyFinderContext'
import CompanyListLoader from './CompanyListLoader';
import CompanyList from './CompanyList';
import InputField from './InputField';
import StatusIndicator from './StatusIndicator';


function CompanyFinder() {

    return (
        <>
            <CompanyFinderProvider>
                <InputField />
                <StatusIndicator />
                <CompanyListLoader>
                    <CompanyList></CompanyList>
                </CompanyListLoader>
            </CompanyFinderProvider>
        </>)
}

export default CompanyFinder