import { Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function About() {

  const [about,setAbout]= useState([]);
  useEffect(()=>{
      fetch('about.json')
      .then(res=>res.json())
      .then(data=> setAbout(data))
  },[])

  console.log(about)

  return (
    <VStack px={{base: 4, md: 12}} align={"flex-start"}>
      <Heading>About Me</Heading>

      <Text>Name: {about[0]?.name}</Text>
      <Text>Email: {about[0]?.email}</Text>
      <Text>University: {about[0]?.university}</Text>
      <Text>Address: {about[0]?.address}</Text>
    </VStack>
  )
}
