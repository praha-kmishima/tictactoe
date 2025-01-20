import Game from './Game';

export default {
  title: 'Game',
  component: Game,
  parameters: {
    layout: 'centered',
  },
};

// 基本的なストーリー
export const Default = {
  render: () => <Game />,
};

