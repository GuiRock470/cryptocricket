/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Box, Flex, Heading, VStack, Text, Table, Thead, Tr, Checkbox, Th, Tbody, Td, Button, Image, useDisclosure, ModalOverlay, Modal, ModalContent, ModalHeader, ModalBody, FormControl, FormLabel, Input, FormErrorMessage, ModalFooter } from '@chakra-ui/react';
import { fakedata } from '../../assets/fakeData';
import { assets } from '../../assets/assets';
import { Field, Form, Formik } from 'formik';

interface ItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCryptoName: string;
  setSelectedCryptoName: React.Dispatch<React.SetStateAction<string>>;
  isEditMode: boolean;
}

const ItemPopup: React.FC<ItemPopupProps> = ({ isOpen, onClose, selectedCryptoName, setSelectedCryptoName, isEditMode }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb='57px' maxW={407}>
        <Formik
          initialValues={{
            coin: selectedCryptoName,
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              onClose();
              actions.setSubmitting(false);
            }, 1000);
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


const HighlightsAdmin: React.FC = () => {
  const [editClicked, setEditClicked] = useState<number | null>(null);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});
  const [selectedCryptoName, setSelectedCryptoName] = useState<string>('');
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

  const handleEditBtnClick = (index: number, cryptoName: string) => {
    handleSelectItem(index, true);
    setEditClicked(index);
    setSelectedCryptoName(cryptoName);
    setIsEditMode(true); // Definindo modo de edição
    onOpen();
  };

  const handleAddBtnClick = () => {
    setIsEditMode(false); // Definindo modo de adição
    setSelectedCryptoName('');
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
      <Navbar selected={1} />
      <Box maxW='1292px' w='100%' m='73px auto'>
        <VStack gap='11px' align='flex-start' w='100%' p='56px 0 30px' borderBottom='1px solid #CFCFCF' mb='41px'>
          <Heading as='h2' fontSize='30px' fontWeight={700} m={0} color='#181825'>Destaques</Heading>
          <Text as='span' fontSize='18px' fontWeight={400} color='#181825'>Edite quais destaques vão ser exibidos para os usuários</Text>
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
                <Th h={63} textAlign='right'>
                  <Button borderRadius={8} bg='#000000' color='#FFFFFF' w={151} h={50} p={0} _hover={{ bg: '#000' }} onClick={handleAddBtnClick}>
                    <Image src={assets.plus_icon} alt='' mr='10px' />
                    Adicionar
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {fakedata.highlights_items
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
                    <Td borderEndRadius={10} bg={index % 2 === 0 ? '#F9FAFC' : 'transparent'} textAlign='right'>
                      <Button bg='transparent' p={0} onClick={() => handleEditBtnClick(index, item.name)}>
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
          selectedCryptoName={selectedCryptoName}
          setSelectedCryptoName={setSelectedCryptoName}
          isEditMode={isEditMode} // Passando o modo
        />
      </Box>
    </Flex>
  );
}

export default HighlightsAdmin;