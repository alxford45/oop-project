import React, { Component } from 'react';



const obj = {};
const myContext = React.createContext(obj);

class Context extends Component {

    state = {
        value: "",
        id: 0,
        search: [],
        list: [],
        data: 0
    };

    render() {
        return (

            <myContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </myContext.Provider>

        );
    }
}


export default Context;