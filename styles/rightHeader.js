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
    border: 1px black solid;
    border-radius: 6px;
    padding: 5px 10px;
    background-color: white;
  }
`;

