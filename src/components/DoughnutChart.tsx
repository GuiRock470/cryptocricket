/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Box, Center, Flex, HStack, ListItem, UnorderedList, VStack, Text, Divider } from '@chakra-ui/react';
import { mainText1 } from '../styles/components';
import { ChartProps } from '../@types/chart';

const COLORS = ['#F78EF0', '#937DF8', '#6D9EFC', '#69EBFC', '#98F786', '#F3F87F', '#FDC170', '#FB7B77'];
const COLOR_EMPTY = {
  chartColor: '#CDCDCF',
  name: 'Moeda',
  alocation: '0%'
};

const DoughnutChart: React.FC<ChartProps> = ({ data }) => {
  const splitDataIntoGroups = (arr: any[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      groups.push(arr.slice(i, i + groupSize));
    }
    return groups;
  };

  const dataGroups = splitDataIntoGroups(data, 4);
  
  return (
    <Flex gap='50px' align='center' h='210px'>
      <Center boxShadow='0px 1.913px 23.918px rgba(0, 0, 0, 0.08)' p='5px' borderRadius='50%' w='210px' h='210px'>
        {data.length > 0 ? (
          <PieChart width={200} height={200}>
            <Pie
              cx={95}
              cy={95}
              data={data}
              fill="#8884d8"
              outerRadius={95}
              innerRadius={50}
              labelLine={false}
              dataKey="alocation"
              paddingAngle={data.length > 0 ? 3 : 0}
            >
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={data.length > 0 ? COLORS[index % COLORS.length] : COLOR_EMPTY.chartColor} />
              ))}
            </Pie>
          </PieChart>
        ) : (
          <Box p='5px' w={200} h={200}>
            <Center w='100%' h='100%' bg='#CDCDCF' borderRadius='50%'>
              <Box w='100px' h='100px' bg='#FFF' borderRadius='50%'></Box>
            </Center>
          </Box>
        )}
      </Center>
      {data.length > 0 ?
        (
          <Flex gap='20px' align='flex-start' h='100%'>
            {dataGroups.map((group, groupIndex) => (
              <UnorderedList key={groupIndex} variant='none' p={0} m={0} w='364px' listStyleType='none'>
                <VStack align='flex-start' gap='2px' w='100%'>
                  {group.map((item, index) => (
                    <ListItem key={index} w='100%'>
                      <HStack gap='5px' align='center' h='51px' w='100%'>
                        <Center
                          h='51px'
                          minW='51px'
                          borderRadius='8px'
                          bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}
                          border={index % 2 === 0 ? '1px solid #F9FAFC': '1px solid #E6E6E6'}
                        >
                          <Box bg={COLORS[(groupIndex * 4 + index) % COLORS.length]} borderRadius='4px' h='21px' w='21px'></Box>
                        </Center>
                        <Flex
                          w='100%' h='51px'
                          borderRadius='8px'
                          p='13px 18px 12px'
                          bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}
                          border={index % 2 === 0 ? '1px solid #F9FAFC': '1px solid #E6E6E6'}
                        >
                          <Box w='52px'>
                            <Text as='span' {...mainText1}>
                              {item.alocation}%
                            </Text>
                          </Box>
                          <Divider orientation='vertical' borderColor='#C6C6C6' h='23px' m='0 18px 0 0' />
                          <Text as='span' {...mainText1}>
                            {item.name}
                          </Text>
                        </Flex>
                      </HStack>
                    </ListItem>
                  ))}
                </VStack>
              </UnorderedList>
            ))}
          </Flex>
        ) :
        (
          <Flex gap='20px' align='flex-start' h='100%'>
            <UnorderedList variant='none' p={0} m={0} w='364px' listStyleType='none'>
              <VStack align='flex-start' gap='2px' w='100%'>
                <ListItem w='100%'>
                  <HStack gap='5px' align='center' h='51px' w='100%'>
                    <Center minW='51px' h='51px' borderRadius='8px' bg='#F9FAFC'>
                      <Box bg={COLOR_EMPTY.chartColor} borderRadius='4px' h='21px' w='21px'></Box>
                    </Center>
                    <Flex bg='#F9FAFC' borderRadius='8px' p='13px 18px 12px' w='100%' h='51px'>
                      <Text as='span' fontSize='16px' fontWeight={400} color='#181825'>{ COLOR_EMPTY.alocation }</Text>
                      <Divider orientation='vertical' borderColor='#C6C6C6' h='23px' m='0 18px 0 26px' />
                      <Text as='span' fontSize='16px' fontWeight={400} color='#181825'>{ COLOR_EMPTY.name }</Text>
                    </Flex>
                  </HStack>
                </ListItem>
              </VStack>
            </UnorderedList>
          </Flex>
        )
      }
    </Flex>
  );
};

export default DoughnutChart;
