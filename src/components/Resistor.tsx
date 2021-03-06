import React, { useContext } from 'react';
import { BandContext, BandContextValue, reducerState } from '../contexts/BandContext';
import clsx from 'clsx';

import { colours } from '../constants/colourList';

const Resistor = () => {
  const { state } = useContext<BandContextValue>(BandContext);
  const { isFive, bands }: reducerState = state;
  const theme = colours.map((colour) => colour.theme);
  return (
    <svg width="60%" height="60%" viewBox="0 0 1247 515" version="1.1" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 1.5 }}>
      <path className={clsx('fill-current', { [`text-blue-400`]: isFive }, { [`text-yellow-200`]: !isFive })} d="M899.963,102.438c33.655,-88.895 101.036,-137.818 203.622,-70.558c-0,-0 321.13,187 0.643,449c-84.02,68.686 -156.96,22.081 -196.992,-65.529c-107.712,-16.615 -326.524,-39.208 -567.331,-0.311c-39.994,87.807 -113.01,134.611 -197.133,65.84c-320.487,-262 0.643,-449 0.643,-449c101.991,-66.87 169.185,-18.9 203.031,69.011c245.326,40.763 448.497,19.414 553.517,1.547Z" />
      <path className={clsx('fill-current', { [`${theme[bands[0]]}`]: true })} d="M174.5,14.54c25.093,-11.551 47.753,-15.581 68,-13.472l0,510.492c-21.043,4.85 -43.908,2.236 -68,-9.814l0,-487.206Z" />
      <path className={clsx('fill-current', { [`${theme[bands[1]]}`]: true })} d="M379.624,106.031c23.085,3.376 45.762,6.211 68,8.555l0,286.783c-22.373,2.091 -45.065,4.663 -68,7.801l0,-303.139Z" />
      <path className={clsx('fill-current', { [`${theme[bands[2]]}`]: isFive }, { [`${theme[bands[3]]}`]: !isFive })} d="M584.748,123.63c23.474,0.618 46.172,0.741 68,0.451l0,269.813c-21.948,-0.408 -44.651,-0.456 -68,-0.037l0,-270.227Z" />
      <path className={clsx('fill-current', { [`${theme[bands[3]]}`]: isFive }, { [`hidden`]: !isFive })} d="M857.872,108.913l0,299.587l-22.354,-2.681c-9.502,-0.999 -19.003,-1.997 -28.505,-2.996l-17.141,-1.536l0,-284.526c24.848,-2.306 47.588,-5.012 68,-7.848Z" />
      <path className={clsx('fill-current', { [`${theme[bands[4]]}`]: true })} d="M994.996,2.531c20.105,-4.166 42.772,-2.04 68,7.957l0,495.505c-24.231,9.793 -47.101,10.064 -68,2.894l0,-506.356Z" />
    </svg>
  )
}

export default Resistor;