import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DropDownLink_I {
  href: string;
  text: string;
  onClickEvent?: () => void;
}

const DropDownLink = ({ href, text, onClickEvent }: DropDownLink_I) => {
  return (
    <DDLink to={href} onClick={onClickEvent}>
      {text}
    </DDLink>
  );
};

export default DropDownLink;

const DDLink = styled(Link)`
  width: 100%;
  height: 100%;

  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;

  color: inherit;
`;
