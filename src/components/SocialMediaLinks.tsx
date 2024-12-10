import { Center, HStack, Link, Image } from '@chakra-ui/react'
import React from 'react'

interface SocialMedia {
  href: string;
  boxShadow: string;
  bg: string;
  icon: string;
}

interface SocialMediaProps {
  data: SocialMedia[];
}

const SocialMediaLinks:React.FC<SocialMediaProps> = ({data}) => {
  return (
    <HStack gap='8px' align='center'>
      {data.map((socialmedia, index) => (
        <Link
          key={index}
          w='54px'
          h='54px'
          isExternal
          borderRadius='50%'
          href={socialmedia.href}
          boxShadow={socialmedia.boxShadow}
          bg={socialmedia.bg}
        >
          <Center w='100%' h='100%'>
            <Image src={socialmedia.icon} alt='' />
          </Center>
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaLinks