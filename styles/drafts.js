import css from 'styled-jsx/css'

export default css.drafts
`
  .post {
    background: white;
    border-radius: 30px;
  }

  .bold {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;
  }

  .left a[data-active='true'] {
    color: gray;
  }

  a + a {
    margin-left: 1rem;
  }

  .post + .post {
    margin-top: 2rem;
  }
`;

