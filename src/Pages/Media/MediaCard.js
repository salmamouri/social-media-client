import {  Box, Button, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text,CardFooter, HStack } from '@chakra-ui/react';
import React from 'react'
import {BiShare,BiLike,BiChat} from 'react-icons/bi'

export default function MediaCard({post}) {
   const {name,like,comment}=post;

   const increaseLike = id => {
    const url = `http://localhost:5000/api/posts/${id}`
    const post = 1
   }

  return (
    <div>
        <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

        <Box>
          <Heading size='sm'>{name}</Heading>
          <Text>{post?.user}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
     {post?.post}
    </Text>
  </CardBody>
  {/* <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  /> */}

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <HStack>
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      {like} {" "} 
    </Button>
    <Text>{post?.likes}</Text>
    </HStack>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      {comment}
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
  </CardFooter>
</Card>
    </div>
  )
}
