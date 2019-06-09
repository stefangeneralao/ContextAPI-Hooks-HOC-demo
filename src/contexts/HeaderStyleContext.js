import React, { createContext, useState } from 'react';
import contextHOC from 'utils/contextHOC';

const HeaderStyleContext = createContext();

const HeaderStyleProvider = ({ children }) => {
  const [ label, setLabel ] = useState('Context + Hooks = <3');
  const [ color, setColor ] = useState('white');
  const [ backgroundColor, setBackgroundColor ] = useState('#333');
  const [ labelTextFieldValue, setLabelTextFieldValue ] = useState('');
  
  const onBackgroundColorChange = e => {
    const { value } = e.target;
    if (value === 'white') {
      setBackgroundColor('white');
      setColor('#333');
    } else if (value === 'black') {
      setBackgroundColor('#333');
      setColor('white');
    }
  }

  const onTextFieldChange = e => {
    setLabelTextFieldValue(e.target.value);
  }

  const onTextFieldSubmit = e => {
    e.preventDefault();
    setLabel(labelTextFieldValue);
    clearLabelTextFieldValue();
  }

  const clearLabelTextFieldValue = () => {
    setLabelTextFieldValue('');
  }
  
  return (
    <HeaderStyleContext.Provider
      value={ {
        label,
        color,
        backgroundColor,
        onBackgroundColorChange,
        onTextFieldChange,
        onTextFieldSubmit,
        labelTextFieldValue,
      } }
    >
      { children }
    </HeaderStyleContext.Provider>
  );
}

const HeaderStyleConsumer = HeaderStyleContext.Consumer;

export const [
  provideHeaderStyle,
  consumeHeaderStyle,
] = contextHOC(HeaderStyleProvider, HeaderStyleConsumer);