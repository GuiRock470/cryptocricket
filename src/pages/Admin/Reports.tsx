/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Heading, Table, Image, Tbody, Text, VStack, Td, Checkbox, Tr, Thead, Th, useDisclosure, Modal, ModalContent, ModalFooter, ModalBody, FormControl, FormErrorMessage, Input, FormLabel, ModalHeader, ModalOverlay, Textarea, VisuallyHidden, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { assets } from '../../assets/assets'
import { fakedata } from '../../assets/fakeData'
import { Field, Form, Formik } from 'formik'
import InputTypeDate from '../../components/InputTypeDate'
import moment from 'moment'

interface ReportsItem {
  date: Date;
  descr: string;
  file: string;
}

interface ItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  isEditMode: boolean;
  selectedItem: ReportsItem | null;
}

const ItemPopup: React.FC<ItemPopupProps> = ({ isOpen, onClose, isEditMode, selectedItem }) => {
  const [dateVal, setDate] = React.useState<Date>(new Date());
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setDate(date);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb='57px' maxW={407}>
        <Formik
          initialValues={{
            date: selectedItem?.date || new Date(),
            descr: selectedItem?.descr || '',
            file: selectedItem?.file || 'Envie um aquivo',
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
                  <Field name='date'>
                    {({ form }: { form: any }) => (
                      <FormControl isInvalid={form.errors.date && form.touched.date}>
                        <FormLabel>Data</FormLabel>
                        <Box w='100%' pos='relative' zIndex={1000}>
                          <InputTypeDate size='100%' selected={dateVal} onChange={handleDateChange} />
                        </Box>
                        <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='descr'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.descr && form.touched.descr}>
                        <FormLabel>Descrição</FormLabel>
                        <Textarea h='169px' resize='none' p='15px 18px' fontSize='16px' border='1px solid #DEDEDE'
                          {...field}
                          placeholder='Insira a visão geral'
                        />
                        <FormErrorMessage>{form.errors.descr}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='file'>
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isInvalid={form.errors.file && form.touched.file}>
                        <FormLabel>Arquivo do relatório</FormLabel>
                        <InputGroup w='100%' bg='#F9FAFC' borderRadius='8px' h='50px'>
                          <InputLeftElement top='4.5px'>
                            <Image src={assets.upload} alt=''/>
                          </InputLeftElement>
                          <Input
                            readOnly
                            {...field}
                            type='text'
                            fontSize='16px'
                            textDecoration='underline'
                            placeholder='Envie um aquivo'
                            _placeholder={{color: '#181825'}}
                          />
                        </InputGroup>
                        <VisuallyHidden>
                          <Input
                            type='file'
                          />
                        </VisuallyHidden>
                        <FormErrorMessage>{form.errors.file}</FormErrorMessage>
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


const Reports: React.FC = () => {
  const [editClicked, setEditClicked] = useState<number | null>(null);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});
  const [selectedItem, setSelectedItem] = useState<ReportsItem | null>(null);
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
    item: ReportsItem
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
      <Navbar selected={2} />
      <Box maxW='1292px' w='100%' m='73px auto'>
        <VStack gap='11px' align='flex-start' w='100%' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='41px'>
          <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>Relatórios Mensais</Heading>
          <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>Edite quais relatórios vão ser exibidos para os usuários</Text>
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
                <Th h={63}>Data</Th>
                <Th h={63}>Visão geral</Th>
                <Th h={63}>Arquivo</Th>
                <Th h={63} textAlign='right'>
                  <Button borderRadius={8} bg='#000000' color='#FFFFFF' w={151} h={50} p={0} _hover={{ bg: '#000' }} onClick={handleAddBtnClick}>
                    <Image src={assets.plus_icon} alt='' mr='10px' />
                    Adicionar
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {fakedata.reports_items
                .map((item, index) => (
                  <Tr key={index}>
                    <Td borderStartRadius={10} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} w={90}>
                      <Checkbox
                        isChecked={selectedItems[index] || false}
                        onChange={(e) => handleSelectItem(index, e.target.checked)}
                      />
                    </Td>
                    <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                      {moment(item.date).format('DD/MM/YYYY')}
                    </Td>
                    <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} title={item.descr}>
                      <Text fontSize='16px' color='#181825' m={0} maxW="420px" isTruncated whiteSpace="nowrap">
                        {item.descr}
                      </Text>
                    </Td>
                    <Td bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'}>
                      {item.file}
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
  )
}

export default Reports