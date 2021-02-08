//Nick Latham
//dropdown button 
//got this from: https://medium.com/@alexandprivate/a-button-dropdown-in-react-and-not-3fc16525da62

import React from "react";

const sampleData = new Array(7).fill("item name");

const ButtonWithDropDownCmp = () => {
  
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  const data = sampleData;
  
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }

  function handleSelection(selection){
    setOpen(false)
    
  }
  
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  
  return (
    <div className="dropdown" ref={drop} >
      <button onClick={() => setOpen(open => !open)}>select an organization</button>
      {
        open && 
        <ul>
        {data.map((item, i) => (
          <li key={i} onClick={() => handleSelection(item)}>
            {item}
          </li>
        ))}
        </ul>
      }
    </div>
  );
};

export default ButtonWithDropDownCmp;
