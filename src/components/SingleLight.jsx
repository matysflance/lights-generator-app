import { useState } from 'react';
import LightOff from '/images/light-off.svg';
import LightBlue from '/images/light-blue.svg';

export const SingleLight = () => {
  const [isOn, setIsOn] = useState(true);

  const imageSrc = isOn ? LightBlue : LightOff;

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <img onClick={handleToggle} src={imageSrc} alt="Single light" />
  );
};
