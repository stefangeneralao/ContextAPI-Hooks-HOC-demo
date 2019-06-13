import React from 'react';
import { consumeHeaderStyle } from 'contexts/HeaderStyleContext';
import Card from 'components/Card/Card';
import './HeaderSettings.scss';

const HeaderSettings = ({
  backgroundColor,
  onBackgroundColorChange,
  onTextFieldChange,
  onTextFieldSubmit,
  labelTextFieldValue,
}) => (
  <div className="header-settings">
    <Card>
      <h2>Header Settings</h2>
      <select
        onChange={ onBackgroundColorChange }
        value={ backgroundColor }
      >
        <option value="black">black</option>
        <option value="white">white</option>
      </select>
      <form onSubmit={ onTextFieldSubmit }>
        <input
          type="text"
          value={ labelTextFieldValue }
          onChange={ onTextFieldChange }
          placeholder={ 'Type any header text...' }
        />
      </form>
    </Card>
  </div>
);

export default consumeHeaderStyle(HeaderSettings);