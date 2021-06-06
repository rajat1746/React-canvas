
import React, {useState, useEffect} from 'react'
import './FilterChip.scss'



const FilterChip = (props)=> {
    const [removeChip, setRemoveChip] = useState(true)

    useEffect(() => {
        if(props.value) {
            setRemoveChip(false)
        }
    }, [props.value])

    const deleteHandle = () => {
        props.deleteHandle()
        setRemoveChip(true)
    }
    return (
        <React.Fragment>
            {!removeChip ? <div className='filter-chip-box'>
                <span>User Role</span> : 
                <span> {props.value}</span>
                <span onClick={deleteHandle} className='filterchipdelete-btn'>x</span>
            </div> : ''}
        </React.Fragment>
    )
}

export default FilterChip