import styled from '@emotion/styled';

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Label = styled.label`
  width: fit-content;
`;

export const Input = styled.input`
  width: 50%;
  border-radius: 7px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
