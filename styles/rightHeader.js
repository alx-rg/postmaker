import css from 'styled-jsx/css'

export default css.rightHeader
`
  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;
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
`;

