import React from 'react'

const Job = (props) => {
    const {
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    } = props.data;

    let Keywords = [role, level, ...languages, ...tools]

    console.log(logo);

    return (
        <div className ={"relative flex flex-col lg:flex-row my-20 mx-2 lg:my-14 bg-white p-5 md:p-6 lg:p-5 shadow-md rounded-md" + (featured ? ' border-l-4 border-DDark-Cyan ' : '')} >
            <div>
                <img src={require (`../assets/images/${logo}.svg`)} alt={company} className='absolute bottom-60 md:bottom-52 lg:static' />
            </div>

            <div className='flex flex-col gap-2 lg:gap-0 pt-2 md:py-3 lg:p-0 mt-8 lg:mt-0 lg:ml-4 justify-between'>
               <div className='flex'>
                    <h4 className='font-semibold text-DDark-Cyan'>
                        {company}
                    </h4>
                    {isNew && (<h4 className='mx-2 font-semibold text-white text-xs bg-DDark-Cyan py-1 px-2 rounded-xl' >NEW!</h4>)} 
                    {featured && (<h4 className='text-white font-semibold text-xs bg-VDark-Cyan py-1 px-2 rounded-xl'>FEATURED</h4>)}
                </div>
                 <h3 className='text-lg font-bold hover:text-DDark-Cyan cursor-pointer'>
                     {position}
                 </h3>
               <p className='text-gray-500 text-base'>
                 {postedAt}  ∙  {contract}  ∙  {location}
                 </p>
            </div>

            <div className='flex flex-wrap gap-5 py-3 lg:p-0 lg:ml-auto items-center border-t-2 lg:border-t-0'>
                {Keywords.map((key, id) => (
                    <button onClick={() => props.setKeywords(key)} key={id}
                    className='text-DDark-Cyan bg-Light-Cyanc font-medium py-1 px-2 
                    rounded hover:text-white hover:bg-VDark-Cyan cursor-pointer'>
                        {key}
                    </button>))
                }
            </div>
        </div>
    )
}

export default Job
