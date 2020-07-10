import styled from "styled-components";

const Button = styled.button`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) =>
    props.inCart ? "var(--bgYellow)" : "var(--secondaryBlue)"};
  background: transparent;
  padding: 0.25em 0.6em;
  margin: 0.15em 0.4em;
  border: 3px solid var(--secondaryBlue);
  border-color: ${(props) =>
    props.inCart ? "var(--bgYellow)" : "var(--secondaryBlue)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--primaryBlue);
    background-color: ${(props) =>
      props.inCart ? "var(--bgYellow)" : "var(--secondaryBlue)"};
  }

  @media screen and (max-width: 385px) {
    margin: 0 auto !important;
    border: 0;
    border-radius: 0;

    & sub {
      display: none;
    }
  }
`;

export default Button;
