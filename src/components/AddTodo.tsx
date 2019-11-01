import * as React from 'react';

type Props = {
  onSubmit: (text: string) => void;
};

// Refを使用するため、Stateは不要
// type State = {
//   value: string; // Inputの中身を保持する。
// };

const component: React.FC<Props> = props => {
  const textInput = React.createRef<HTMLInputElement>();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (textInput.current && textInput.current.value) {
      props.onSubmit(textInput.current.value);
      textInput.current.value = '';
    }
  };

  return (
    <div>
      <input ref={textInput} />
      <button
        onClick={e => {
          handleSubmit(e);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default component;
