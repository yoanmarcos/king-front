import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { URL_API } from '../env';

const PaysTab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_API}pays`)
      //   .then((res) => console.log(res.data))
      .then((res) => setData(res.data));
  }, []);

  return (
    <Table responsive style={{ border: 'solid' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Pays</th>
          <th>Ressource</th>
        </tr>
      </thead>
      {data.map((item) => {
        return (
          <tbody>
            <tr>
              <th scope="row">{item.id}</th>
              <td key={item.id}>{item.name}</td>
              <td key={item.id}>{item.Ressource.Type}</td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default PaysTab;
