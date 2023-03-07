import styled from 'styled-components';
import Header from 'components/_Organisms/Header/Header';

interface SliderTemplateI {
  children: React.ReactNode;
}

const SliderTemplate = ({ children }: SliderTemplateI) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 9rem;
`;

export default SliderTemplate;
