import { useState } from 'react';
import { connect } from 'react-redux';
import { addFarm } from 'redux/actions/main';
import { submitFarm } from './actions';

// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddFarmInput = ({ addFarm }) => {
  const [ name, setName ] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    submitFarm(name)
    .then((res) => {
      if(!res.error) {
        addFarm({ name: res.name, id: res.id });
      }
      console.log(res.error);
      setName('');
    });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px'}
        }
      >
        <TextField
          id="standard-basic"
          label="Farm name"
          value={name}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary" 
          onClick={handleSubmit}
        >
          Add Farm
        </Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addFarm,
}

export default connect(null, mapDispatchToProps)(AddFarmInput);
