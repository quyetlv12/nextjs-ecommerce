import * as React from 'react';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Stack } from '@mui/material';
import MultipleSelect from './select';
import CheckboxLabels from './checkbox';
import SliderSizes from './slider';

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function DialogsFilterMobile() {
  return (
    <Stack>
        <RadioGroup name="use-radio-group" defaultValue="first">
          <MyFormControlLabel value="first" label="First" control={<Radio />} />
          <MyFormControlLabel value="second" label="Second" control={<Radio />} />
          <MyFormControlLabel value="third" label="First" control={<Radio />} />
          <MyFormControlLabel value="four" label="Second" control={<Radio />} />
          <MyFormControlLabel value="five" label="First" control={<Radio />} />
          <MyFormControlLabel value="sixe" label="Second" control={<Radio />} />
        </RadioGroup>
        <MultipleSelect/>
        <CheckboxLabels/>
        <SliderSizes/>
    </Stack>
  );
}
