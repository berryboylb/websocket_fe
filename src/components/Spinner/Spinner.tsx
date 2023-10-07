import { Box } from "@chakra-ui/react";
// import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

function Spinner() {
  return (
    <Box h="100vh" w="100%" display="flex" alignItems="center"  justifyContent="center">
      <ClipLoader size={100} color={"red"} loading={true} />
    </Box>
  );
}

export default Spinner;
