import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Button({ content, link }) {
    const history = useHistory();
    const location = useLocation().pathname;

    const handleButtonClick = () => {
        history.push(link)
    }

    return (
        <button className={ location === link ? 'sidebar-button active' : 'sidebar-button'} onClick={() => handleButtonClick()}>
            {content}
        </button>
    )
}
