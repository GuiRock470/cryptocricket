import { Box, Flex, Heading, VStack, Text, Button, HStack, Input, Grid, GridItem, Center, Image} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { fakedata } from '../assets/fakeData';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { inputStyle, mainText2, samllBtn } from '../styles/components';

const Analysis: React.FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(fakedata.analysis_items);

  const handleClick = (symbol: string) => {
    navigate(`/analysis/${symbol}`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    const filtered = fakedata.analysis_items.filter(item =>
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm]);
  
  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={4} />
      <Box maxW='1292px' w='100%' m='73px auto 0' minH='calc(100vh - 295px)'>
        <HStack align='flex-end' w='100%' justify='space-between' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='30px'>
          <VStack gap='11px' align='flex-start' w='100%'>
            <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>
              Análise fundamentalista
            </Heading>
            <Text as='span' {...mainText2}>
              Confira nossas análises feitas para cada moeda com características e previsões de preço.
            </Text>
          </VStack>
          <HStack gap='8px' align='center' h='50px'>
            <Input
              w='280px'
              {...inputStyle}
              value={searchValue}
              onChange={handleSearchChange}
              placeholder='Pesquise uma moeda aqui'
              _placeholder={{ color: '#73787E' }}
            />
            <Button
              {...samllBtn}
              bg='#3971EF'
              color='#FFFFFF'
              _hover={{ bg: '#3971EF' }}
              onClick={handleSearch}
            >
              Pesquisar
            </Button>
          </HStack>
        </HStack>
        <Grid gridTemplateColumns='repeat(4, 1fr)' mb='120px'>
          {filteredItems.map((item, index) => (
            <GridItem key={index} onClick={() => handleClick(item.symbol)}>
              <Center
                w='305px'
                h='175px'
                bg='#FFF'
                cursor='pointer'
                borderRadius='6px'
                boxShadow='0px 3px 14.9px 0px rgba(0, 0, 0, 0.08)'
              >
                <VStack gap='18px'>
                  <Box w='40px' h='40px' overflow='hidden' borderRadius='50%'>
                    <Image src={item.logo} w='100%' h='100%' objectFit='cover' objectPosition='center' alt=''/>
                  </Box>
                  <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>
                    {item.symbol}
                  </Text>
                </VStack>
              </Center>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </Flex>
    );
  }

export default Analysis