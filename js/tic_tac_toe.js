//alert('loaded');
const board_container = document.querySelector(".play-area");

const winner_statement = document.getElementById("winner");

const  play_type = document.querySelectorAll('[name=play-type]');

const tic_tac_toe_game = {
    
    player: "O",
    computer: "X",
    play_type: "computer",

    board_full: false,
    play_board: ["", "", "", "", "", "", "", "", ""],

   

    check_board_complete: () => {
        let flag = true;
        this.play_board.forEach(element => {
            if (element != this.player && element != this.computer) {
            flag = false;
            }
        });
        this.board_full = flag;
    },

    check_line: (a, b, c) => {
        return (
            this.play_board[a] == this.play_board[b] &&
            this.play_board[b] == this.play_board[c] &&
            (this.play_board[a] == this.player || this.play_board[a] == this.computer)
        );
    },

    check_match: () => {
        for (i = 0; i < 9; i += 3) {
            if (this.check_line(i, i + 1, i + 2)) {
            return this.play_board[i];
            }
        }
        for (i = 0; i < 3; i++) {
            if (this.check_line(i, i + 3, i + 6)) {
            return this.play_board[i];
            }
        }
        if (this.check_line(0, 4, 8)) {
            return this.play_board[0];
        }
        if (this.check_line(2, 4, 6)) {
            return this.play_board[2];
        }
        return "";
    },

    check_for_winner: () => {
        let res = this.check_match()
        if (res == this.player) {
            this.winner.innerText = "Winner is player!!";
            this.winner.classList.add("playerWin");
            this.board_full = true
        } else if (res == this.computer) {
            this.winner.innerText = "Winner is computer";
            this.winner.classList.add("computerWin");
            this.board_full = true
        } else if (this.board_full) {
            this.winner.innerText = "Draw!";
            this.winner.classList.add("draw");
        }
    },

    render_board: () => {
        board_container.innerHTML = "";
        const vi = this;
        vi.play_board.forEach((e, i) => {
            board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${vi.play_board[i]}</div>`
            if (e == vi.player || e == vi.computer) {
            document.querySelector(`#block_${i}`).classList.add("occupied");
            }
        });
    },

    game_loop: () => {
        this.render_board();
        this.check_board_complete();
        this.check_for_winner();
    },

    addPlayerMove: e => {
        if (!this.bthis.oard_full && this.play_board[e] == "") {
            this.play_board[e] = this.player;
            this.game_loop();
            this.addComputerMove();
        }
    },

    addComputerMove: () => {
        if (!this.board_full) {
            do {
            selected = Math.floor(Math.random() * 9);
            } while (this.play_board[selected] != "");
            this.play_board[selected] = this.computer;
            this.game_loop();
        }
    },

    reset_board: () => {
        alert('reset');
        this.play_board = ["", "", "", "", "", "", "", "", ""];
        this.board_full = false;
        this.winner.classList.remove("playerWin");
        this.winner.classList.remove("computerWin");
        this.winner.classList.remove("draw");
        this.winner.innerText = "";
        this.render_board();
    }
}


//initial render
window.load = function(e){
    
    tic_tac_toe_game.render_board();
    alert('before ')
    document.getElementById('board-reset-btn').addEventListener('click', tic_tac_toe_game.reset_board);
};
