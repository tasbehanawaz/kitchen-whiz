import {
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text
} from "@chakra-ui/react";
import React from "react";

interface RecipeMiniCardProps {
    name: string;
    image: string;
    description: string;
}

export function RecipeMiniCard({name, image, description}: RecipeMiniCardProps) {
    return (
        <Flex direction="column" height="100%" width="100%">
            <Image
                src={image}
                width="100%"
                height="100%"
                objectFit="cover"
                position="relative"
            />
            <Box
                position="absolute"
                bottom="0"
                width="100%"
                backgroundColor="rgba(0, 0, 0, 0.2)"
                p={4}
            >
                <Heading as="h4" size="md" color="white">
                    {name}
                </Heading>
                <Text color="white">{description}</Text>
            </Box>
        </Flex>
    );
}


export default function Recipes() {
    const recipes = [
        {
            name: "Recipe 1",
            image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 2",
            image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 3",
            image: "https://images.unsplash.com/photo-1560963805-6c64417e3413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3472&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 4",
            image: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3035&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 5",
            image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 6",
            image: "https://plus.unsplash.com/premium_photo-1669150851934-4cfdb7b1e869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 7",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3280&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 8",
            image: "https://plus.unsplash.com/premium_photo-1694707235503-dedaf712f35e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
            description: "Some recipe description"
        },
        {
            name: "Recipe 9",
            image: "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80",
            description: "Some recipe description"
        },
    ]

    return (
        <Box>
            <Heading>Whizzed up</Heading>

            <SimpleGrid columns={3} spacingY='5vh' spacingX={10}>
                {[...Array(9)].map((_, i) => (
                    <Box position="relative" height='25vh' border="1px solid white">
                        <RecipeMiniCard
                            name={recipes[i].name}
                            image={recipes[i].image}
                            description={recipes[i].description}
                        />
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    )
}
