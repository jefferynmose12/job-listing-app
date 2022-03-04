import React from 'react'

function Header( {keywords, removeKeywords, clearAll} ) {
    return (
        <div className='absolute top-10 md:top-10 lg:top-28 w-full md:px-2'>
            <div className='flex  gap-3 py-4 px-4 md:py-7 mx-3 md:mx-5 lg:mx-14 md:px-4 lg:px-6 bg-white'>
                <div className='flex flex-col md:flex-row gap-5'>
                    {
                        keywords.map((key, id) => 
                            {
                                return (
                                    <div className='flex items-center text-DDark-Cyan font-semibold font-medium'>
                                        <button key={id} className='px-2 bg-Light-Cyanc p-1 pr-2'>{key}</button>
                                        <div className='bg-DDark-Cyan hover:bg-black p-2 cursor-pointer' onClick={() => removeKeywords(key)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                                            <path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <div className='ml-auto underline underline-offset-2 text-DDark-Cyan font-semibold cursor-pointer' onClick={clearAll}>
                    <div>Clear</div>
                </div>
            </div>
        </div>
    )
}

export default Header
