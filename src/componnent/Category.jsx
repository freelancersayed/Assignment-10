import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'




const Category = () => {
    const text = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 0
      })
    return (
        <div>
        <div className='App'>
      <span>{text}</span>
    </div>
        </div>
    );
};

export default Category;