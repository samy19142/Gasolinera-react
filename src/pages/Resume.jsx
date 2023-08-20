import {
  Grid,
  Heading,
  Box,
  Image,
  GridItem,
  Button,
  Stack,
} from "@chakra-ui/react";
import ImageConfeti from "../assets/img/confeti.png";
import ImageCar from "../assets/img/car.png";
import ImageGasoil from "../assets/img/gasoil.png";
import ImageMoney from "../assets/img/money-pig.png";
import ImageDrop from "../assets/img/drop.png";
import ImageCapital from "../assets/img/capital.png";

import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Resume = () => {
  const navigate = useNavigate();
  const surtidor = localStorage.getItem("surtidor");
  const typeGasoil = localStorage.getItem("typeGasoil");
  const methodPayment = localStorage.getItem("payment");
  const priceGasoil = localStorage.getItem("priceGasoil");
  const quantity = localStorage.getItem("quantity");

  const finalGallon = quantity / priceGasoil;

  const returnHome = () => {
    localStorage.clear();
    navigate("/");
  };
  const resumeData = [
    {
      title: "Surtidor",
      result: surtidor,
      image: ImageCar,
    },
    {
      title: "Tipo de producto",
      result: typeGasoil,
      image: ImageGasoil,
    },
    {
      title: "Método de pago",
      result: methodPayment,
      image: ImageMoney,
    },
    {
      title: "Cantidad",
      result: ` ${finalGallon.toFixed(2)} Galones`,
      image: ImageDrop,
    },
  ];

  return (
    <>
      <Grid marginBottom={5} textAlign={"center"}>
        <Heading size={"lg"}> Puedes suministrarte!</Heading>
        <Image
          src={ImageConfeti}
          alt="Congratulations"
          width={"100px"}
          margin={"0 auto"}
        />
      </Grid>
      <Grid textAlign={"center"} paddingBottom={"4rem"}>
        <Heading marginBottom={"40px"} size={"sm"}>
          Resumen del pedido:
        </Heading>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={"9"}>
          {resumeData.map((data, index) => (
            <GridItem
              w={"100%"}
              borderRadius={"10"}
              boxShadow={"0px 4px 10px -4px rgb(117,117,117)"}
              padding={"25px 15px"}
              key={index}
            >
              <Box minHeight={"50px"}>
                <Heading size={"sm"}>{data.title}</Heading>
                <Heading size={"md"} fontWeight={"800"}>
                  {data.result}
                </Heading>
              </Box>
              <Image
                src={data.image}
                alt={data.title}
                width={"100px"}
                margin={"0 auto"}
              ></Image>
            </GridItem>
          ))}
        </Grid>
        <Grid
          marginTop={"20px"}
          padding={"20px"}
          boxShadow={"0px 4px 10px -3px rgb(117,117,117)"}
          borderRadius={"10px"}
        >
          <Heading size={"sm"}>Precio total a pagar</Heading>
          <GridItem borderRadius={"10"}>
            <Heading>Q.{quantity}</Heading>
            <Image
              src={ImageCapital}
              alt="price"
              width={"100px"}
              margin={"0 auto"}
            />
          </GridItem>
        </Grid>
        <Box marginTop={"40px"}>
          <Stack
            direction={"row"}
            spacing={"4"}
            cursor={"pointer"}
            onClick={returnHome}
          >
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="teal"
              variant={"outline"}
            >
              Volver a inicio
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default Resume;
