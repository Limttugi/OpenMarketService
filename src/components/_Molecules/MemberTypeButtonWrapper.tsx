import MemberTypeButton from 'components/_Atoms/Button/MemberTypeButton';

interface MemberTypeButtonWrapperI {
  sign: '로그인' | '회원가입';
}

const MemberTypeButtonWrapper = ({ sign }: MemberTypeButtonWrapperI) => {
  return (
    <div>
      <MemberTypeButton type={{ sign: sign, member: '구매' }} />
      <MemberTypeButton type={{ sign: sign, member: '판매' }} />
    </div>
  );
};

export default MemberTypeButtonWrapper;
