import { useState, useRef, useEffect } from "react"
import './SelectBox.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



const UserSelectBoxCustom = (props) => {
    const node = useRef();
    const [selectedOption, setSelectedOption] = useState(null)
    const [showSelectOption, setShowSelectOption] = useState(false)


    const optionSelected = (value) => {
      setSelectedOption(value)
      setShowSelectOption(false)
      props.getValue(value)
      console.log(selectedOption,'selectedOption')
  }

  useEffect(() => {
    setSelectedOption(props.peop)
  }, [props.userRole])

    useEffect(() => {
        if (showSelectOption) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [showSelectOption]);
    const handleClickOutside = e => {
        console.log("clicking anywhere");
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setShowSelectOption(false);
      };
    
    

    const onClickedSelectBox = () => {
        setShowSelectOption(!showSelectOption)
    }

  

    // renderOptions = () => {

    // }

    return (
        <div  ref={node} className='selectbox-main-conatiner'>
            <div  className={props.class} onClick={() => onClickedSelectBox()}>{selectedOption ? selectedOption : 'User Role'}
              {showSelectOption ?<span className='arrow-dropdown'><KeyboardArrowUpIcon fontSize={'inherit'} /></span>
               :  <span className='arrow-dropdown'><KeyboardArrowDownIcon fontSize={'inherit'} /></span>}
            </div>
            {showSelectOption ?
            <div className={props.class2}>
                
                   { props.roles.map((item, index) => {
                        return (
                            <div className='select-option-item' key={index} onClick={() => {optionSelected(item)}} >{item}</div>
                        )
                        
                    })}
                
            </div>: ''}
        </div>
    )
}

export default SelectBoxCustom;