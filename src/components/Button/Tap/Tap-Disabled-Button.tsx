import styled from 'styled-components';
import { ButtonWidthPropsI } from 'components/Button';
import { TapButtonCS } from '.';

interface TapDisabledButtonI extends ButtonWidthPropsI {
  text: string;
  onClickEvent?: React.MouseEvent<HTMLElement>;
}

const TapDisabledButton = ({ text, width }: TapDisabledButtonI) => {
  return (
    <Button width={width} color='#767676'>
      {text}
    </Button>
  );
};

const Button = styled(TapButtonCS)`
  color: ${props => props.color};
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.6rem;
    background: #e0e0e0;
  }
`;

export default TapDisabledButton;
