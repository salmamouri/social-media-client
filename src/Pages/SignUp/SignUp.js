import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
    Icon,
    VStack
  } from '@chakra-ui/react';
 
  import React, { useContext, useState } from "react";
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaGoogle } from 'react-icons/fa';

import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider';
  
  export default function SignUp() {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
  
      console.log(email, password, name);
  
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
  
          form.reset();
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const { providerLogin } = useContext(AuthContext);
  
    const googleProvider = new GoogleAuthProvider();
  
    const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => console.error(error));
    };
    const [showPassword, setShowPassword] = useState(false);
  
    return (
        <Box>
        <form
          style={{
            width: "400px",
            margin: "auto",
            marginTop: "80px",
            marginBottom: "30px",
          }}
          onSubmit={handleSubmit}
          my={24}
        >
          <FormControl id="Name">
            <FormLabel>Name</FormLabel>
            <Input name="name" type="text" />
          </FormControl>
  
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" />
          </FormControl>
  
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" />
          </FormControl>
  
          <Button fontSize={20} my={4} colorScheme="blue" type="submit">
            Sign Up
          </Button>
  
          <Text fontSize={20} fontWeight={500}>
            Already have an account?
            <Link to="/login">
              <Box color="blue.600" mx={2} fontWeight={500} as="span">
                Login
              </Box>
            </Link>
          </Text>
        </form>
        <Center>
          <Button my={4} colorScheme="blue" onClick={handleGoogleSignIn}>
            <Icon mx={3} as={FaGoogle} />
            SignUp with Google
          </Button>
        </Center>
      </Box>
    );
  }