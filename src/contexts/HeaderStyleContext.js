import React, { createContext, useState, useRef, useEffect } from 'react';
import contextHOC from 'utils/contextHOC';

const HeaderStyleContext = createContext();

const initialBackgroundColor = (
  localStorage.getItem('headerBackgroundColor') || '#333'
);

const initialColor = (
  localStorage.getItem('headerFontColor') || 'white'
);

const initialLabel = (
  localStorage.getItem('headerLabel') || 'Context + Hooks = <3'
);

const HeaderStyleProvider = ({ children }) => {
  const [ label, setLabel ] = useState(initialLabel);
  const [ color, setColor ] = useState(initialColor);
  const [ backgroundColor, setBackgroundColor ] = useState(initialBackgroundColor);
  const [ labelTextFieldValue, setLabelTextFieldValue ] = useState('');
  const isInitialMount = useRef(true);
  
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

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem('headerBackgroundColor', backgroundColor);
      localStorage.setItem('headerFontColor', color);
      localStorage.setItem('headerLabel', label);
    }
  }, [ label, color, backgroundColor ]);
  
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