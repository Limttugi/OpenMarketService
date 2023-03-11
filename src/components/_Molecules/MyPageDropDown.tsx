import { MyPageDropDownButtonLogOut, MyPageDropDownButtonMyPage } from 'components/_Atoms/Button/MyPageDropDownButton';
import styled from 'styled-components';

const MyPageDropDown = () => {
  return (
    <Container>
      <MyPageDropDownButtonMyPage />
      <MyPageDropDownButtonLogOut />
    </Container>
  );
};

export default MyPageDropDown;

const Container = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 9rem;
  width: 13rem;
  height: 10.8rem;
  background-color: white;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.25));
  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem 0 0 0;
    background-color: white;
    z-index: -1;
  }
`;
