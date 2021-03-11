import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useEffect } from 'react';
import { API } from 'libs';
import { setBuildings } from 'redux/buildings/actions';
import { AddFarmBuilding, BuildingsList } from 'components';
import styles from 'styles/Farm.module.css';


const Farm = ({ fetchedBuildings, farmId }) => {
  const dispatch = useDispatch();
  const buildings = useSelector(state => state.buildings.buildings);
  

  useEffect(() => {
    dispatch(setBuildings(_.keyBy(fetchedBuildings, 'id')));
  }, [ fetchedBuildings, setBuildings ]);

  return (
    <div className={styles.container}>
      <AddFarmBuilding farmId={farmId} />
      <BuildingsList buildings={buildings} />
    </div>
  );
};

export default Farm;

export const getServerSideProps = async (context) => {
  const res = await API({
    method: 'GET',
    path: process.env.API_BUILDING_PATH,
    params: { id: context.params.id },
  });

  return {
    props: {
      fetchedBuildings: res.data,
      farmId: context.params.id,
    },
  };
};
