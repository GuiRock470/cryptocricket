import React, { useState, useEffect } from 'react';
import { assets } from "../assets/assets";
import styles from '../styles/InputTypeDate.module.css';
import {
  InputGroup, Image,
  InputRightElement
} from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from  "react-datepicker";
import { ptBR } from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);
import DatePicker from 'react-datepicker';

interface InputTypeDateProps {
  selected: Date;
  size: string;
  onChange: (date: Date | null) => void;
}

const InputTypeDate: React.FC<InputTypeDateProps> = ({ selected, size, onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(selected);

  useEffect(() => {
    setStartDate(selected);
  }, [selected]);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <InputGroup w={size} pos='relative'>
      <DatePicker 
        locale='pt-BR'
        className={styles.dateInput} 
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yy"
      />
      <InputRightElement className={styles.datePickerIcon}>
        <Image src={assets.datePicker_icon} alt='date picker icon' />
      </InputRightElement>
    </InputGroup>
  );
}

export default InputTypeDate;
