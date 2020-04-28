import React, { useEffect } from 'react';
import { useCompanyFinderState, useCompanyFinderDispatch } from './CompanyFinderContext'

function CompanyListLoader(props) {

    const { searchString } = useCompanyFinderState();
    const dispatch = useCompanyFinderDispatch();

    useEffect(() => {
        if (searchString && searchString.length >= 4) {
            dispatch({ type: 'changeStatus', status: 'loading' })
            fetch(`http://localhost:3000/getCompanies/?substring=${searchString}`)
                .then((response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        dispatch({ type: 'changeStatus', status: 'error' })
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        dispatch({ type: 'loadedCompanies', companies: data.companies })
                        dispatch({ type: 'changeStatus', status: 'idle' })
                        console.log(data);
                    });
                })
                .catch((data) => {
                    console.log(data);
                    dispatch({ type: 'changeStatus', status: 'error' })
                });
        }
    }, [searchString, dispatch]);

    return (<>{props.children}</>);
}

export default CompanyListLoader;