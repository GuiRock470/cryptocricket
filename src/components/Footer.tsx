import { Button, Center, Flex, HStack, Input, Link, Text, VStack, Image, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import SocialMediaLinks from './SocialMediaLinks';

const Footer: React.FC = () => {
  const socialMedia = [
    {
      href: 'https://www.instagram.com/cryptocricket/',
      boxShadow: 'none',
      bg: '#4880FF',
      icon: assets.instagram
    },
    {
      href: 'https://www.youtube.com/c/CryptoCricket',
      boxShadow: 'none',
      bg: '#4880FF',
      icon: assets.youtube
    },
  ];

  const [supportLink, setSupportLink] = useState('');
  const supportNumber = '+55 24 99258-0856';
  useEffect(() => {
    const geSupportLink = () => {
      const phone = supportNumber.replace(' ', '').replace(' ', '').replace('-', '');
      setSupportLink(`https://api.whatsapp.com/send?phone=${phone}&text=Fala%20equipe!%20Estou%20no%20site%20da%20Crypto%20Cricket%20e%20tenho%20dúvidas`)
    }
    geSupportLink();
  }, [supportNumber]);

  return (
    <Center
      w='100%' h='222px'
      bg='linear-gradient(90deg, #1B1B1D 0%, #2D2D32 100%)'
    >
      <Flex h='173px' w='1440px' p='0 83px'>
        <Flex align='flex-start' gap='212px' p='10px 47px 12px 0'>
          <VStack gap='18px' align='flex-start'>
            <Text as='span' fontSize='20px' fontWeight={600} color='#FFF'>
              Assine nosso Newsletter
            </Text>
            <HStack gap='5px' align='center' h='50px'>
              <Input
                h='100%'
                w='297px'
                bg='#FFF'
                type='text'
                fontSize='16px'
                color='#181825'
                borderRadius='8px'
                border='1px solid #DEDEDE'
                placeholder='Insira seu email'
                _placeholder={{ color: '#181825', fontSize: '16px' }}
              />
              <Button
                p={0}
                h='100%'
                w='117px'
                bg='#FFF'
                border='none'
                outline='none'
                color='#000000'
                fontSize='16px'
                fontWeight={400}
                _hover={{bg: '#FFF'}}
              >
                Assinar
              </Button>
            </HStack>
          </VStack>
          <VStack gap='20px' align='flex-start'>
            <Text as='span' fontSize='20px' fontWeight={600} color='#FFF'>
              Redes Sociais
            </Text>
            <SocialMediaLinks data={socialMedia} />
          </VStack>
        </Flex>
        <Divider orientation='vertical' borderColor='#FFF' />
        <UnorderedList ml='47px' variant='none' p='10px 0px 12px'>
          <ListItem p='0 0 6px'>
            <Link fontSize='20px' fontWeight={600} color='#FFF' isExternal href='https://criptocricket.com.br/' _hover={{textDecor: 'none'}}>
              <Flex w='100%' align='center' gap='7px'>
                <Text as='span' fontSize='20px' fontWeight={600} color='#FFF'>
                  Sobre nós
                </Text>
                <Image src={assets.white_external} alt='' />
              </Flex>
            </Link>
          </ListItem>
          <ListItem p='6px 0'>
            <Link fontSize='20px' fontWeight={600} color='#FFF' isExternal href='https://criptocricket.com.br/termos-e-condicoes' _hover={{textDecor: 'none'}}>
              <Flex w='100%' align='center' gap='7px'>
                <Text as='span' fontSize='20px' fontWeight={600} color='#FFF'>
                  Termos de uso
                </Text>
                <Image src={assets.white_external} alt='' />
              </Flex>
            </Link>
          </ListItem>
          <ListItem p='6px 0'>
            <Link fontSize='20px' fontWeight={600} color='#FFF' isExternal href='https://criptocricket.com.br/politica-de-privacidade' _hover={{textDecor: 'none'}}>
              <Flex w='100%' align='center' gap='7px'>
                <Text as='span' fontSize='20px' fontWeight={600} color='#FFF'>
                  Política de privacidade
                </Text>
                <Image src={assets.white_external} alt='' />
              </Flex>
            </Link>
          </ListItem>
          <ListItem p='6px 0 0'>
            <Link fontSize='20px' fontWeight={600} color='#FFF' href={supportLink} _hover={{textDecor: 'none'}} isExternal>
              <Flex w='100%' align='center' gap='3px'>
                <Image src={assets.whatsapp} alt='' />
                <Text as='span' fontSize='20px' fontWeight={600} color='#FFF'>
                  Contato
                </Text>
              </Flex>
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Center>
  );
}

export default Footer