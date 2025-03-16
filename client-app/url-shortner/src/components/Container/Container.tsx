import React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../Interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
import DataTable from '../Datatable/DataTable';

interface IContainerProps {}

const Container: React.FC<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("Respone from server is: ", response);
    setData(response.data);
}

React.useEffect(() => {
    fetchTableData();
}, []);


    return (
    <>
    <FormContainer/>
    <DataTable  data={data}/>
    </>
  );
};

export default Container;
