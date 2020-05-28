import React, { Component } from 'react'

import CounterUI from './CounterUI'
import CounterWrapper from './CounterWrapper'

class Counter extends Component{
    render(){
        return(
            <CounterWrapper
                render={ 
                ({increment, decrement , count}) => (
                    <CounterUI
                        increment={increment}
                        decrement={decrement}
                        count={count} />
                )
                }></CounterWrapper>
        )
    }
}

export default Counter;