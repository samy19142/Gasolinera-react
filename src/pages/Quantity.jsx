import { useState, useEffect } from "react";
import { Grid, Heading, GridItem, Button, Stack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const Quantity = () => {

  const quantity = localStorage.getItem("quantity");
  const [counter, setCounter] = useState(quantity!=null?quantity:"");
  const navigate = useNavigate();

  const sumCounter = (number) => {
    setCounter(counter + number);
  };

  const clearCounter = () => {
    setCounter("");
  };

  useEffect(() => {
    localStorage.setItem("quantity", counter);
  }, [counter]);

  return (
    <>
      <Grid marginBottom={5}>
        <Heading size={"lg"}> Pulse importe</Heading>
        <Heading size={"lg"} fontWeight={"800"}>
          {counter ? <>Q.{counter}</> : <>Q.0 </>}
        </Heading>
      </Grid>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
        {numbers.map((number) => (
          <GridItem
            key={number}
            w={"100%"}
            h={"20"}
            bgGradient={"linear(to-r, gray.200, gray.500)"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"700"}
            boxShadow={"0px 4px 10px -3px rgb(117,117,117)"}
            cursor={"pointer"}
            fontSize={"40px"}
            _hover={{ shadow: "2xl" }}
            onClick={() => sumCounter(number)}
          >
            {number}
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={6} marginTop={"30px"}>
        <GridItem
          w={"100%"}
          h={"20"}
          bgGradient={"linear(to-r, gray.200,gray.500)"}
          colSpan={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          fontWeight={700}
          boxShadow={"0px 10px -3px rgb(117,117,117)"}
          fontSize={"40px"}
          _hover={{ shadow: "2xl" }}
          onClick={() => sumCounter(0)}
        >
          0
        </GridItem>
        <GridItem
          w={"100%"}
          h={"20"}
          colSpan={2}
          boxShadow={"0px 4px 10px -3px rgb(117,117,117)"}
          fontWeight={"700"}
          fontSize={"40px"}
          cursor={"pointer"}
          bg={"yellow"}
          _hover={{ shadow: "2xl" }}
          onClick={clearCounter}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Borrar
        </GridItem>
      </Grid>

      <Box marginTop={"40px"}>
        <Stack
          direction={"row"}
          spacing={4}
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="teal"
            variant={"outline"}
            size={"lg"}
            onClick={() => navigate("/method-payment")}
          >
            Volver atrás
          </Button>

          {counter ? (
            <Button
              leftIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant={"solid"}
              size={"lg"}
              onClick={() => navigate("/resume")}
            >
              Continuar
            </Button>
          ) : (
            ""
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Quantity;
