import { useNavigate } from 'react-router-dom';

import { MediumSmallButton16P } from 'components/Atoms/Button/Size/MediumSmall/MS-Button';
import { TextInputBox } from 'components/Atoms/Input/Text/Text-InputBox';
import { ErrorMessage, SignUp_InputProps_I } from './common';

const SignUpInputRegistrationNumber = ({
  thisRef,
  value,
  setValue,
  onBlurEvent,
  validationMessageOrPass,
}: SignUp_InputProps_I) => {
  const navigate = useNavigate();

  // const handleCheckRegistrationNumber = () => {
  //   checkRegistrationNumber({ registration_number: value })
  //     .then(res => {
  //       console.log(res);
  //       navigate('/signin');
  //     })
  //     .catch(err => {
  //       const RESPONSE_ERROR = err.response.data;
  //       console.error(RESPONSE_ERROR);
  //     });
  // };

  return (
    <fieldset>
      <TextInputBox
        thisRef={thisRef}
        value={value}
        setValue={setValue}
        width='34.6rem'
        type='text'
        typeText='사업자 등록번호'
        validation={validationMessageOrPass === '' || validationMessageOrPass === true}
        onBlurEvent={onBlurEvent}
      >
        <MediumSmallButton16P width='12.2rem' text='인증' margin='0 0 0 1rem' onClickEvent={onBlurEvent} />
      </TextInputBox>
      <ErrorMessage validation={validationMessageOrPass === true || validationMessageOrPass === ''}>
        {validationMessageOrPass}
      </ErrorMessage>
    </fieldset>
  );
};

export default SignUpInputRegistrationNumber;
