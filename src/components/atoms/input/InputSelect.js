import styled from 'react-emotion';
import { rem } from 'polished';
import * as input from '../../../styles/inputs';
import * as state from '../../../styles/state';
import * as color from '../../../styles/colors';

const InputSelect = styled('select')`
  ${input.inputBase};
  padding-left: ${input.paddingHorizontal};
  padding-right: ${rem('45px')};
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="%23ddd" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path></svg>');
  background-repeat: no-repeat;
  background-position: right ${rem('15px')} center;
`;

export default InputSelect;