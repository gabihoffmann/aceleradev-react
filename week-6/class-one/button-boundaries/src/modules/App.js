import React, { Component } from 'react'

import ErrorBoundary from './ErrorBoundary'
import BuggyCounter from '../components/BuggyCounter'

export default class App extends Component{
    render(){
        return (
            <div>
                <p>
                    <h2>Error Boundaries</h2>
                    <br/>
                    Clique no número para somar o contador
                    <br/><hr/>

                    Dois contadores dentro do mesmo error boundary
                    <ErrorBoundary>
                        <BuggyCounter/>
                        <BuggyCounter/>
                    </ErrorBoundary>
                    <br/><hr/><br/>
                    <ErrorBoundary>
                        <BuggyCounter/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <BuggyCounter/>
                    </ErrorBoundary>
                </p>
            </div>
        )
    }
}