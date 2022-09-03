import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import Select from '../../components/Select';
import styles from './home.module.scss';

const Home = () => {
  const [championshipSelected, setChampionshipSelected] = useState("");
  const [championships, setChampionships] = useState([
    {id: 1, name: "Campeonato Brasileiro Série A"},
    {id: 2, name: "Campeonato Brasileiro Série B"},
    {id: 3, name: "Copa do Brasil"}
  ]);

  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:4444/users/authenticate",
  //     data
  //   }).then((response) => {
  //     // console.log(response.data)
  //     if(response.data) {
  //       const {id, name, email} = response.data.user;
  //       localStorage.id = id;
  //       localStorage.name = name;
  //       localStorage.email = email;
  //       localStorage.token = response.data.token;
  //       setLogged(true);
  //     }
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // },[])

  useEffect(() => {
    console.log(championshipSelected);
  }, [championshipSelected]);

  return (
    <div className={ styles.home }>
      <Header />
      <div className={ styles.main }>
        <div className={ `${styles.selectChampionship} pt-2` }>
          <Select 
            label="Escolha o campeonato" 
            options={championships} 
            action={setChampionshipSelected }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;