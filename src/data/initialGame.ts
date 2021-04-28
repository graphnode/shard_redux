
export interface Game {
  tick: number;
  tickSpeed: number;
}

const initialGame : Game = {
  tick: 0,
  tickSpeed: 1000,
};

export default initialGame;
