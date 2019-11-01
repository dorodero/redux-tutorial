import * as React from 'react';

type Props = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const component: React.FC<Props> = props => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.active}
      style={{
        marginLeft: '4px',
      }}
    >
      {props.children}
    </button>
  );
};

export default component;
