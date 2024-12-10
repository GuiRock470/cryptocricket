/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Center, Flex, Image, InputGroup, ListItem, UnorderedList } from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react'
import { assets } from '../assets/assets';

interface Options{
  value: string;
  content: ReactNode;
}

interface DropdownProps{
  id: string;
  defaultOpt: ReactNode;
  menu: Options[];
  onOptionSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ id, defaultOpt, menu, onOptionSelect }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<ReactNode>(defaultOpt);

  const handleClick = (value: string, content: React.ReactNode) => {
    setSelected(content);
    onOptionSelect(value);
    setOpen(false);
  }
  return (
    <Box id={id} w='100%' pos='relative'>
      <InputGroup w='100%' h='50px' onClick={() => setOpen(!isOpen)} cursor='pointer'>
        <Flex
          h='100%'
          w='100%'
          align='center'
          p='0 9px 0 18px'
          transition='ease all 0.3s'
          justify='space-between'
          border='1px solid #DEDEDE'
          borderRadius={isOpen ? '8px 8px 0px 0px' : '8px'}
        >
          {selected}
          <Center transition='ease all 0.3s' transform={isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'} w='32px' h='32px'>
            <Image src={assets.arrow} alt='' />
          </Center>
        </Flex>
      </InputGroup>
      <Box
        w='100%'
        left={0}
        bg='#FFF'
        top='49px'
        zIndex={100}
        pos='absolute'
        overflow='hidden'
        borderRadius='0 0 10px 10px'
        transition='ease all 0.3s'
        h={isOpen ? (2 + (menu.length * 50) + 'px') : '0px'}
      >
        <UnorderedList
          ml={0}
          w='100%'
          bg='#FFF'
          padding={0}
          border='1px solid #DEDEDE'
          borderRadius='0 0 10px 10px'
        >
          {menu.map((item, index) => (
            <ListItem
              cursor='pointer'
              w='100%'
              display='flex'
              alignItems='center'
              h='50px'
              p='0 18px'
              key={index}
              onClick={() => handleClick(item.value, item.content)}
              value={item.value}
              _hover={{bg: '#DEDEDE'}}
            >
              {item.content}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default Dropdown