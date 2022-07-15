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
    font-size: 14px;
    padding-right: .5rem;
    font-weight: bold;
    color: #d7d9d7;
  }

  a + a {
    margin-left: 1rem;
  }

  .right {
    margin-left: auto;
  }

  button {
    margin-left: .5rem;
    background: #ececec;
    border: 1px black solid;
    border-radius: 6px;
    padding: 5px 10px;
    background-color: white;
  }
`;

