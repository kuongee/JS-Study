import Board from './board.js';
import Piece from './piece.js';

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// 상수를 사용해 캔버스의 크기를 계산한다.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const moves = {
  [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
};

let board = new Board();

function play() {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();

  board.piece = piece;

  // keyCode deprecated
  // keypress 는 alt,shift,ctrl이 안 먹음
  // https://devstephen.medium.com/keyboardevent-key-for-cross-browser-key-press-check-61dbad0a067a
  // https://js-keyevents-demo.vercel.app/
  document.addEventListener('keydown', (event) => {
    if (moves[event.key]) {
      event.preventDefault();

      let p = moves[event.key](board.piece);

      if (board.valid(p)) {
        // 이동이 가능한 상태라면 조각을 이동한다.
        board.piece.move(p);

        // 그리기 전에 이전 좌표를 지운다.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        board.piece.draw();
      }
    }
  });
}

function initTetris() {
  const playButton = document.querySelector('.play-button');
  playButton.addEventListener('click', () => play());
}

initTetris();
