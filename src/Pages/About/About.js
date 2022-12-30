import { Button, FormControl, Heading, HStack, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function About() {

  const [about,setAbout]= useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(()=>{
      fetch('about.json')
      .then(res=>res.json())
      .then(data=> setAbout(data))
  },[])

  console.log(about)

  return (
    <VStack px={{base: 4, md: 12}}  py={{base: 4, md: 6}} spacing={6} align={"flex-start"}>
      <HStack>
      <Heading>About Me</Heading>
      <Button onClick={onOpen}>Edit Details</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Edit Your Details
        </ModalHeader>
      </ModalContent>
      <ModalBody>
        <FormControl>
          <Input placeholder='Name'/>
          <Input placeholder='Email'/>
        </FormControl>
      </ModalBody>
      </Modal>
      </HStack>

      <Text>Name: {about[0]?.name}</Text>
      <Text>Email: {about[0]?.email}</Text>
      <Text>University: {about[0]?.university}</Text>
      <Text>Address: {about[0]?.address}</Text>
    </VStack>
  )
}
