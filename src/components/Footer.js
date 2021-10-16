import React from 'react';

const Footer = ({ start, setStart }) => {

    const getPrevPage = () => {
        if (start === 0)
            return;
        setStart(start - 100);
    }

    const getNextPage = () => {
        setStart(start + 100);
    }

    return <div className='footerContainer'>
        <div>
            <button className='pageButton' onClick={getPrevPage}>Prev</button>
            <button className='pageButton' onClick={getNextPage}>Next</button>
        </div>
    </div>
}

export default Footer;