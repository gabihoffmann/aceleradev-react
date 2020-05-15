import React, { Component } from 'react'

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>Algo deu errado</h2>
                    <details>{this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componetStack}
                    </details>
                </div>
            )
        }
        return this.props.children;

    }
}