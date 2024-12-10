/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Box, Flex, Heading, VStack, Text, Button, Input, HStack, Grid, Image, GridItem, Center, Link } from '@chakra-ui/react';
import { inputStyle, mainText2, samllBtn } from '../styles/components';
import { fakedata } from '../assets/fakeData';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';

interface HighlightProps {
  symbol: string;
  icon: string;
  sparkline: string;
  coinmarket: string;
}

const Highlight: React.FC<HighlightProps> = ({symbol, icon, sparkline, coinmarket}) => {
  return (
    <Box
      w='305px'
      h='267px'
      bg='#FFF'
      cursor='pointer'
      borderRadius='6px'
      boxShadow='0px 3px 14.9px 0px rgba(0, 0, 0, 0.08)'
    >
      <HStack
        h='55px'
        w='100%'
        align='center'
        p='15px 15px 14px'
        justify='space-between'
        borderBottom='1px solid #CFCFCF'
      >
        <Flex align='center' gap='2px'>
          <Box w='20px' h='20px' overflow='hidden' borderRadius='50%'>
            <Image src={icon} w='100%' h='100%' objectFit='cover' objectPosition='center' alt=''/>
          </Box>
          <Text as='span' {...mainText2} pt='2px'>{symbol}</Text>
        </Flex>
        <Text as='span' {...mainText2}>Últimos 7 Dias</Text>
      </HStack>
      <Center w='100%' h='134px' borderBottom='1px solid #CFCFCF'>
        <Image src={sparkline} alt='' />
      </Center>
      <Flex w='100%' justify='flex-end' align='center' h='78px' p='13px 15px 15px'>
        <Link
          isExternal
          href={coinmarket}
          w='134px'
          h='50px'
          bg='#3971EF'
          borderRadius='8px'
          _hover={{textDecor: 'none'}}
        >
          <Center w='100%' h='100%'>
            <Flex align='center' gap='8px'>
              <Text as='span' color='#FFFFFF' fontSize='18px' fontWeight={400}>Ver mais</Text>
              <Image src={assets.white_external} alt='' />
            </Flex>
          </Center>
        </Link>
      </Flex>
    </Box>
  )
}

const Highlights: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(fakedata.highlights_items);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    const filtered = fakedata.highlights_items.filter(item =>
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm]);

  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={2} />
      <Box maxW='1292px' w='100%' m='73px auto 0' minH='calc(100vh - 295px)' pb='121px'>
        <HStack align='flex-end' w='100%' justify='space-between' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='30px'>
          <VStack gap='11px' align='flex-start' w='100%'>
            <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>Destaques</Heading>
            <Text as='span' {...mainText2}>
              Confira as moedas que selecionamos para destaque e que você deveria ficar de olho.
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
        <Grid w='100%' gridTemplateColumns='repeat(4, 1fr)' rowGap='30px' columnGap='24px'>
          {filteredItems.map((item, index) => (
            <GridItem key={index}>
              <Highlight
                symbol={item.symbol}
                icon={item.logo}
                sparkline={item.sparkline}
                coinmarket={item.url}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Flex>
  );
}

export default Highlights;