import React, {useState, useEffect} from 'react'

import Form from './Form';
import ShowInfoTable from './ShowInfoTable';

export const FormView = () => {
    const url = 'http://localhost:5000/userInfo';
    const [dataInfo, setDataInfo] = useState([]);
  
  const fetchFormInformation = () => {
    fetch(url)
      .then((response) => response.json())
      .then((formInfo) => { 
        setDataInfo(formInfo); 
    });
  };

  useEffect(() => {
    fetchFormInformation(url);
  }, []);
  
  return (
    <>
    <Form dataInfo={dataInfo} setDataInfo={setDataInfo} />
    <ShowInfoTable dataInfo={dataInfo} />
    </>
  )
}
export default FormView
