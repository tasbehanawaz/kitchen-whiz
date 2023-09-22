import React from 'react';
import './App.css';
import {
    Box,
    Button,
    Heading,
    Circle,
    Square,
    Text,
    Center,
    ChakraProvider, Flex,
} from '@chakra-ui/react'
import Kitchen from "./Kitchen";
import Sidebar from "./Sidebar";
import Recipes from "./Recipes";

function ChakraTest() {
    return (
        <Box>
            <Heading>I'm a Heading I</Heading>
            <Button colorScheme="blue">Button</Button>

            <Box
                border='1px solid black'
                maxW='30%'
                ml={20}
                mt={40}
            >
                <Heading>I'm a Heading II</Heading>

                <Box
                    border='1px solid black'
                    borderRadius='10px'
                    maxW='30%'
                    ml={20}
                    mt={40}
                >
                    <Heading>I'm a Heading III</Heading>
                </Box>

                <Circle
                    border='1px solid black'
                >
                    <Heading>I'm a Heading IV</Heading>
                </Circle>
            </Box>
        </Box>
    )
}

function MyApp() {
    return (
        <Box>
            {/*<ChakraTest/>*/}
            {/*<Sidebar/>*/}
            <Flex height="90vh">
                <Box width='18%' border="1px solid black" borderRadius="md">
                    <Sidebar/>
                </Box>
                <Box width='82%' border="1px solid black" borderRadius="md">
                    <Recipes/>
                </Box>
            </Flex>

            {/*<Recipes/>*/}
            <Box>
                <Kitchen/>
            </Box>
        </Box>
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
