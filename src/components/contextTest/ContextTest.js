import React from 'react';

class ExampleClient {
    constructor() {
        this.fieldOne = "fieldOne";
    }

    testMethod() {
        console.log("test method from context test");
    };
}

const exampleClient = new ExampleClient();

export const ContextTest = React.createContext(exampleClient);