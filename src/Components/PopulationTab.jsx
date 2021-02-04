import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { URL_API } from '../env';

const PopulationTab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_API}habitant`)
      //   .then((res) => console.log(res.data))
      .then((res) => setData(res.data));
  }, []);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Statut</th>
        </tr>
      </thead>
      {data.map((item) => {
        return (
          <tbody>
            <tr>
              <th scope="row">{item.id}</th>
              <td key={item.id}>{item.lastname}</td>
              <td key={item.id}>{item.firstname}</td>
              <td key={item.id}>{item.statut}</td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default PopulationTab;
