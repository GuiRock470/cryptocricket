/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, VStack, Heading, Text, Image, ListItem, Flex, HStack, Button, UnorderedList, ListIcon } from '@chakra-ui/react';
import { fakedata } from '../assets/fakeData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';

const AnalysisDetails: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const analysisItem = fakedata.analysis_items.find(item => item.symbol === symbol);
  const navigate = useNavigate();

  if (!analysisItem) {
    return <div>Item não encontrado</div>;
  }

  const boldText = (text: string) => {
    const priceRegex = /\$[\d,]+(?:\sUSD)?(?:\s\(R\$[\d,]+(?:\se\sR\$[\d,]+)*\))?/g;
    const parts = text.split(priceRegex);
    const matches = text.match(priceRegex);
  
    return (
      <>
        {parts.reduce((acc, part, index) => (
          matches && matches[index] 
            ? [...acc, part, <b key={index}>{matches[index]}</b>] 
            : [...acc, part]
        ), [] as (string | JSX.Element)[])}
      </>
    );
  };

  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={4} />
      <Box maxW='1292px' w='100%' m='73px auto 120px' minH='calc(100vh - 295px)'>
        <HStack align='flex-end' w='100%' justify='space-between' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='31px'>
          <VStack gap='11px' align='flex-start' w='100%'>
            <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>Análise fundamentalista</Heading>
            <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>Confira nossas análises feitas para cada moeda com características e previsões de preço.</Text>
          </VStack>
          <Button
            p={0}
            h='50px'
            minW='117px'
            bg='#181825'
            border='none'
            outline='none'
            color='#FFFFFF'
            fontSize='16px'
            fontWeight={400}
            _hover={{ bg: '#181825' }}
            onClick={() => navigate('/analysis')}
          >
            Voltar
          </Button>
        </HStack>
        <VStack w='100%' gap='55px' align='flex-start'>
          <VStack w='100%' gap='15px' align='flex-start'>
            <Flex align='center' gap='10px'>
              <Box w='32px' h='32px' overflow='hidden' borderRadius='50%'>
                <Image src={analysisItem.logo} w='100%' h='100%' objectFit='cover' objectPosition='center' alt=''/>
              </Box>
              <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>
                {analysisItem.name}
              </Heading>
            </Flex>
            <Text m={0} color='#181825' fontSize='18px'>
              {analysisItem.decr}
            </Text>
          </VStack>
          <VStack w='100%' gap='20px' align='flex-start'>
            <Flex align='center' gap='8px'>
              <Box p='5px' overflow='hidden' h='30px' w='30px' borderRadius='6px' bg='#181825'>
                <Image src={assets.clipBoard} w='100%' h='100%' objectFit='cover' objectPosition='center' alt=''/>
              </Box>
              <Text as='span' color='#181825' fontSize='20px' fontWeight={700}>Visão Geral</Text>
            </Flex>
            <Text m={0} color='#181825' fontSize='18px'>
              {analysisItem.general}
            </Text>
          </VStack>
          <VStack w='100%' gap='20px' align='flex-start'>
            <Flex align='center' gap='8px'>
              <Box p='5px' overflow='hidden' h='30px' w='30px' borderRadius='6px' bg='#181825'>
                <Image src={assets.clipBoard} w='100%' h='100%' objectFit='cover' objectPosition='center' alt=''/>
              </Box>
              <Text as='span' color='#181825' fontSize='20px' fontWeight={700}>Características Principais</Text>
            </Flex>
            <UnorderedList variant='none' p={0} m={0}>
              {analysisItem.main_features.map((feature, index) => (
                <ListItem
                  key={index}
                  minH='26px'
                  display='flex'
                  alignItems='flex-start'
                  gap='11px'
                  mb={index < analysisItem.main_features.length ? '15px' : '0px'}
                >
                  <ListIcon as={() => <Image src={assets.listIcon} alt='' />} pt='3px' />
                  <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>{feature}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </VStack>
          <VStack w='100%' gap='20px' align='flex-start'>
            <Flex align='center' gap='8px'>
              <Box p='5px' overflow='hidden' h='30px' w='30px' borderRadius='6px' bg='#181825'>
                <Image src={assets.clipBoard} w='100%' h='100%' objectFit='cover' objectPosition='center' alt=''/>
              </Box>
              <Text as='span' color='#181825' fontSize='20px' fontWeight={700}>Aspectos Tecnológicos</Text>
            </Flex>
            <UnorderedList variant='none' p={0} m={0}>
              {analysisItem.tech_aspects.map((aspect, index) => (
                <ListItem
                  key={index}
                  minH='26px'
                  display='flex'
                  alignItems='flex-start'
                  gap='11px'
                  mb={index < analysisItem.tech_aspects.length ? '15px' : '0px'}
                >
                  <ListIcon as={() => <Image src={assets.listIcon} alt='' />} pt='3px'/>
                  <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>{aspect}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </VStack>
          <Box w='100%' p='20px 20px 40px' borderRadius='8px' bg='#F9FAFC'>
            <VStack w='100%' gap='20px' align='flex-start'>
              <Flex align='center' gap='8px'>
                <Box p='5px' overflow='hidden' h='30px' w='30px' borderRadius='6px' bg='#181825'>
                  <Image src={assets.clipBoard} w='100%' h='100%' objectFit='cover' objectPosition='center' alt=''/>
                </Box>
                <Text as='span' color='#181825' fontSize='20px' fontWeight={700}>Previsões de Preço*</Text>
              </Flex>
              <UnorderedList variant='none' p={0} m={0}>
                <ListItem
                  minH='26px'
                  display='flex'
                  alignItems='flex-start'
                  gap='11px'
                  mb='15px'
                >
                  <ListIcon as={() => <Image src={assets.listIcon} alt='' />} pt='3px'/>
                  <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>
                    {boldText(`Curto Prazo (${analysisItem.predictions.short.year}): ${analysisItem.predictions.short.price}`)}
                  </Text>
                </ListItem>
                <ListItem
                  minH='26px'
                  display='flex'
                  alignItems='flex-start'
                  gap='11px'
                  mb='15px'
                >
                  <ListIcon as={() => <Image src={assets.listIcon} alt='' />} pt='3px'/>
                  <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>
                    Motivo: {analysisItem.predictions.short.reasons}
                  </Text>
                </ListItem>
                <ListItem
                  minH='26px'
                  display='flex'
                  alignItems='flex-start'
                  gap='11px'
                  mb='15px'
                >
                  <ListIcon as={() => <Image src={assets.listIcon} alt='' />} pt='3px'/>
                  <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>
                    {boldText(`Longo Prazo (${analysisItem.predictions.long.year}): ${analysisItem.predictions.long.price}`)}
                  </Text>
                </ListItem>
                <ListItem
                  minH='26px'
                  display='flex'
                  alignItems='flex-start'
                  gap='11px'
                  mb='15px'
                >
                  <ListIcon as={() => <Image src={assets.listIcon} alt='' />} pt='3px'/>
                  <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>
                    Motivo: {analysisItem.predictions.long.reasons}
                  </Text>
                </ListItem>
                <ListItem
                  minH='26px'
                  display='flex'
                  alignItems='flex-start'
                  gap='11px'
                  mb='15px'
                >
                  <ListIcon as={() => <Image src={assets.listIcon} alt='' />} pt='3px'/>
                  <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>
                    {boldText(`Máxima Histórica: ${analysisItem.hist_max}`)}
                  </Text>
                </ListItem>
              </UnorderedList>
            </VStack>
          </Box>
        </VStack>
      </Box>
      <Footer/>
    </Flex>
  );
}

export default AnalysisDetails;
