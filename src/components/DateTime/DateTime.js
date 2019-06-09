import React from 'react';
import Card from 'components/Card/Card';
import { consumeDateTime } from 'contexts/DateTimeContext';
import moment from 'moment';

const DateTime = ({ date }) => (
  <div className="date-time">
    <Card>
      <p>{ moment(date).format('YYYY-MM-DD') }</p>
      <p>{ moment(date).format('HH:mm:ss') }</p>
    </Card>
  </div>
);

export default consumeDateTime(DateTime);