import React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../Interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
import DataTable from '../Datatable/DataTable';

interface IContainerProps {}

const Container: React.FC<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  }

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("Response from server is: ", response);
    const sortedData = response.data.sort((a: UrlData, b: UrlData) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setData(sortedData);
    setReload(false);
  }

  React.useEffect(() => {
    if (reload) {
      fetchTableData();
    }
  }, [reload]);

  React.useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </>
  );
};

export default Container;
