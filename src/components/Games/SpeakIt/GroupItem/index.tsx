import * as React from 'react';

const GroupItem = ({ className, item, fn }): JSX.Element => (
  <span className={className} onClick={fn}>{item}</span>
);

export default GroupItem;
