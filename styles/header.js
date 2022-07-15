import css from 'styled-jsx/css'

export default css.header
`
  .bold {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;

    border: 1px black solid;
    border-radius: 6px;
    padding: 5px 10px;
    background-color: white;
  }

  .left a[data-active='true'] {
    color: darkblue;
    
  }

  a + a {
    margin-left: 1rem;
  }
`;

