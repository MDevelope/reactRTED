import  { useState } from 'react';
import '../card/card.css';
const ButtonActive = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (value) => {
        setActiveButton(value);
    };

    const isActive = (value) => {
        return activeButton === value;
    };

    return (
        <div className="details-icon2">
            <button 
                type="submit" 
                className={`btn ${isActive(5) ? 'active' : ''}`} 
                onClick={() => handleButtonClick(5)}
            >
                5%
            </button>
            <button 
                type="submit" 
                className={`btn ${isActive(10) ? 'active' : ''}`} 
                onClick={() => handleButtonClick(10)}
            >
                10%
            </button>
            <button 
                type="submit" 
                className={`btn ${isActive(15) ? 'active' : ''}`} 
                onClick={() => handleButtonClick(15)}
            >
                15%
            </button>
            <button 
                type="submit" 
                className={`btn ${isActive(25) ? 'active' : ''}`} 
                onClick={() => handleButtonClick(25)}
            >
                25%
            </button>
            <button 
                type="submit" 
                className={`btn ${isActive(50) ? 'active' : ''}`} 
                onClick={() => handleButtonClick(50)}
            >
                50%
            </button>
            <button 
                type="submit" 
                className={`btn ${isActive(null) ? 'active' : ''}`} 
                onClick={() => handleButtonClick(null)}
            >
                Custom
            </button>
            {/* ... other buttons ... */}
        </div>
    );
};

export default ButtonActive;
