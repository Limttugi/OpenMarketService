import styled from 'styled-components';
import { mainColor } from 'styles/global';

interface UserImageTextI {
  text: string;
  isActive?: boolean;
}

const UserImageText = ({ text, isActive }: UserImageTextI) => {
  return <Text isActive={isActive}>{text}</Text>;
};

export default UserImageText;

const Text = styled.p<{ isActive: boolean | undefined }>`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => (props.isActive ? mainColor : '#767676')};
`;
