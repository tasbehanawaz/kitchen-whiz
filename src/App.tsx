import React from 'react';
import './App.css';
import {Button, ChakraProvider} from '@chakra-ui/react'

function MyApp() {
    return (
        <div className="App">
            <Button colorScheme="blue">Button</Button>
        </div>
    )
}

function App() {
    return (
        <ChakraProvider>
            <MyApp/>
        </ChakraProvider>
    );
}

export default App;
