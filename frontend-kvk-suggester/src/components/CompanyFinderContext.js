import React from 'react'

const companyContextInitialData = {
    companies: [],
    searchString: '',
    status: 'inactive'
};

const CompanyFinderStateContext = React.createContext()
const CompanyFinderDispatchContext = React.createContext()

function companyFinderReducer(state, action) {
    switch (action.type) {
        case 'changeString': {
            return {
                searchString: action.value,
                companies: state.companies,
                status: state.status
            }
        }
        case 'loadedCompanies': {
            return {
                searchString: state.searchString,
                companies: action.companies,
                status: state.status
            }
        }
        case 'changeStatus': {
            console.log(action.status)
            return {
                searchString: state.searchString,
                companies: state.companies,
                status: action.status
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function CompanyFinderProvider({ children }) {
    const [state, dispatch] = React.useReducer(companyFinderReducer, companyContextInitialData)
    return (
        <CompanyFinderStateContext.Provider value={state}>
            <CompanyFinderDispatchContext.Provider value={dispatch}>
                {children}
            </CompanyFinderDispatchContext.Provider>
        </CompanyFinderStateContext.Provider>
    )
}

function useCompanyFinderState() {
    const context = React.useContext(CompanyFinderStateContext)
    if (context === undefined) {
        throw new Error('useCompanyFinderState must be used within a CompanyFinderProvider')
    }
    return context
}

function useCompanyFinderDispatch() {
    const context = React.useContext(CompanyFinderDispatchContext)
    if (context === undefined) {
        throw new Error('useCompanyFinderDispatch must be used within a CompanyFinderProvider')
    }
    return context
}

export { CompanyFinderProvider, useCompanyFinderState, useCompanyFinderDispatch }
