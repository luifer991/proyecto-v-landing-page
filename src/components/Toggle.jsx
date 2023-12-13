import './Toggle.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Toggle({ handleChange, isChecked }) {
    const [Light, setIsLight] = useState(false);
    const text = Light ? "Modo Claro" : "Modo Oscuro";

    const handleClick = () => {
        setIsLight(!Light)
    }

    return(
        <div className="toggle-container">
            <input 
            type="checkbox"
            id='check'
            className='toggle'
            onChange={handleChange}
            checked={isChecked} 
            />
            <label htmlFor="check" onClick={handleClick}>{text}</label>
        </div>
    )
}
export default Toggle

Toggle.propTypes = {
    handleChange: PropTypes.func,
    isChecked: PropTypes.any
};