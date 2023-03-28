import Header from 'components/Organisms/Header/Header';
import styled from 'styled-components';

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
