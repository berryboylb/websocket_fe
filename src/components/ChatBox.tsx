import { Box } from "@chakra-ui/layout";
import SingleChat from "./SingleChat";
import { useChatState } from "../Context/ChatProvider";
import React, { SetStateAction } from "react";
interface Props {
  fetchAgain: boolean;
  setFetchAgain: React.Dispatch<SetStateAction<boolean>>;
}
const Chatbox = ({ fetchAgain, setFetchAgain }: Props) => {
  const { selectedChat } = useChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
