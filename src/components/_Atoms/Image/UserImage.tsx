import styled from 'styled-components';
import UserSvg from 'img/icon-user.svg';
import User2Svg from 'img/icon-user-2.svg';

interface UserImageI {
  isActive?: boolean;
}

const UserImage = ({ isActive }: UserImageI) => {
  return <>{isActive ? <Image src={User2Svg} /> : <Image src={UserSvg} />}</>;
};

export default UserImage;

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin: 0 0.4rem 0.1rem 0;
`;
