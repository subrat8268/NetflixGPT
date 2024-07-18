import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUND_IMAGE_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center" style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
