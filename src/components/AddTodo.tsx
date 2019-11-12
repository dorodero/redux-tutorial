import * as React from 'react';

type Props = {
  text: string;
  onSubmit: () => void;
  onChange: (text: string) => void;
};

const component: React.FC<Props> = props => {
  const textInput = React.createRef<HTMLInputElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.text) {
      props.onSubmit();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => {
            handleChange(e);
          }}
          value={props.text}
        />
        <button type={'submit'}>Add Todo</button>
      </form>
    </div>
  );
};

export default component;
