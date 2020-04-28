import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import CompanyFinder from './components/CompanyFinder'

import './App.css';

const ErrorHandlingComponent = ({ componentStack, error }) => (
  <div>
    <p><strong>Oops! An error occured!</strong></p>
    <p>Here’s what we know…</p>
    <p><strong>Error:</strong> {error.toString()}</p>
    <p><strong>Stacktrace:</strong> {componentStack}</p>
  </div>
);


function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorHandlingComponent}>
        <CompanyFinder></CompanyFinder>
      </ErrorBoundary>
    </div>
  );
}

export default App;




