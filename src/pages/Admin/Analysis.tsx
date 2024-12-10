/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Heading, VStack, Text, Table, Thead, Tr, Th, Checkbox, Button, Image, Tbody, Td, FormErrorMessage, ModalBody, ModalFooter, ModalContent, Modal, FormLabel, Input, ModalHeader, FormControl, ModalOverlay, useDisclosure, Textarea, Center, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { fakedata } from '../../assets/fakeData';
import { assets } from '../../assets/assets';
import { Field, Form, Formik } from 'formik';
import Dropdown from '../../components/Dropdown';

interface AnalysisItem {
  name: string;
  logo: string;
  general: string;
  main_features: string[];
  tech_aspects: string[];
  predictions: {
    short: {
      year: number;
      price: string;
      reasons: string;
    };
    long: {
      year: number;
      price: string;
      reasons: string;
    };
  };
  hist_max: string;
}

interface ItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  isEditMode: boolean;
  selectedItem: AnalysisItem | null;
}

const ItemPopup: React.FC<ItemPopupProps> = ({ isOpen, onClose, isEditMode, selectedItem }) => {
  const [addingFeature, setAddingFeature] = useState<boolean>(false);
  const [addingTechAspect, setAddingTechAspect] = useState<boolean>(false);
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    if (selectedItem) {
      setFeatures(selectedItem.main_features);
    }
  }, [selectedItem]);

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const options: { value: string, content: React.ReactNode }[] = [
    {
      value: '2025',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2025</Text>),
    },
    {
      value: '2026',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2026</Text>),
    },
    {
      value: '2027',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2027</Text>),
    },
    {
      value: '2028',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2028</Text>),
    },
    {
      value: '2029',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2029</Text>),
    },
    {
      value: '2030',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2030</Text>),
    },
    {
      value: '2031',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2031</Text>),
    },
    {
      value: '2032',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2032</Text>),
    },
    {
      value: '2033',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2033</Text>),
    },
    {
      value: '2034',
      content: (<Text as='span' fontSize='16px' color='#000' fontWeight={400}>2034</Text>),
    },
  ];

  const shortOptions = options.filter((year) => Number(year.value) < 2030);
  const longOptions = options.filter((year) => Number(year.value) >= 2030);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb='57px' maxW={407}>
        <Formik
          initialValues={{
            coin: selectedItem?.name || '',
            new_feature: '', new_tech: '',
            general: selectedItem?.general || '',
            main_features: selectedItem?.main_features.join(', ') || '',
            tech_aspects: selectedItem?.tech_aspects.join(', ') || '',
            short_year: selectedItem?.predictions.short.year || '',
            short_prediction: selectedItem?.predictions.short.price || '',
            short_reasons: selectedItem?.predictions.short.reasons || '',
            long_year: selectedItem?.predictions.long.year || '',
            long_prediction: selectedItem?.predictions.long.price || '',
            long_reasons: selectedItem?.predictions.long.reasons || '',
            hist_max: selectedItem?.hist_max || ''
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              onClose();
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props) => (
            <Form>
              <ModalHeader borderBottom='1px solid #CFCFCF' fontWeight={700}>
                {isEditMode ? 'Editar item' : 'Adicionar item'}
              </ModalHeader>
              <ModalBody pt='20px'>
                <VStack align='flex-start' gap='20px'>
                  <Field name='coin'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.coin && form.touched.coin}>
                        <FormLabel>Moeda</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira sua moeda'
                        />
                        <FormErrorMessage>{form.errors.coin}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='general'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.general && form.touched.general}>
                        <FormLabel>Visão Geral</FormLabel>
                        <Textarea h='169px' resize='none' p='15px 18px' fontSize='16px' border='1px solid #DEDEDE'
                          {...field}
                          placeholder='Insira a visão geral'
                        />
                        <FormErrorMessage>{form.errors.general}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='new_feature'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.new_feature && form.touched.new_feature}>
                        <FormLabel>Características Principais</FormLabel>
                        {selectedItem && selectedItem.main_features.length > 0 ? (
                          (
                            <VStack w='100%' align='flex-start' gap='10px'>
                              {selectedItem.main_features.map((feature, index) => (
                                <Center
                                  key={index}
                                  w='100%'
                                  borderRadius='8px'
                                  bg='#F9FAFC'
                                  border='1px solid #DEDEDE'
                                  p='15px 11px 15px 18px'
                                  h='70px'
                                >
                                  <Flex align='center' gap='15px' h='45px' w='100%' overflow='hidden'>
                                    <Flex maxW='295px' flexDir='column' justify='flex-start' align='flex-start' title={feature}>
                                      <Text as='span' m={0} fontSize='16px' textOverflow='ellipsis' h='45px'>
                                        {feature}
                                      </Text>
                                    </Flex>
                                    <Center w='22px' h='100%'>
                                      <Button
                                        p={0}
                                        h='22px'
                                        maxW='22px'
                                        border='none'
                                        bg='transparent'
                                        _hover={{ bg: 'transparent' }}
                                        onClick={() => removeFeature(index)}
                                      >
                                        <Image src={assets.removeItem} alt='' />
                                      </Button>
                                    </Center>
                                  </Flex>
                                </Center>
                              ))}
                              
                            </VStack>
                          )
                        ) : (<></>)}
                        {addingFeature ? (
                          <VStack w='100%' align='flex-start' gap='10px'>
                            <Textarea
                              h='169px'
                              mt='10px'
                              resize='none'
                              p='15px 18px'
                              fontSize='16px'
                              border='1px solid #DEDEDE'
                              {...field}
                              placeholder='Insira uma característica principal'
                            />
                            <HStack gap='10.47px' w='100%' align='center'>
                              <Button
                                w='100%'
                                h='50px'
                                bg='transparent'
                                _hover={{ bg: 'transparent' }}
                                border='1px solid #989898'
                                borderRadius='8px'
                                color='#181825'
                                onClick={() => setAddingFeature(false)}
                              >
                                Cancelar
                              </Button>
                              <Button
                                w='100%'
                                h='50px'
                                bg='#000'
                                _hover={{ bg: '#000' }}
                                border='1px solid #000'
                                borderRadius='8px'
                                color='#FFF'
                              >
                                Salvar
                              </Button>
                            </HStack>
                          </VStack>
                        ) : (
                          <Button
                            w='100%'
                              h='50px'
                              mt='10px'
                            bg='transparent'
                            _hover={{ bg: 'transparent' }}
                            border='1px solid #989898'
                            borderRadius='8px'
                            color='#181825'
                            onClick={() => setAddingFeature(true)}
                          >
                            Adicionar
                          </Button>
                        )}
                       
                      </FormControl>
                    )}
                  </Field>
                  <Box w='100%' pt='10px'>
                    <Field name='new_tech'>
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl isInvalid={form.errors.new_tech && form.touched.new_tech}>
                          <FormLabel>Aspectos Tecnológicos</FormLabel>
                          {selectedItem && selectedItem.main_features.length > 0 ? (
                            (
                              <VStack w='100%' align='flex-start' gap='10px'>
                                {selectedItem.tech_aspects.map((feature, index) => (
                                  <Center
                                    key={index}
                                    w='100%'
                                    borderRadius='8px'
                                    bg='#F9FAFC'
                                    border='1px solid #DEDEDE'
                                    p='15px 11px 15px 18px'
                                    h='70px'
                                  >
                                    <Flex align='center' gap='15px' h='45px' w='100%' overflow='hidden'>
                                      <Flex maxW='295px' flexDir='column' justify='flex-start' align='flex-start' title={feature}>
                                        <Text as='span' m={0} fontSize='16px' textOverflow='ellipsis' h='45px'>
                                          {feature}
                                        </Text>
                                      </Flex>
                                      <Center w='22px' h='100%'>
                                        <Button p={0} maxW='22px' h='22px' bg='transparent' _hover={{bg: 'transparent'}} border='none' onClick={() => removeFeature(index)}>
                                          <Image src={assets.removeItem} alt='' />
                                        </Button>
                                      </Center>
                                    </Flex>
                                  </Center>
                                ))}
                              </VStack>
                            )
                          ) : (<></>)}
                          {addingTechAspect ? (
                            <VStack w='100%' align='flex-start' gap='10px'>
                              <Textarea
                                mt='10px'
                                h='169px'
                                resize='none'
                                p='15px 18px'
                                fontSize='16px'
                                border='1px solid #DEDEDE'
                                {...field}
                                placeholder='Insira um aspecto tecnológico'
                              />
                              <HStack gap='10.47px' w='100%' align='center'>
                                <Button
                                  w='100%'
                                  h='50px'
                                  bg='transparent'
                                  _hover={{ bg: 'transparent' }}
                                  border='1px solid #989898'
                                  borderRadius='8px'
                                  color='#181825'
                                  onClick={() => setAddingTechAspect(false)}
                                >
                                  Cancelar
                                </Button>
                                <Button
                                  w='100%'
                                  h='50px'
                                  bg='#000'
                                  _hover={{ bg: '#000' }}
                                  border='1px solid #000'
                                  borderRadius='8px'
                                  color='#FFF'
                                >
                                  Salvar
                                </Button>
                              </HStack>
                            </VStack>
                          ) : (
                            <Button
                              w='100%'
                                h='50px'
                                mt='10px'
                              bg='transparent'
                              _hover={{ bg: 'transparent' }}
                              border='1px solid #989898'
                              borderRadius='8px'
                              color='#181825'
                              onClick={() => setAddingTechAspect(true)}
                            >
                              Adicionar
                            </Button>
                          )}
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box w='100%' pt='10px'>
                    <Text as='span' fontSize='18px' fontWeight={600}>Previsões de Preço*</Text>
                  </Box>
                  <VStack align='flex-start' w='100%' gap='15px'>
                    <Field name='short_year'>
                      {({ form }: { field: any; form: any }) => (
                        <FormControl isInvalid={form.errors.short_year && form.touched.short_year}>
                          <FormLabel>Curto Prazo:</FormLabel>
                            <Dropdown
                              id="shortPrice-dropdown"
                              defaultOpt={options[0].content}
                              menu={shortOptions}
                              onOptionSelect={(value) => form.setFieldValue('short_year', value)}
                            />
                          <FormErrorMessage>{form.errors.short_year}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='short_prediction'>
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl isInvalid={form.errors.short_prediction && form.touched.short_prediction}>
                          <Input
                            {...field}
                            placeholder='Insira aqui a previsão de preço'
                          />
                          <FormErrorMessage>{form.errors.short_prediction}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Box w='100%' pt='5px'>
                      <Field name='short_reasons'>
                        {({ field, form }: { field: any; form: any }) => (
                          <FormControl isInvalid={form.errors.short_reasons && form.touched.short_reasons}>
                            <FormLabel>Motivos:</FormLabel>
                            <Textarea h='169px' resize='none' p='15px 18px' fontSize='16px' border='1px solid #DEDEDE'
                              {...field}
                              placeholder='Insira aqui os motivos'
                            />
                            <FormErrorMessage>{form.errors.short_reasons}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </VStack>
                  <VStack align='flex-start' w='100%' gap='15px'>
                    <Field name='long_year'>
                      {({ form }: { field: any; form: any }) => (
                        <FormControl isInvalid={form.errors.short_year && form.touched.short_year}>
                          <FormLabel>Longo Prazo:</FormLabel>
                            <Dropdown
                              id="longPrice-dropdown"
                              defaultOpt={options[5].content}
                              menu={longOptions}
                              onOptionSelect={(value) => form.setFieldValue('short_year', value)}
                            />
                          <FormErrorMessage>{form.errors.short_year}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='long_prediction'>
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl isInvalid={form.errors.long_prediction && form.touched.long_prediction}>
                          <Input
                            {...field}
                            placeholder='Insira aqui a previsão de preço'
                          />
                          <FormErrorMessage>{form.errors.long_prediction}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Box w='100%' pt='5px'>
                      <Field name='long_reasons'>
                        {({ field, form }: { field: any; form: any }) => (
                          <FormControl isInvalid={form.errors.long_reasons && form.touched.long_reasons}>
                            <FormLabel>Motivos:</FormLabel>
                            <Textarea h='169px' resize='none' p='15px 18px' fontSize='16px' border='1px solid #DEDEDE'
                              {...field}
                              placeholder='Insira aqui os motivos'
                            />
                            <FormErrorMessage>{form.errors.long_reasons}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </VStack>
                  <Field name='hist_max'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.hist_max && form.touched.hist_max}>
                        <FormLabel>Máxima Histórica:</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira a máxima histórica'
                        />
                        <FormErrorMessage>{form.errors.hist_max}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button
                  mt={4}
                  bg='#3971EF'
                  w='117px'
                  h='50px'
                  color='#FFF'
                  _hover={{ bg: '#3971EF' }}
                  isLoading={props.isSubmitting}
                  type='submit'
                >
                  {isEditMode ? 'Editar' : 'Adicionar'}
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

const Analysis: React.FC = () => {
  const [editClicked, setEditClicked] = useState<number | null>(null);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});
  const [selectedItem, setSelectedItem] = useState<AnalysisItem | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    const newSelectedItems = fakedata.portifolio_items.reduce((acc, _, index) => {
      acc[index] = checked;
      return acc;
    }, {} as { [key: number]: boolean });
    setSelectedItems(newSelectedItems);
  };

  const handleSelectItem = (index: number, checked: boolean) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: checked
    }));
  };

  const handleAddBtnClick = () => {
    setIsEditMode(false); // Definindo modo de adição
    setSelectedItem(null);
    onOpen();
  };

  const handleEditBtnClick = (
    index: number,
    item: AnalysisItem
  ) => {
    handleSelectItem(index, true);
    setEditClicked(index);
    setSelectedItem(item);
    setIsEditMode(true);
    onOpen();
  };

  const handleClose = () => {
    setSelectedItems({});
    setEditClicked(null);
    setSelectAll(false);
    onClose();
  };
  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={3} />
      <Box maxW='1292px' w='100%' m='73px auto'>
        <VStack gap='11px' align='flex-start' w='100%' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='41px'>
          <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>Análise fundamentalista</Heading>
          <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>Edite quais análises vão ser exibidas para os usuários</Text>
        </VStack>
        <Box w='100%'>
          <Table variant='none'>
            <Thead>
              <Tr>
                <Th h={63} w={90}>
                  <Checkbox
                    isChecked={selectAll}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </Th>
                <Th h={63}>Moeda</Th>
                <Th h={63}>Visão geral</Th>
                <Th h={63} textAlign='right'>
                  <Button borderRadius={8} bg='#000000' color='#FFFFFF' w={151} h={50} p={0} _hover={{ bg: '#000' }} onClick={handleAddBtnClick}>
                    <Image src={assets.plus_icon} alt='' mr='10px' />
                    Adicionar
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {fakedata.analysis_items
                .map((item, index) => (
                  <Tr key={index}>
                    <Td borderStartRadius={10} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} w={90}>
                      <Checkbox
                        isChecked={selectedItems[index] || false}
                        onChange={(e) => handleSelectItem(index, e.target.checked)}
                      />
                    </Td>
                    <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                      <Flex align='center' gap='5px'>
                        <Image src={item.logo} alt='' w={17} h={17} />
                        {item.name}
                      </Flex>
                    </Td>
                    <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} title={item.general}>
                      <Text fontSize='16px' color='#181825' m={0} maxW="420px" isTruncated whiteSpace="nowrap">{item.general}</Text>
                    </Td>
                    <Td borderEndRadius={10} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} textAlign='right'>
                      <Button
                        p={0}
                        bg='transparent'
                        onClick={() => handleEditBtnClick(index, item)}
                      >
                        <Image src={editClicked === index ? assets.editClicked : assets.edit} alt='' />
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Box>
        <ItemPopup
          isOpen={isOpen}
          onClose={handleClose}
          isEditMode={isEditMode}
          selectedItem={selectedItem}
        />
      </Box>
    </Flex>
    );
  }

export default Analysis