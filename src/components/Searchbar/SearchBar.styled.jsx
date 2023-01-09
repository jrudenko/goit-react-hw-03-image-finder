import styled from '@emotion/styled'

export const SearchHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px 0;
  color: #fff;
  background: radial-gradient(circle, rgba(7, 175, 66, 1) 0%, rgba(4, 80, 36, 1) 100%);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;