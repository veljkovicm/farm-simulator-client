import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { API } from 'libs';
import { setFarms } from 'redux/farms/actions';
import { AddFarmInput, FarmList } from 'components';
import styles from 'styles/Home.module.css';


const Home = ({ fetchedFarms }) => {

  const dispatch = useDispatch();
  const farms = useSelector(state => state.farms.farms);

  useEffect(() => {
    dispatch(setFarms(fetchedFarms));
  }, [fetchedFarms, setFarms]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <AddFarmInput />
        <FarmList farms={farms} />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data: fetchedFarms } = await API({ method: 'GET', path: process.env.API_FARMS_PATH });

  return {
    props: {
      fetchedFarms,
    },
  };
};
