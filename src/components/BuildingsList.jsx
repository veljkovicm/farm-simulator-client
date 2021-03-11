import { BuildingDetails, BuildingUnits } from 'components';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const BuildingList = ({ buildings }) => {
  const classes = useStyles();
  let buildingsMarkup;
  if (buildings.length === 0) {
    buildingsMarkup = <h4>This farm doesn't have any buildings yet</h4>;
  } else {
    buildingsMarkup = Object.values(_.keyBy(buildings, 'id')).map((building) => (
      <Accordion key={building.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{building.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BuildingDetails building={building} />
        </AccordionDetails>
        <AccordionDetails>
          <BuildingUnits units={building.units} />
        </AccordionDetails>
      </Accordion>
    ));
  }

  return buildingsMarkup;
};

export default BuildingList;
