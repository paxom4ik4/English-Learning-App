import * as React from 'react';

function Option({ item }: {item: number}): JSX.Element {
  return (
    <option value={item}>{item}</option>
  );
}

export default Option;
