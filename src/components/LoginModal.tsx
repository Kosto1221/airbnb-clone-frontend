import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  // Text,
  VStack,
} from "@chakra-ui/react";
import { FaUserNinja, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
// import { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IForm {
  username: string;
  password: string;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   const { name, value } = event.currentTarget;
  //   if (name === "username") {
  //     setUsername(value);
  //   } else if (name === "password") {
  //     setPassword(value);
  //   }
  // };
  // const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(username, password);
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch
  } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          as="form"
          // onSubmit={onSubmit as any}
          onSubmit={handleSubmit(onSubmit)}
        >
          <VStack>
            <InputGroup size={"md"}>
              <InputLeftElement
                children={
                  <Box color="gray.500">
                    <FaUserNinja />
                  </Box>
                }
              />
              <Input
                isInvalid={Boolean(errors.username?.message)}
                // required
                // name="username"
                {...register("username", {
                  required: "Please write a username",
                })}
                // onChange={onChange}
                variant={"filled"}
                placeholder="Username"
                // value={username}
              />
              {/* <Text fontSize={"sm"} color="red.500">
                {errors.username?.message}
              </Text> */}
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color="gray.500">
                    <FaLock />
                  </Box>
                }
              />
              <Input
                isInvalid={Boolean(errors.password?.message)}
                // required
                // name="password"
                {...register("password", {
                  required: "Please write a password",
                })}
                type="password"
                // onChange={onChange}
                variant={"filled"}
                placeholder="Password"
                // value={password}
              />
              {/* <Text fontSize={"sm"} color="red.500">
                {errors.password?.message}
              </Text> */}
            </InputGroup>
          </VStack>
          <Button type="submit" mt={4} colorScheme={"red"} w="100%">
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
