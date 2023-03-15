import { MediumSmallButton16P } from 'components/_Atoms/Button/Size/MediumSmall/MS-Button';
import { Dispatch } from 'react';
import { TextInputBox } from './TextInputBox';

interface SignUpIDI {
  value: string;
  setValue: Dispatch<any>;
}

const SignUpID = ({ value, setValue }: SignUpIDI) => {
  return (
    <TextInputBox value={value} setValue={setValue} width='34.6rem' type='text' typeText='아이디' validation={true}>
      <MediumSmallButton16P width='12.2rem' text='중복확인' margin='0 0 0 1rem' />
    </TextInputBox>
  );
};

export default SignUpID;
