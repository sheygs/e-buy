import styled from "styled-components";

const Button = styled.button`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--secondaryBlue);
  background: transparent;
  padding: 0.25em 0.6em;
  margin: 0.2em 0.45em;
  border: 0.2em solid var(--secondaryBlue);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--primaryBlue);
    background-color: var(--secondaryBlue);
  }
`;

export default Button;
