/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { assets } from '../../assets/assets';
import { fakedata } from '../../assets/fakeData';
import { Field, Form, Formik } from 'formik';
import Dropdown from '../../components/Dropdown';

interface Color {
  bg: string;
  text: string;
}

type RiskColors = {
  [key: number]: Color;
};



interface ItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCryptoName: string;
  setSelectedCryptoName: React.Dispatch<React.SetStateAction<string>>;
  selectedCryptoReturn: string;
  setSelectedCryptoReturn: React.Dispatch<React.SetStateAction<string>>;
  selectedCryptoAlocation: string;
  setSelectedCryptoAlocation: React.Dispatch<React.SetStateAction<string>>;
  selectedCryptoRisk: string;
  setSelectedCryptoRisk: React.Dispatch<React.SetStateAction<string>>;
  selectedCryptoURL: string;
  setSelectedCryptoURL: React.Dispatch<React.SetStateAction<string>>;
  isEditMode: boolean;
}

const ItemPopup: React.FC<ItemPopupProps> = ({
  isOpen,
  onClose,
  selectedCryptoName,
  setSelectedCryptoName,
  selectedCryptoReturn,
  setSelectedCryptoReturn,
  selectedCryptoAlocation,
  setSelectedCryptoAlocation,
  selectedCryptoRisk,
  selectedCryptoURL,
  setSelectedCryptoURL,
  isEditMode
}) => {

  const options: { value: string, content: React.ReactNode }[] = [
    {
      value: '0',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#3EC844' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Baixissimo</Text>
        </Flex>
      ),
    },
    {
      value: '1',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#FFC107' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Baixo</Text>
        </Flex>
      ),
    },
    {
      value: '2',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#FF9800' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Moderado</Text>
        </Flex>
      ),
    },
    {
      value: '3',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#F44336' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Alto</Text>
        </Flex>
      ),
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb='57px' maxW={407}>
        <Formik
          initialValues={{
            coin: selectedCryptoName,
            return: selectedCryptoReturn,
            alocation: selectedCryptoAlocation,
            risk: selectedCryptoRisk,
            url: selectedCryptoURL
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
                          value={selectedCryptoName}
                          onChange={(e) => {
                            setSelectedCryptoName(e.target.value);
                            form.setFieldValue('coin', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.coin}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='return'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.return && form.touched.return}>
                        <FormLabel>Retorno</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira a % do retorno'
                          value={selectedCryptoReturn}
                          onChange={(e) => {
                            setSelectedCryptoReturn(e.target.value);
                            form.setFieldValue('return', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.return}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='alocation'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.alocation && form.touched.alocation}>
                        <FormLabel>Alocação</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira a % da alocação'
                          value={selectedCryptoAlocation}
                          onChange={(e) => {
                            setSelectedCryptoAlocation(e.target.value);
                            form.setFieldValue('alocation', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.alocation}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='risk'>
                    {({ form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.risk && form.touched.risk}>
                      <FormLabel>Risco</FormLabel>
                      <Dropdown
                        id="risk-dropdown"
                        defaultOpt={options[Number(selectedCryptoRisk)].content}
                        menu={options}
                        onOptionSelect={(value) => form.setFieldValue('risk', value)}
                      />
                      <FormErrorMessage>{form.errors.risk}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name='url'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.url && form.touched.url}>
                        <FormLabel>URL</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira o url da Coinmarket'
                          value={selectedCryptoURL}
                          onChange={(e) => {
                            setSelectedCryptoURL(e.target.value);
                            form.setFieldValue('url', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.url}</FormErrorMessage>
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
                  _hover={{bg: '#3971EF'}}
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

/* interface AddPopupProps {
  isOpen: boolean;
  onClose: () => void;
} 

const AddItemPopup: React.FC<AddPopupProps> = ({isOpen, onClose}) => {
  const [cryptoName, setCryptoName] = useState<string>('');
  const [returnPercent, setReturnPercent] = useState<string>('');
  const [alocationPercent, setAlocationPercent] = useState<string>('');
  const [coinmarketUrl, setCoinmarketUrl] = useState<string>('');

  const options: { value: string, content: React.ReactNode }[] = [
    {
      value: '0',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#3EC844' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Baixissimo</Text>
        </Flex>
      ),
    },
    {
      value: '1',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#FFC107' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Baixo</Text>
        </Flex>
      ),
    },
    {
      value: '2',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#FF9800' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Moderado</Text>
        </Flex>
      ),
    },
    {
      value: '3',
      content: (
        <Flex w='100%' align='center' gap='8px'>
          <Box w='12px' h='12px' borderRadius='50%' bg='#F44336' p='2px'></Box>
          <Text as='span' fontSize='16px' color='#000' fontWeight={400}>Alto</Text>
        </Flex>
      ),
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb='57px' maxW={407}>
        <Formik
          initialValues={{
            coin: cryptoName,
            return: returnPercent,
            alocation: alocationPercent,
            risk: options[0].value,
            url: coinmarketUrl
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
              <ModalHeader borderBottom='1px solid #CFCFCF' fontWeight={700}>Adicionar item</ModalHeader>
              <ModalBody pt='20px'>
                <VStack align='flex-start' gap='20px'>
                  <Field name='coin'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.coin && form.touched.coin}>
                        <FormLabel>Moeda</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira sua moeda'
                          value={cryptoName}
                          onChange={(e) => {
                            setCryptoName(e.target.value);
                            form.setFieldValue('coin', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.coin}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='return'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.return && form.touched.return}>
                        <FormLabel>Retorno</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira a % do retorno'
                          value={returnPercent}
                          onChange={(e) => {
                            setReturnPercent(e.target.value);
                            form.setFieldValue('return', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.return}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='alocation'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.alocation && form.touched.alocation}>
                        <FormLabel>Alocação</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira a % da alocação'
                          value={alocationPercent}
                          onChange={(e) => {
                            setAlocationPercent(e.target.value);
                            form.setFieldValue('alocation', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.alocation}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='risk'>
                    {({ form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.risk && form.touched.risk}>
                      <FormLabel>Risco</FormLabel>
                      <Dropdown
                        id="risk-dropdown"
                        defaultOpt={options[0].content}
                        menu={options}
                        onOptionSelect={(value) => form.setFieldValue('risk', value)}
                      />
                      <FormErrorMessage>{form.errors.risk}</FormErrorMessage>
                    </FormControl>
                    )}
                  </Field>
                  <Field name='url'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.url && form.touched.url}>
                        <FormLabel>URL</FormLabel>
                        <Input
                          {...field}
                          placeholder='Insira o url da Coinmarket'
                          value={coinmarketUrl}
                          onChange={(e) => {
                            setCoinmarketUrl(e.target.value);
                            form.setFieldValue('url', e.target.value);
                          }}
                        />
                        <FormErrorMessage>{form.errors.url}</FormErrorMessage>
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
                  _hover={{bg: '#3971EF'}}
                  isLoading={props.isSubmitting}
                  type='submit'
                >
                  Atualizar
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}*/

const Portfolio: React.FC = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});
  const [editClicked, setEditClicked] = useState<number | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedCryptoName, setSelectedCryptoName] = useState<string>('');
  const [selectedCryptoReturn, setSelectedCryptoReturn] = useState<string>('');
  const [selectedCryptoAlocation, setSelectedCryptoAlocation] = useState<string>('');
  const [selectedCryptoRisk, setSelectedCryptoRisk] = useState<string>('');
  const [selectedCryptoURL, setSelectedCryptoURL] = useState<string>('');
  
  const tabs = [
    { index: 0, label: 'Conservadorzão' },
    { index: 1, label: 'Conservador' },
    { index: 2, label: 'Moderado' },
    { index: 3, label: 'Agressivo' },
  ];

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditBtnClick = (
    index: number,
    cryptoName: string,
    cryptoReturn: string,
    cryptoAlocation: string,
    cryptoRisk: number,
    cryptoLink: string
  ) => {
    handleSelectItem(index, true);
    setEditClicked(index);
    setSelectedCryptoName(cryptoName);
    setSelectedCryptoReturn(cryptoReturn);
    setSelectedCryptoAlocation(cryptoAlocation);
    setSelectedCryptoRisk(`${cryptoRisk}`);
    setSelectedCryptoURL(cryptoLink);
    setIsEditMode(true);
    onOpen();
  };

  const handleAddBtnClick = () => {
    setIsEditMode(false);
    setSelectedCryptoName('');
    setSelectedCryptoReturn('');
    setSelectedCryptoAlocation('');
    setSelectedCryptoRisk(`0`);
    setSelectedCryptoURL('');
    onOpen();
  };

  const handleClose = () => {
    setSelectedItems({});
    setEditClicked(null);
    setSelectAll(false);
    onClose();
  };

  const renderTable = (riskLevel: number) => (
    <Table variant='none'>
      <Thead>
        <Tr>
          <Th h={63}>
            <Checkbox
              isChecked={selectAll}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
          </Th>
          <Th h={63}>Ativos Convexos</Th>
          <Th h={63}>Preço Hoje ($)</Th>
          <Th h={63}>Retorno</Th>
          <Th h={63}>Alocação</Th>
          <Th h={63}>Risco</Th>
          <Th h={63}>URL</Th>
          <Th h={63}></Th>
        </Tr>
      </Thead>
      <Tbody>
        {fakedata.portifolio_items
          .filter(item => item.risk === riskLevel)
          .map((item, index) => (
            <Tr key={index}>
              <Td borderStartRadius={10} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>
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
              <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                <Text as='b'>{item.price}</Text>
              </Td>
              <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>{item.return}</Td>
              <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>{item.alocation}</Td>
              <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} minW={105}>
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
              <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                <Link href={item.url} isExternal>
                  <Image src={assets.external} alt='' />
                </Link>
              </Td>
              <Td borderEndRadius={10} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} textAlign='right'>
                <Button bg='transparent' p={0} onClick={() => handleEditBtnClick(index, item.name, item.return, item.alocation, riskLevel, item.url)}>
                  <Image src={editClicked === index ? assets.editClicked : assets.edit} alt='' />
                </Button>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );

  

  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={0} />
      <Box maxW='1292px' w='100%' m='73px auto'>
        <VStack gap='11px' align='flex-start' w='100%' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='41px'>
          <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>Informações da simulação</Heading>
          <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>Edite quais moedas vão ser exibidas para cada perfil</Text>
        </VStack>
        <Box w='100%'>
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
              <Button borderRadius={8} bg='#000000' color='#FFFFFF' w={151} h={50} p={0} _hover={{bg: '#000'}} onClick={handleAddBtnClick}>
                <Image src={assets.plus_icon} alt='' mr='10px' />
                Adicionar
              </Button>
            </Flex>

            <TabPanels>
              {tabs.map((tab) => (
                <TabPanel key={tab.index}>{renderTable(tab.index)}</TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      
      {/* <AddItemPopup isOpen={isOpen} onClose={onClose} /> */}
      <ItemPopup
        isOpen={isOpen}
        onClose={handleClose}
        selectedCryptoName={selectedCryptoName}
        setSelectedCryptoName={setSelectedCryptoName}
        selectedCryptoReturn={selectedCryptoReturn}
        setSelectedCryptoReturn={setSelectedCryptoReturn}
        selectedCryptoAlocation={selectedCryptoAlocation}
        setSelectedCryptoAlocation={setSelectedCryptoAlocation}
        selectedCryptoRisk={selectedCryptoRisk} setSelectedCryptoRisk={setSelectedCryptoRisk}
        selectedCryptoURL={selectedCryptoURL} setSelectedCryptoURL={setSelectedCryptoURL}
        isEditMode={isEditMode}
      />
    </Flex>
  );
};

export default Portfolio;
