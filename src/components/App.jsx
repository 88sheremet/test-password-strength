import { useEffect, useState } from 'react';
import css from '../components/App.module.css';

export const App = () => {
  const grey = { backgroundColor: 'rgb(145, 143, 140)' };
  const red = { backgroundColor: 'rgb(201, 24, 24)' };
  const yellow = { backgroundColor: 'rgb(211, 231, 28)' };
  const green = { backgroundColor: 'rgb(78, 199, 48)' };
  const [value, setValue] = useState('');
  const [colorEasy, setColorEasy] = useState(grey);
  const [colorNormal, setColorNormal] = useState(grey);
  const [colorGood, setColorGood] = useState(grey);
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const letter = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'];

  const onChangeColor = () => {
    if (value.length < 8) {
      return 'lol';
    } else if (value.length >= 8) {
      return 'cool';
    }

    const arrStr = value.split('');
    console.log(arrStr);
  };

  useEffect(() => {
    const arrStr = value.split('');
    console.log(arrStr);

    if (value.length === 0) {
      setColorEasy(grey);
      setColorNormal(grey);
      setColorGood(grey);
    }

  else if (value.length < 8) {
      setColorEasy(red);
      setColorNormal(red);
      setColorGood(red);
    }

    for (const char of arrStr) {
      if (
        numbers.includes(char) 
        // &&
        // !symbol.includes(char) &&
        // !letter.includes(char)
      ) {
        console.log('YESNum');
        setColorEasy(red);
      } else if (
        // !numbers.includes(char) &&
        symbol.includes(char) 
        // &&
        // !letter.includes(char)
      ) {
        console.log('YESsymb');
        setColorEasy(red);
      } else if (
        // !numbers.includes(char) &&
        // !symbol.includes(char) &&
        letter.includes(char)
      ) {
        console.log('YESletteR');
        setColorEasy(red);
      }


     else if (
        numbers.includes(char) &&
        symbol.includes(char) &&
        !letter.includes(char)
      ) {
        console.log('YESnumandsymb');
        setColorNormal(yellow);
        setColorEasy(yellow);
      } else if (
        !numbers.includes(char) &&
        symbol.includes(char) &&
        letter.includes(char)
      ) {
        console.log('YESaymbandlettr');
        setColorNormal(yellow);
        setColorEasy(yellow);
      } else if (
        (numbers.includes(char)) &&
        // !symbol.includes(char) &&
        (letter.includes(char))
      ) {
        console.log('YESnumbandletter');
        setColorNormal(yellow);
        setColorEasy(yellow);
      }
    }

    

  
  }, [value]);

  return (
    <div>
      <form action="">
        <label htmlFor="">
          <input
            type="text"
            onChange={e => {
              return setValue(e.target.value);
            }}
          />
        </label>
      </form>

      <div>
        <span>easy</span> : <span style={colorEasy}>{onChangeColor()}</span>
      </div>
      <div>
        <span>normal</span>: <span style={colorNormal}>{onChangeColor()}</span>
      </div>
      <div>
        <span> good</span> : <span style={colorGood}>{onChangeColor()}</span>
      </div>
    </div>
  );
};
