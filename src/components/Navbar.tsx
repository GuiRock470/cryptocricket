import { Button, Flex, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';
import { useAdmin } from '../context/AdminContext';
import { mainText2 } from '../styles/components';

interface NavbarProps{
  selected: number;
}

interface ToggleButtonProps {
  text: string;
  admin: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({text, admin, onClick}) => {
  return (
    <Button
      w='100%'
      h='50px'
      p='0 18px'
      fontSize='16px'
      textAlign='left'
      fontWeight={400}
      onClick={onClick}
      borderRadius='8px'
      justifyContent='flex-start'
      color={admin ? "#FFFFFF" : "#000000"}
      bg={admin ? "#3971EF" : "transparent"}
      _hover={admin ? { bg: "#3971EF" } : { bg: "transparent" }}
      border={admin ? "1px solid #3971EF" : "1px solid #DEDEDE"}
    >
      {text}
    </Button>
  );
}

const Navbar: React.FC<NavbarProps> = ({selected}) => {
  const nav = useNavigate();
  const { isAdmin, toggleAdmin } = useAdmin();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigateTo = () => {
    nav('/');
  }
  const showAdmin = () => {
    if (!isAdmin) {
      toggleAdmin();
    }
  }
  const showUser = () => {
    if (isAdmin) {
      toggleAdmin();
    }
  }

  const linksAdmin = [
    { id: 0, label: 'Portfólio', dest: '/' },
    { id: 1, label: 'Destaques', dest: '/#/highlights' },
    { id: 2, label: 'Relatórios', dest: '/#/reports' },
    { id: 3, label: 'Análises', dest: '/#/analysis' }
  ];
  const linksUser = [
    { id: 0, label: 'Início', dest: '/' },
    { id: 1, label: 'Portfólio', dest: '/#/portfolio' },
    { id: 2, label: 'Destaques', dest: '/#/highlights' },
    { id: 3, label: 'Relatórios', dest: '/#/reports' },
    { id: 4, label: 'Análises', dest: '/#/analysis' },
    { id: 5, label: 'Contato', dest: '/#/contact' }
  ]

  const renderLinks = isAdmin ? linksAdmin : linksUser;

  return (
    <HStack
      w='100%'
      h='73px'
      top={0}
      left={0}
      zIndex={1000}
      p='0 74px'
      pos='fixed'
      bg='#FFFFFF'
      align='center'
      justify='space-between'
      boxShadow='0px 4px 7.5px 0px rgba(0, 0, 0, 0.09)'
    >
      <Flex onClick={navigateTo} cursor='pointer' align={'center'}>
        <Image src={assets.logo} w={'75px'} h={'75px'} alt='' />
        <Text as='span' {...mainText2} fontWeight={700} color={''}>CryptoCricket</Text>
      </Flex>
      <Flex align='center'>
        <Flex gap='30px' align='center'>
          {renderLinks.map((link, index) => (
            <Link
              key={index}
              href={link.dest}
              color={index === selected ? '#3971EF' : '#000'}
              fontFamily='Sora' fontSize='20px'
              fontWeight={index === selected ? 600 : 400}
              textDecor='none'
              _hover={{textDecor: 'none'}}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
        
        <Button
          w='115px'
          h='44px'
          borderTop='none'
          borderBottom='none'
          borderRight='none'
          borderLeft='1px solid #CFCFCF'
          p='0 0 0 13px'
          bg='transparent'
          _hover={{ bg: 'transparent' }}
          fontFamily='Sora'
          fontWeight={400}
          color={isOpen ? '#3971EF': '#000'}
          fontSize='20px'
          outline='none'
          borderRadius={0}
          ml='13px'
          onClick={onOpen}
          transition="ease all 0.3s"
        >
          <Image mr='9px' src={assets.user_logo} alt='' />
          {isAdmin ? 'Admin': 'Usuário'}
        </Button>
        
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent w='221px' borderRadius='8px' border='1px solid #DEDEDE' left='calc(50% - 192px)'>
            <ModalHeader p='13px 12px 10px'>
              <Flex align='center' gap='6px'>
                <Image src={assets.eye} alt=''/>
                <Text as="span" {...mainText2}>
                  Visualizar como
                </Text>
              </Flex>
            </ModalHeader>
            
            <ModalBody p='0 12px 13px'>
              <VStack w='100%' align='flex-start' gap='5px'>
                <ToggleButton
                  onClick={showAdmin}
                  admin={true}
                  text='Admin'
                />
                <ToggleButton
                  onClick={showUser}
                  admin={false}
                  text='Usuário'
                />
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </HStack>
  )
}

export default Navbar