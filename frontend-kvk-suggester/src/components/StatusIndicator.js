import React from 'react';

import { useCompanyFinderState } from './CompanyFinderContext'

function StatusIndicator(props) {

    const { status } = useCompanyFinderState();

    return (<>{status}</>);
}

export default StatusIndicator;