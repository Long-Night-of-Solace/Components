import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

//for handling clicks outside of panel
  useEffect((event) =>{
    const handler = (event) => {
        if(!divEl.current)
        {
            return;
        }
        if (!divEl.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    document.addEventListener('click', handler, true);

    return () => {
        document.removeEventListener('click', handler, true);
    };

  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
// closes dropdown and communicates the option that was selected
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  }
//maps the list
  const renderedOptions = options.map((option) => {

    return (
    <div
    className='hover:bg-sky-100 rounded'
    onClick={() => handleOptionClick(option)} 
    key={option.value}>{option.label}
    </div>
    );

  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel 
      className="flex justify-between items-center cursor-pointer" 
      onClick={handleClick}
      >
    {value?.label || 'Select...'}
    <GoChevronDown className='text-2xl'/>
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
