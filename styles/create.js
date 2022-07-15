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
    border-radius: 6px;
    border: 1px black solid;
  }

  input[type='submit'] {
    border: 1px black solid;
    border-radius: 6px;
    padding: 5px 10px;
    background-color: white;
    color: black;
  }

  .back {
    margin-left: 1rem;
    text-decoration: none;
    color: black;
    border: 1px black solid;
    border-radius: 6px;
    padding: 5px 10px;
    background-color: white;
  }
`;