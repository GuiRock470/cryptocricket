import { Box, Flex, Heading, VStack, Text, Button, Center, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {
  title: string;
  videoUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ title, videoUrl }) => {
  return (
    <Box p='10px 5px' w='434px' bg='transparent'>
      <Box w='429px' boxShadow='0px 3px 14.9px 0px rgba(0, 0, 0, 0.08)' p='21px 20px 30px 19px' borderRadius='6px' bg='#FFF'>
        <VStack align='flex-start' w='100%' gap='16px'>
          <Text as='span' fontSize='20px' fontWeight={600}>
            {title}
          </Text>
          <Box w='100%' h='100%' borderRadius='4px'>
            <iframe width="390" height="220" style={{ borderRadius: '4px' }} src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

const Home: React.FC = () => {
  const profilesSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0); // Rola para o topo da página
  };

  const profiles = [
    {title: 'Conservadorzão', videoUrl:'https://www.youtube.com/embed/Y_3nEFcVy58?si=eOXeB8vdAaHWLrTM'},
    {title: 'Conservador', videoUrl:'https://www.youtube.com/embed/Y_3nEFcVy58?si=eOXeB8vdAaHWLrTM'},
    {title: 'Moderado', videoUrl:'https://www.youtube.com/embed/Y_3nEFcVy58?si=eOXeB8vdAaHWLrTM'},
    {title: 'Agressivo', videoUrl:'https://www.youtube.com/embed/Y_3nEFcVy58?si=eOXeB8vdAaHWLrTM'},
  ]

  const scrollToProfiles = () => {
    profilesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Flex w='100%' flexDir='column' align='center'>
      <Navbar selected={0} />
      <Box w='100%' mt='73px' bgImage={assets.home_banner} bgSize='cover' bgRepeat='no-repeat' bgPos='center' h='810px'>
        <Box w='100%' h='810px' bg='linear-gradient(86deg, #000 46.54%, rgba(102, 102, 102, 0.10) 98.27%)' pos='relative'>
          <VStack align='flex-start' gap='50px' justify='center' h='100%' pl='84px'>
            <VStack align='flex-start' gap='50px'>
              <Heading as='h1' fontSize='44px' fontWeight={700} m={0} color='#FFF'>
                Monte sua carteira de<br /> HOLD com Facilidade
              </Heading>
              <Heading as='h3' fontSize='28px' fontWeight={400} m={0} color='#FFF'>
                Relatórios detalhados e análises<br /> completas das nossas indicações
              </Heading>
            </VStack>
            <Button
              h='50px'
              w='206px'
              color='#FFF'
              border='none'
              outline='none'
              fontSize='16px'
              fontWeight={400}
              borderRadius='8px'
              onClick={scrollToProfiles}
              bg='rgba(255, 255, 255, 0.07)'
              _hover={{bg: 'rgba(255, 255, 255, 0.07)'}}
            >
              Conheça os perfis
            </Button>
          </VStack>
          <VStack w='100%' pos='absolute' bottom='28px' left={0}>
            <Button bg='transparent' _hover={{bg: 'transparent'}} border='none' outline='none' onClick={scrollToProfiles}>
              <Image src={assets.arrow_section} alt=''/>
            </Button>
          </VStack>
        </Box>
      </Box>
      <Box maxW='1292px' w='100%' m='0px auto' ref={profilesSectionRef} pt='70px'>
        <VStack gap='25px' w='100%'>
          <Heading as='h2' fontSize='50px' fontWeight={700} m={0} color='#181825'>Perfis</Heading>
          <Text as='span' fontSize='18px' fontWeight={400} color='#181825' textAlign='center'>
            Conheça os perfis de investidores para<br />
            entender qual demanda atende melhor você
          </Text>
        </VStack>
      </Box>
      <Box w='100%' pl='20px' pt='40px' pb='70px' maxW='1440px'>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 25
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 15
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 15
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {profiles.map((profile, index) => (
            <Profile key={index} title={profile.title} videoUrl={profile.videoUrl}/> 
          ))}
        </Carousel>
      </Box>
      <VStack w='100%' mb='140px'>
        <Button
          w='309px'
          h='50px'
          p={0}
          bg='#3971EF'
          color='#FFF'
          fontSize='17px'
          fontWeight={400}
          border='none'
          outline='none'
          _hover={{ bg: '#3971EF' }}
          onClick={handleNavigate}
        >
          <Center w='100%' h='100%'>
            Inicie sua simulação
          </Center>
        </Button>
      </VStack>
      <Footer />
    </Flex>
  )
}

export default Home