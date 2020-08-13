import * as React from 'react';
import { useDispatch } from 'react-redux';
import { lvl, rnd } from 'containers/Games/AudioCall/actions';
import Option from './Option';

interface Options {
  options: Array<number>,
  currLvl: string,
  isLevelOption: boolean,
}

function OptionItems({ options, currLvl, isLevelOption }: Options): JSX.Element {
  const dispatch = useDispatch();
  const actionToDispatch = isLevelOption ? lvl : rnd;

  const selectChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => dispatch(
    actionToDispatch(event.currentTarget.value),
  );

  return (
    <select
      className="custom-select mr-sm-2"
      id="levels"
      defaultValue={currLvl}
      onChange={selectChangeHandler}
    >
      { options.map((option, ind) => <Option item={+ind + 1} key={+ind + 1} />) }
    </select>
  );
}

export default OptionItems;
