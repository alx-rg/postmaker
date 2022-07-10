import css from 'styled-jsx/css'

export default css.logoutHeader
`
  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;
  }

  p {
    display: inline-block;
    font-size: 13px;
    padding-right: 1rem;
  }

  a + a {
    margin-left: 1rem;
  }

  .right {
    margin-left: auto;
  }

  .right a {
    border: 1px solid var(--geist-foreground);
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }

  button {
    border: none;
  }
`;

