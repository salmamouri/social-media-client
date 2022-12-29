import { Button, Input, Textarea, VStack,Icon, HStack } from '@chakra-ui/react'
import React from 'react'
import {GrGallery} from 'react-icons/gr'

export default function Post() {
  return (
    <VStack>
        <Textarea w='800px' placeholder='Here is a sample placeholder' />
       
       <HStack align='right'>
       <input type='file'></input>
       <Button>Submit</Button>
       </HStack>

    </VStack>
  )
}
