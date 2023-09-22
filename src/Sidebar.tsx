import React, {useState} from "react";
import {Box, Button, Checkbox, Flex, Heading, Stack, StackDivider, VStack} from "@chakra-ui/react";

export default function Sidebar() {
    const [active, setActive] = useState(0);


    return (
        <Flex
            justifyContent="center"
            width="100%"
        >
            <VStack
                divider={<StackDivider borderColor='gray.200'/>}
                spacing={4}
                // align='stretch'
            >
                {/*Logo*/}
                <Box>
                    <Heading>Kitchen Whiz</Heading>
                </Box>

                {/*Course Options*/}
                <Box bg='yellow.200'>
                    <Heading as='h3' size='lg'>
                        Course
                    </Heading>

                    <Stack spacing={5} direction='column' marginTop={5}>
                        <Checkbox colorScheme='red'>
                            Breakfast
                        </Checkbox>
                        <Checkbox colorScheme='green'>
                            Lunch
                        </Checkbox>
                        <Checkbox colorScheme='blue'>
                            Dinner
                        </Checkbox>
                    </Stack>
                </Box>

                {/*Time Options*/}
                <Box bg='tomato'>
                    <Heading as='h3' size='lg'>
                        Time
                    </Heading>

                    <Stack spacing={5} direction='column' marginTop={5}>
                        <Checkbox colorScheme='red'>
                            Instant
                        </Checkbox>
                        <Checkbox colorScheme='green'>
                            Amatuer
                        </Checkbox>
                        <Checkbox colorScheme='blue'>
                            Professional
                        </Checkbox>
                    </Stack>
                </Box>

                {/*Generate Button*/}
                <Box h='40px' bg='pink.100'>
                    <Button
                        colorScheme='blue'
                    >
                        Generate Recipe
                    </Button>
                </Box>
            </VStack>

            {/*<Heading>Course</Heading>*/}
            {/*<Button*/}
            {/*    colorScheme='blue'*/}
            {/*>*/}
            {/*    Generate Recipe*/}
            {/*</Button>*/}
        </Flex>
    )
}
