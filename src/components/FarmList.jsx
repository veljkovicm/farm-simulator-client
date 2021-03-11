import { FarmItem } from 'components';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const FarmList = ({ farms }) => {
  const classes = useStyles();
  let farmsList;

  if (farms.length) {
    farmsList = (
      farms.map((farm) => (
        <TableRow key={farm.id}>
          <TableCell component="th" scope="row">
            <div>
              <FarmItem farm={farm} />
            </div>
          </TableCell>
          <TableCell align="right">{farm.id}</TableCell>
        </TableRow>
      ))
    )
  } else {
    farmsList = <h4 style={{ paddingLeft: '15px' }}>No farms added yet.</h4>
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Farm Name</TableCell>
              <TableCell align="right">Farm ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {farmsList}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FarmList;
