import {
    Button,
    Flex,
    Heading, Input,
    List,
    ListItem,
    Modal, ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay, StackDivider,
    Text,
    useDisclosure, VStack
} from "@chakra-ui/react";
import React, {useState} from "react";

export default function Kitchen() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selectedItem, setSelectedItem] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [fruitAndVegList, setFruitAndVegList] = useState<string[]>([]);

    const items = [
        "Fruits",
        "Vegetables",
        "Spices",
        "Drinks"
    ];

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        onOpen();
    }

    const handleInputKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setFruitAndVegList([...fruitAndVegList, inputValue]);
            setInputValue("");
        }
    }

    const handleDelete = (item: string) => {
        setFruitAndVegList(fruitAndVegList.filter(i => i !== item));
    }

    return (
        <>
            <Flex
                justifyContent="space-around"
                alignItems="flex-end"
                position="fixed"
                bottom="0"
                left="0"
                width="100%"
                height="10%"
                backgroundColor="blue.200"
            >
                <List display="flex" alignItems="center">
                    {items.map((item) => (
                        <ListItem
                            key={item}
                            border="1px solid black"
                            borderRadius="10px"
                            margin={2}
                            padding={2}
                            textColor='black'
                            fontWeight='bold'
                            onClick={() => handleItemClick(item)}
                        >
                            <Heading size='sm'>
                                {item}
                            </Heading>
                            <Text>
                                5 items
                            </Text>
                        </ListItem>
                    ))}
                </List>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {selectedItem}
                        <Button
                            variant="ghost"
                            colorScheme="gray"
                            ml="auto"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalHeader>
                    <ModalBody>
                        <Input
                            placeholder={`Type the name of a ${selectedItem}`}
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyPress={handleInputKeyPress}
                        />
                        <VStack mt={4} spacing={4} divider={<StackDivider borderColor="gray.200" />}>
                            {fruitAndVegList.map((item, index) => (
                                <Flex
                                    key={index}
                                    align="center"
                                    width="100%"
                                    px={4}
                                >
                                    <Text flex={1} textAlign="left">
                                        {item}
                                    </Text>
                                    <Button
                                        colorScheme="gray"
                                        variant="outline"
                                        onClick={() => handleDelete(item)}
                                    >
                                        Delete
                                    </Button>
                                </Flex>
                            ))}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}