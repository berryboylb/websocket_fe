import { Suspense, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import Chatbox from "../components/ChatBox";

export default function Chats() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = useChatState();

  return (
    <Suspense>
      <Box w="100%">
        {user && <SideDrawer />} hello
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </Box>
    </Suspense>
  );
}
