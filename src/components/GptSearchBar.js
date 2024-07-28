import React from 'react';
import lang from '../utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);

    return (
        <div className="flex flex-col w-[600px] justify-center">

            <form className="relative flex p-2 rounded-md z-50 bg-black">
                
                <input
                    type="text"
                    placeholder={lang[langKey].gptPlaceholder}
                    className="rounded-md flex-1 px-6 py-4 mr-2 text-gray-700 focus:outline-none"
                />

                <button
                    className="bg-[#d9232e] text-white rounded-md font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                >
                    {lang[langKey].search}
                </button>

            </form>


        </div>
    );
}

export default GptSearchBar;
