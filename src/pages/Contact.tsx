import { Box, Flex, Heading, VStack, Text, Image, Link, Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { h2Style, mainText2 } from '../styles/components'
import { assets } from '../assets/assets'
import SocialMediaLinks from '../components/SocialMediaLinks'
import Footer from '../components/Footer'

const Contact: React.FC = () => {
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
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={5} />
      <Box maxW='1174px' w='100%' m='73px auto 0px' pt='65px' minH='calc(100vh - 295px)'>
        <Flex w='100%' align='flex-start' justify='space-between'>
          <VStack gap='53px' w='535px' align='flex-start'>
            <VStack align='flex-start' gap='14px' w='100%'>
              <Heading as='h2' {...h2Style}>Contato</Heading>
              <Text {...mainText2}>
                Entre em contato conosco para receber um suporte<br />
                mais especifico que te ajude em suas dúvidas e problemas.<br />
                Basta acessa o nosso WhatsApp e você será atendimento o quanto antes.
              </Text>
            </VStack>
            <VStack align='flex-start' gap='15px' w='100%'>
              <Heading as='h2' {...h2Style}>Redes Sociais</Heading>
              <SocialMediaLinks data={socialMedia} />
            </VStack>
          </VStack> 
          <Box p='30px 32px 42px 30px' bg='#F9FAFC' borderRadius='8px' w='611px'>
            <Flex align='center' justify='space-between' w='100%'>
              <VStack gap='10px' w='240px' align='flex-start'>
                <Text as='span' fontSize='20px' color='#181825'>
                  Suporte disponível em:
                </Text>
                <Image src={assets.wppBanner} alt='' />
                <Text as='span' {...mainText2}>
                  {supportNumber}
                </Text>
              </VStack>

              <Link
                h='58px'
                w='235px'
                isExternal
                bg='#181825'
                border='none'
                textDecor='none'
                href={supportLink}
                borderRadius='9.3px'
                _hover={{ bg: '#181825', textDecor: 'none'}}
              >
                <Center w='100%' h='100%'>
                  <Text m={0} color='#FFFFFF' fontSize='18.5px' fontWeight={400}>
                    Falar com suporte
                  </Text>
                </Center>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Flex>
  )
}

export default Contact