/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Center, Flex, Heading, HStack, Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { bigBtn, mainText1, mainText2 } from '../styles/components'
import Footer from '../components/Footer'
import { fakedata } from '../assets/fakeData'
import moment from 'moment'
import { assets } from '../assets/assets'

interface ReportsItem {
  date: Date;
  descr: string;
  file: string;
}

interface LastReportProps{
  last: ReportsItem
}

const LastReport: React.FC<LastReportProps> = ({last}) => {

  return (
    <VStack gap='20px' align='flex-start' w='100%'>
      <Text as='span' fontSize='20px' fontWeight={700} color='#181825'>
        Último Relatório
      </Text>
      <Box
        w='100%'
        bg='#FFFFFF'
        borderRadius='6px'
        p='10px 15px 40px'
        boxShadow='0px 3px 14.9px 0px rgba(0, 0, 0, 0.08)'
      >
        <HStack
          w='100%'
          mb='20px'
          align='center'
          p='0 10px 10px'
          justify='space-between'
          borderBottom='0.5px solid #CFCFCF'
        >
          <Flex gap='10px' align='center'>
            <Text as='span' {...mainText2}>
              Atualização
            </Text>
            <Box bg='#3971EF' h='5px' w='5px' borderRadius='1px'></Box>
            <Text as='span' fontSize='18px' fontWeight={600} color='#181825'>
              {moment(last.date).format('DD/MM/YYYY')}
            </Text>
          </Flex>
          <Button
            w='155px'
            {...bigBtn}
            bg='#3971EF'
            color='#FFFFFF'
            lineHeight='23px'
            _hover={{ bg: '#3971EF' }}
          >
            <Center w='100%' h='100%' gap='7px'>
              Baixar PDF
              <Image h='23px' w='23px' src={assets.download_white} pb='2px' alt=''/>
            </Center>
          </Button>
        </HStack>
        <Box p='0 10px'>
          <Text {...mainText2}>
            {last.descr}
          </Text>
        </Box>
      </Box>
    </VStack>
  );
}

const Reports: React.FC = () => {
  const [reportItems, setReportItems] = useState<ReportsItem[]>([]);
  
  useEffect(() => {
    setReportItems(fakedata.reports_items);
  }, []);

  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={3} />
      <Box maxW='1292px' w='100%' m='73px auto 0' pb='120px' minH='calc(100vh - 295px)'>
        <VStack gap='11px' align='flex-start' w='100%' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='41px'>
          <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>Relatórios Mensais</Heading>
          <Text as='span' {...mainText2}>Confira nossos relatórios mensais em um arquivo PDF preparado para você.</Text>
        </VStack>
        {reportItems.length > 0 ? (
          <VStack gap='50px' align='flex-start' w='100%'>
            <LastReport last={reportItems[reportItems.length - 1]} />
            <VStack gap='20px' align='flex-start' w='100%'>
              <Text as='span' fontSize='20px' fontWeight={700} color='#181825'>
                Relatórios anteriores
              </Text>
              <UnorderedList variant='none' p={0} m={0} w='100%'>
                {reportItems.map((item, index) => (
                  <ListItem
                    m={0}
                    w='100%'
                    key={index}
                    borderRadius='8px'
                    listStyleType='none'
                    bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}
                  >
                    <HStack
                      w='100%'
                      h='71px'
                      align='center'
                      p='10px 38px 11px 18px'
                      justify='space-between'
                    >
                      <Flex gap='10px' align='center'>
                        <Text as='span' {...mainText2}>
                          {item.file}
                        </Text>
                        <Box bg='#DEDEDE' h='5px' w='5px' borderRadius='1px'></Box>
                        <Text as='span' fontSize='18px' fontWeight={600} color='#181825'>
                          {moment(item.date).format('DD/MM/YYYY')}
                        </Text>
                      </Flex>
                      <Button
                        w='155px'
                        h='50px'
                        bg='#F9FAFC'
                        color='#FFFFFF'
                        lineHeight='23px'
                        border='1px solid #181825'
                        _hover={{ bg: '#F9FAFC' }}
                      >
                        <Center w='100%' h='100%' gap='7px'>
                          <Text {...mainText1}>Baixar PDF</Text>
                          <Image h='23px' w='23px' src={assets.download_black} pb='2px' alt=''/>
                        </Center>
                      </Button>
                    </HStack>
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </VStack>
        ) : (<></>)}
        
      </Box>
      <Footer />
    </Flex>
  )
}

export default Reports