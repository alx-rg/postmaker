import css from 'styled-jsx/css'

export default css.create
`
  .page {
    background: var(--geist-background);
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type='text'],
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    border: 0.125rem solid rgba(0, 0, 0, 0.2);
  }

  input[type='submit'] {
    background: #ececec;
    border: 0;
    padding: 1rem 2rem;
  }

  .back {
    margin-left: 1rem;
  }
`;