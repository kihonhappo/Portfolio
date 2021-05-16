//alert('loaded');
const board_container = document.querySelector(".play-area");

const winner = document.getElementById("winner");

const play_type = document.querySelectorAll('[name=play-type]');

let play_board = ["", "", "", "", "", "", "", "", ""];

const tic_tac_toe = {
    
    player: "O",
    computer: "X",
    play_type: "computer",
    debug: '',
    board_full: false,

    check_board_complete(){
        let flag = true;
        play_board.forEach(element => {
            if (element != this.player && element != this.computer) {
            flag = false;
            }
        });
        this.board_full = flag;
    },

    check_line(a, b, c){
        return (
            play_board[a] == play_board[b] &&
            play_board[b] == play_board[c] &&
            (play_board[a] == this.player || play_board[a] == this.computer)
        );
    },

    check_match(){
        for (i = 0; i < 9; i += 3) {
            if (this.check_line(i, i + 1, i + 2)) {
            return play_board[i];
            }
        }
        for (i = 0; i < 3; i++) {
            if (this.check_line(i, i + 3, i + 6)) {
            return play_board[i];
            }
        }
        if (this.check_line(0, 4, 8)) {
            return play_board[0];
        }
        if (this.check_line(2, 4, 6)) {
            return play_board[2];
        }
        return "";
    },

    check_for_winner(){
        let res = this.check_match()
        if (res == this.player) {
            winner.innerText = "Winner is player!!";
            winner.classList.add("playerWin");
            this.board_full = true;
        } else if (res == this.computer) {
            winner.innerText = "Winner is computer";
            winner.classList.add("computerWin");
            this.board_full = true
        } else if (this.board_full) {
            winner.innerText = "Draw!";
            winner.classList.add("draw");
        }
    },

    render_board(){
        board_container.innerHTML = "";
        var vi = this;
        
        play_board.forEach((e, i) => {
            board_container.innerHTML += `<div id="block_${i}" data-num="${i}" onclick="tic_tac_toe.addPlayerMove(${i})" class="block">${play_board[i]}</div>`;
            if (e == vi.player || e == vi.computer) {
                document.getElementById('block_' + i).classList.add("occupied");
            }
        });
    },
    game_loop(){
        this.render_board();
        this.check_board_complete();
        this.check_for_winner();
        this.debug_text(JSON.stringify(play_board));
    },
    addPlayerMove(e){
        //alert('addPlayerMove');
        if (!this.board_full && play_board[e] == "") {
            play_board[e] = this.player;
            this.game_loop();
            this.addComputerMove();
        }
    },
    addComputerMove(){
        if (!this.board_full) {
            do {
            selected = Math.floor(Math.random() * 9);
            } while (play_board[selected] != "");
            play_board[selected] = this.computer;
            this.game_loop();
        }
    },
    debug_text(val){
        //document.getElementById('debugger').value = val;
    },

    resetBoard(){
        play_board = ["", "", "", "", "", "", "", "", ""];
        this.board_full = false;
        winner.classList.remove("playerWin");
        winner.classList.remove("computerWin");
        winner.classList.remove("draw");
        winner.innerText = "";
        this.render_board();
    },
    loadBoard(){
        this.render_board();
        
    },
    
}


//initial render
window.onload = function(e){
    tic_tac_toe.loadBoard(tic_tac_toe);
    document.getElementById('board-reset-btn').addEventListener('click', function(){
        tic_tac_toe.resetBoard();
    });
};
