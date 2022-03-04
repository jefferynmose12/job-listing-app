import React, {useState} from "react";
import JobBoard from "./components/JobBoard.js";
import desktop from './assets/images/bg-header-desktop.svg'
import mobile from './assets/images/bg-header-mobile.svg'
import data from './assets/data.json'
import Header from "./components/Header.js";

function App() {
  const [filtersKeywords, setFiltersKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filtersKeywords.includes(data)) {
      setFiltersKeywords([...filtersKeywords, data])
    }
  }

  const deleteKeyword = (data) => {
    const newKeyword = filtersKeywords.filter(key => key !== data);
    setFiltersKeywords(newKeyword);
  };

  const clearAllKeywords = (data) => {
    setFiltersKeywords([]);
  }


  return (
    <div className='mx-auto'>
      <img src={desktop} className='hidden md:block w-full bg-DDark-Cyan' alt='' />
      <img src={mobile} className='md:hidden w-full bg-DDark-Cyan' alt='' />
      <div className='bg-Light-CyanB w-full min-h-screen'>
        {
          filtersKeywords.length > 0 && <Header keywords = {filtersKeywords} removeKeywords={deleteKeyword} clearAll={clearAllKeywords} />
        }
        <JobBoard keywords={filtersKeywords} data={data} setKeywords={addFilterKeywords} />
      </div>
    </div>
  );
}

export default App;
