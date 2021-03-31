import { useState, useEffect } from 'react';

const useClicked = (): [boolean, () => void] => {
  const [clicked, setClicked] = useState(true);
  const click = () => setClicked(true);
  useEffect(() => {
    if (!clicked) return;
    setTimeout(() => setClicked(false), 30);
  }, [clicked])

  return [clicked, click];
}

export default useClicked;