import React from 'react';
export default class ErrorBtn extends React.Component {
    state = {
        hasError: false,
    };
    //Quando clica o hasError recebe true no state
    handleClick = () => {
        this.setState({ hasError: true });
    };
    //Que aplica um erro no js quando hasError for true
    render() {
        if (this.state.hasError) {
            throw new Error('Boom');
        }
        ;
        return <button onClick={this.handleClick}>Throw Error</button>;
    }
}
