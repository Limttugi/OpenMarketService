import { useRecoilState } from 'recoil';
import { memberType } from 'recoil/atoms/member';
import styled from 'styled-components';

interface MemberTypeButtonI {
  type: {
    sign: '로그인' | '회원가입';
    member: 'BUYER' | 'SELLER';
  };
}

const MemberTypeButton = ({ type }: MemberTypeButtonI) => {
  const [_memberType, _setMemberType] = useRecoilState(memberType);

  const onChageMemberType = () => _setMemberType(type.member);

  return (
    <Button active={_memberType === type.member} onClick={onChageMemberType}>
      {type.member === 'BUYER' ? '구매' : '판매'}회원 {type.sign}
    </Button>
  );
};

export default MemberTypeButton;

const Button = styled.button<{ active: boolean }>`
  border: 1px solid #c4c4c4;
  border-bottom: 1px solid transparent;
  border-radius: 1rem 1rem 0 0;
  width: 27.5rem;
  height: 6rem;
  font-size: 1.8rem;
  font-weight: 500;
  background-color: ${props => (props.active ? 'white' : '#f2f2f2')};
  border-bottom-color: ${props => (props.active ? 'white' : '#c4c4c4')};
`;
