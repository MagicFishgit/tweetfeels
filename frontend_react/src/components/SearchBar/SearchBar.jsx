import React, { useState } from 'react';

import './SearchBar.scss';

const SearchBar = () => {

    const [formData, setFormData] = useState({ hashtag: ''});

    const { hashtag } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <>
         <div className='app__searchbar'>
            <input className='p-text' type='text' placeholder='Enter #hashtag to analyze sentiment.' name='hashtag' value={hashtag} onChange={handleChangeInput} />
          </div>
        </>
    )
}

export default SearchBar