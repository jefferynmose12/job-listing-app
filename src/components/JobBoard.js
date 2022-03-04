import React, { useEffect, useState } from 'react'
import Job from './Job';

function JobBoard ({data, setKeywords, keywords}){
    console.log(data);
    const [filteredInfo, setFilteredInfo] = useState([]);

    const modifiedData = () => {
        if (keywords.length > 0){
            const newData = filteredInfo.filter((d) => {
                return keywords.every((Key) => {
                    return (
                        d.role === Key ||
                        d.level === Key ||
                        d.languages.includes(Key) ||
                        d.tools.includes(Key)
                    );
                });
            });
            setFilteredInfo(newData)
        } else {
            setFilteredInfo(data);
        }
    };

    useEffect(() => {
        modifiedData();
    }, [keywords])

    return (
        <div className='py-16 md:py-10 px-2 md:px-4 lg:px-14 '>
            {filteredInfo.map((d) => {
                return <Job Key={d.id} data={d} setKeywords={setKeywords} />
                })
            }
        </div>
    );
};

export default JobBoard;
