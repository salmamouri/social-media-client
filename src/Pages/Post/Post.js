import {
  Button,
  Input,
  Textarea,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export default function Post() {
  let [value, setValue] = React.useState("");
  const { user } = useContext(AuthContext);

  console.log(value);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const addPost = (event) => {
    event.preventDefault();
    const postObject = {
      user: user.email,
      post: value,
      likes: 0,
    };

    axios
      .post("http://localhost:5000/api/posts", postObject)
      .then((response) => console.log(response.data));
    setValue("")
  };
  return (
    <VStack align={"left"} p={6}>
      <Textarea
      maxW={"600px"}
        placeholder="Write your post here"
        value={value}
        onChange={handleInputChange}
      />

      <HStack maxW={"600px"} align="right" justify={"space-between"}>
        <input type="file"></input>
        <Button onClick={addPost}>Submit</Button>
      </HStack>
    </VStack>
  );
}
