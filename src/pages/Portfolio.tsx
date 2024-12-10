/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useRef } from 'react';
import Navbar from '../components/Navbar';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack
} from '@chakra-ui/react';
import { assets } from '../assets/assets';
import { fakedata } from '../assets/fakeData';
import Footer from '../components/Footer';
import DoughnutChart from '../components/DoughnutChart';
import { RiskColors } from '../@types/portfolio';
import { bigBtn, inputStyle, samllBtn } from '../styles/components';


const tabs = [
  {
    index: 0,
    label: 'Conservadorzão',
    descr: (
      <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>
        O perfil <b>Conservadorzão</b> é indicado para usuários que querem arriscar muito pouco em seus investimentos.<br/>
        Para ver detalhes mais específicos, por favor <Link color='#4880FF' isExternal>assista o vídeo</Link> desse perfil.
      </Text>
    )
  },
  {
    index: 1,
    label: 'Conservador',
    descr: (
      <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>
        O perfil <b>Conservador</b> é indicado para usuários que querem arriscar pouco em seus investimentos.<br/>
        Para ver detalhes mais específicos, por favor <Link color='#4880FF' isExternal>assista o vídeo</Link> desse perfil.
      </Text>
    )
  },
  {
    index: 2,
    label: 'Moderado',
    descr: (
      <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>
        O perfil <b>Moderado</b> é indicado para usuários que querem buscam uma experiência mais equilibrada com seus investimentos.<br/>
        Para ver detalhes mais específicos, por favor <Link color='#4880FF' isExternal>assista o vídeo</Link> desse perfil.
      </Text>
    )
   },
  {
    index: 3,
    label: 'Agressivo',
    descr: (
      <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>
        O perfil <b>Agressivo</b> é indicado para usuários que buscam altos ganhos com investimentos arriscados.<br/>
        Para ver detalhes mais específicos, por favor <Link color='#4880FF' isExternal>assista o vídeo</Link> desse perfil.
      </Text>
    )
  },
];

const calculateTotalsAndReturn = (items: any[]) => {
  if (items.length === 0) {
    return {
      totalInvestedFormatted: '--',
      totalFinalFormatted: '--',
      potentialReturnFormatted: '--',
    };
  }

  const totalInvested = items.reduce((sum, item) => {
    const investValue = parseFloat(item.invest.replace(/[^\d,]/g, '').replace(',', '.'));
    return sum + investValue;
  }, 0);
  const totalFinal = items.reduce((sum, item) => {
    const finalValue = parseFloat(item.final_balance.replace(/[^\d,]/g, '').replace(',', '.'));
    return sum + finalValue;
  }, 0);
  const potentialReturn = ((totalFinal - totalInvested) / totalInvested) * 100;

  return {
    totalInvestedFormatted: totalInvested.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    totalFinalFormatted: totalFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    potentialReturnFormatted: potentialReturn.toFixed(2).replace('.', ',') + '%',
  };
};

const PortfolioTable: React.FC<{ riskLevel: number }> = ({ riskLevel }) => {
  const chartSectionRef = useRef<HTMLDivElement>(null);
  const items = fakedata.portifolio_items.filter(item => item.risk === riskLevel);
  const totalItems = Math.max(8, items.length); 
  const emptyRows = Array(totalItems - items.length).fill(null);

  const {
    totalInvestedFormatted,
    totalFinalFormatted,
    potentialReturnFormatted
  } = useMemo(() => calculateTotalsAndReturn(items), [items]);
  

  const riskColors: RiskColors = {
    0: {
      bg: 'rgba(62, 200, 68, 0.06)',
      text: '#3EC844'
    },
    1: {
      bg: 'rgba(255, 193, 7, 0.06)',
      text: '#FFC107'
    },
    2: {
      bg: 'rgba(255, 152, 0, 0.06)',
      text: '#FF9800'
    },
    3: {
      bg: 'rgba(244, 67, 54, 0.06)',
      text: '#F44336'
    }
  };

  const chartData = items.length > 0 ? items.map((data) => ({
    name: data.name,
    alocation: parseFloat(data.alocation.replace('%', ''))
  })) : [];

  const scrollToChart = () => {
    chartSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <VStack gap='15px' align='flex-start' w='100%' p='42px 0 30px' borderBottom='1px solid #CFCFCF' mb='40px'>
        <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>{tabs[riskLevel].label}</Heading>
        {tabs[riskLevel].descr}
      </VStack>
      <VStack gap='14px' align='flex-start' mb='20px'>
        <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>
          Simule seu investimento
        </Text>
        <Flex align='center' justify='space-between' w='100%'>
          <HStack gap='5px' align='center' h='50px'>
            <Input
              w='400px'
              {...inputStyle}
              placeholder='Insira o Valor do seu investimento*'
              _placeholder={{ color: '#73787E' }}
            />
            <Button
              bg='#3971EF'
              color='#FFFFFF'
              {...samllBtn}
              _hover={{bg: '#3971EF'}}
            >
              Atualizar
            </Button>
          </HStack>
          <Button
            w='208px'
            bg='#181825'
            color='#FFFFFF'
            {...bigBtn}
            _hover={{ bg: '#181825' }}
            isDisabled={items.length > 0 ? false : true}
            _disabled={{ opacity: 0.2 }}
            onClick={scrollToChart}
          >
            <Image src={assets.chart} alt='' mr='6px' />
            Visualizar gráfico
          </Button>
        </Flex>
      </VStack>
      <Table variant='none'>
        <Thead>
          <Tr>
            <Th h={63} pl={0} whiteSpace='nowrap'>Ativos Convexos</Th>
            <Th h={63} pl={0} whiteSpace='nowrap'>Preço Hoje ($)</Th>
            <Th h={63}>Estimativa</Th>
            <Th h={63}>Retorno</Th>
            <Th h={63}>Investimento</Th>
            <Th h={63}>Alocação</Th>
            <Th h={63}>Saldo Final</Th>
            <Th h={63}>Risco</Th>
            <Th h={63}>URL</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, index) => (
            <Tr key={index}>
              <Td h={71} borderStartRadius={10} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                <Flex align='center' gap='5px'>
                  <Image src={item.logo} alt='' w={17} h={17} />
                  {item.name}
                </Flex>
              </Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} pl={0} whiteSpace='nowrap'>
                <Text as='b'>{item.price}</Text>
              </Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>{item.estimate}</Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>{item.return}</Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>{item.invest}</Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>{item.alocation}</Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>{item.final_balance}</Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} minW={105}>
                <Tag
                  p='10px 14px 9px'
                  borderRadius={6}
                  borderWidth='0.7px'
                  borderStyle='solid'
                  bg={riskColors[item.risk].bg}
                  borderColor={riskColors[item.risk].text}
                  color={riskColors[item.risk].text}
                >
                  {riskLevel === 0 ? 'Baixíssimo' : riskLevel === 1 ? 'Baixo' : riskLevel === 2 ? 'Moderado' : 'Alto'}
                </Tag>
              </Td>
              <Td h={71} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} borderEndRadius={10}>
                <Link href={item.url} isExternal>
                  <Image src={assets.external} alt='' />
                </Link>
              </Td>
            </Tr>
          ))}
          {emptyRows.map((_, index) => {
            const adjustedIndex = items.length + index;
            return (
              <Tr key={`empty-${adjustedIndex}`}>
                <Td h={71} borderStartRadius={10} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                  <Flex align='center' gap='5px'>
                    <Box w={17} h={17} borderRadius='10px' bg='#D7D7D7'></Box>
                    Moeda
                  </Flex>
                </Td>
                <Td h={71} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'} pl={0} whiteSpace='nowrap'>
                  <Text as='span' color='#73787E' fontSize='16px'>--</Text>
                </Td>
                <Td h={71} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                  <Text as='span' color='#73787E' fontSize='16px'>--</Text>
                </Td>
                <Td bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                  <Text as='span' color='#73787E' fontSize='16px'>--</Text>
                </Td>
                <Td h={71} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                  <Text as='span' color='#73787E' fontSize='16px'>--</Text>
                </Td>
                <Td h={71} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                  <Text as='span' color='#73787E' fontSize='16px'>--</Text>
                </Td>
                <Td h={71} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                  <Text as='span' color='#73787E' fontSize='16px'>--</Text>
                </Td>
                <Td h={71} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'} minW={105}></Td>
                <Td h={71} bg={adjustedIndex % 2 === 0 ? '#F9FAFC' : 'transparent'} borderEndRadius={10}></Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      <Box mt='60px'>
        <Flex gap='12px' align='center'>
          <Text as='span' fontSize='20px' fontWeight={400}>
            Total e Potencial
          </Text>
          <Divider orientation='vertical' borderColor='#C6C6C6' h='33.5px' />
          <Text as='span' fontSize='22px' fontWeight={600}>
            {tabs[riskLevel].label}
          </Text>
        </Flex>
        <Flex align='center' mt='22.5px' gap='4px'>
          <Box
            borderRadius='8px 0px 0px 8px'
            border='1px solid #E6E6E6'
            p='20px 35px 25px 18px'
            minW='191px'
          >
            <VStack align='flex-start' gap='12px' w='100%'>
              <Text as='span' color='#73787E' fontSize='16px' fontWeight={400}>
                Total Investido
              </Text>
              <Divider orientation='horizontal' borderColor='#C6C6C6' w='18.5px' />
              <Box pt='2px'>
                <Text as='span' fontSize='22px' fontWeight={600} color='#181825'>
                  {totalInvestedFormatted}
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box
            borderRadius='0px'
            border='1px solid #E6E6E6'
            p='20px 35px 25px 18px'
            minW='191px'
          >
            <VStack align='flex-start' gap='12px' w='100%'>
              <Text as='span' color='#73787E' fontSize='16px' fontWeight={400}>
                Potencial Total Final
              </Text>
              <Divider orientation='horizontal' borderColor='#C6C6C6' w='18.5px' />
              <Box pt='2px'>
                <Text as='span' fontSize='22px' fontWeight={400} color='#181825'>
                  {totalFinalFormatted}
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box
            borderRadius='0px 8px 8px 0px'
            border='1px solid #E6E6E6'
            p='20px 35px 25px 18px'
            minW='191px'
          >
            <VStack align='flex-start' gap='12px' w='100%'>
              <Text as='span' color='#73787E' fontSize='16px' fontWeight={400}>
                Potencial de Retorno %
              </Text>
              <Divider orientation='horizontal' borderColor='#C6C6C6' w='18.5px' />
              <Box pt='2px'>
                <Text as='span' fontSize='22px' fontWeight={400} color='#181825'>
                  {potentialReturnFormatted}
                </Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>

      <Box m='60px 0 150px' ref={chartSectionRef}>
        <VStack gap='15px' align='flex-start' w='100%' p='0 0 12px' borderBottom='1px solid #CFCFCF' mb='35px'>
          <Text as='span' color='#181825' fontSize='18px' fontWeight={400}>
            Gráfico do Investimento
          </Text>
        </VStack>
        <DoughnutChart data={chartData} />
      </Box>
    </Box>
)};

const Portfolio: React.FC = () => {  
  
  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={1} />
      <Box maxW='1292px' w='100%' m='73px auto 0' minH='calc(100vh - 295px)'>
        <Box w='100%' pt='40px'>
          <Tabs variant='none'>
            <Flex align='center' justify='space-between' w='100%'>
              <TabList>
                <Flex align='center' gap='10px'>
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.index}
                      borderRadius={8}
                      p='12px 20px'
                      fontSize='18px'
                      fontWeight={400}
                      border='1px solid #DEDEDE'
                      _selected={{ color: '#4880FF', bg: 'rgba(72, 128, 255, 0.06)', border: '1px solid #4880FF' }}
                      color='#181825'
                      bg='transparent'
                    >
                      {tab.label}
                    </Tab>
                  ))}
                </Flex>
              </TabList>
            </Flex>

            <TabPanels>
              {tabs.map((tab) => (
                <TabPanel p={0} key={tab.index}>
                  <PortfolioTable riskLevel={tab.index} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Footer/>
    </Flex>
  );
};

export default Portfolio;
