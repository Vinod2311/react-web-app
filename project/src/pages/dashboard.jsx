import { Container, Flex,Button,Box, IconButton, Stack, useColorModeValue, Grid, GridItem, Image, Text, Center, HStack, Icon, Spacer } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import '@fontsource/zcool-xiaowei';
import React from "react"

import Footer from "../components/footer";
import Nav from "../components/navEntry";
import Logo from "../components/logo";
import NavMain from "../components/navMain";
import { useLocation } from "react-router-dom";

const DashboardPage = () =>{
  console.log("Rendering dashboard page")
  

  const userMongo = JSON.parse(sessionStorage.getItem('userMongo'))
  const userFirebase = JSON.parse(sessionStorage.getItem('userFirebase'))
  console.log(userFirebase.email)
  console.log(userMongo.profile.data.email)

  return(
    <>
    <Container  background={'#A0A5CB'} h='100vh' maxW={'1500px'} minW={"1300px"}  minHeight={'800px'} paddingInlineEnd={'0'} paddingInlineStart={'0'}>
        <Grid  h={'100%'} w={'100%'}
         gridTemplateColumns={'1fr 1fr 1fr 1fr'} gridTemplateRows={'400px 1fr 50px'}
         templateAreas={`"logo nav nav nav"
                        "main1 main1 main1 main1"
                        "footer footer footer footer"`}>
        <GridItem  area={'nav'}>
          <NavMain />
        </GridItem>
        <GridItem area={'logo'}>
          <Logo />
        </GridItem>
        <GridItem area={'main1'}>
          </GridItem>
        <GridItem area={'footer'} >
          <Footer />
        </GridItem>
    </Grid>
      
    </Container>
    </>
  );
};


export default DashboardPage