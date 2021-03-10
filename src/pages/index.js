import { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { API } from 'libs';
import { setFarms } from 'redux/actions/main';
import { AddFarmInput, FarmList } from 'components';
import styles from 'styles/Home.module.css';


const Home = (props) => {
  const {
    fetchedFarms,
    setFarms,
    farms,
  } = props;

  useEffect(() => {
    setFarms(fetchedFarms);
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

const mapStateToProps = (state) => ({
  farms: state.main.farms,
});

const mapDispatchToProps = {
  setFarms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export const getStaticProps = async () => {
  const { data: fetchedFarms } = await API({ method: 'GET', path: process.env.API_FARMS_PATH });

  return {
    props: {
      fetchedFarms,
    },
  };
};
