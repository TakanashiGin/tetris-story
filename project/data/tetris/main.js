var array = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var moveFlag = 0; // 動かす対象があるかどうか(0はない、1はあることを示す)





function draw() {
    $('#game').find('tr').each(function(i, elemTr) { // trタグそれぞれに対する処理
        $(elemTr).children().each(function(j, elemTd) { // tdタグそれぞれに対する処理
            $(elemTd).removeClass(); // まずはクラスをすべてなしにする
            switch (array[i][j]) {
                case 1:
                    $(elemTd).addClass("stick"); // 1の時にはstickクラスを割り振る
                    break;
                default:
                    $(elemTd).addClass("default"); // それ以外の時にはdefaultクラスを割り振る
            }
        })
    });
}





function fall() {
    var under = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    for (var i = 19; i >= 0; i--) {
        for (var j = 0; j < 10; j++) {
            if (under[j] == 0) {
                if (array[i][j] == 0) {
                  // 下に何もなくブロックでもない
                  under[j] = 0;
                } else {
                  // 下に何もなくブロックであるとき
                  array[i + 1][j] = array[i][j];
                  array[i][j] = 0;
                  // moveも一緒に動かす
                  if (move[i][j] == 1) {
                      move[i][j] = 0;
                      move[i + 1][j] = 1;
                  }
                  under[j] = 0;
                }
            } else {
                if (array[i][j] == 0) {
                  // 下がブロックでブロックでないとき
                  under[j] = 0;
                } else {
                    // 下がブロックでブロックのとき
                    if (move[i][j] == 1) {
                        resetMove();
                    }
                    under[j] = 1;
                }
            }
        }
    }
}

function resetMove() {
    moveFlag = 0;
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            move[i][j] = 0;
        }
    }
}

function checkDelete() {
    for (var i = 19; i >= 0; i--) {
        if (!array[i].includes(0)) {
            for (var j = 0; j < 10; j++) {
                array[i][j] = 0;
            }
        }
    }
}





draw(); // 読込が完了したらまず表示
var game_timer = setInterval(function() {
    checkDelete();
    fall();
    draw();
}, TYRANO.kag.stat.f.frame);





function genBlock(blockNum) {
    if (moveFlag == 0) {
        switch (blockNum) {
            case 1:  // long
                var rand = Math.floor(Math.random()*(9-0)+0);
                array[0][rand] = blockNum;
                array[1][rand] = blockNum;
                array[2][rand] = blockNum;
                array[3][rand] = blockNum;
                move[0][rand] = 1;
                move[1][rand] = 1;
                move[2][rand] = 1;
                move[3][rand] = 1;
                break;
        }
        moveFlag = 1;
    }
}

$(window).on("keydown",function(e){
  switch (e.keyCode) {
    case 32:  // space
      genBlock(1);
      break;
    case 39:  // arrow right
      moveBlockRight();
      break;
    case 37:  // arrow left
      moveBlockLeft();
      break;
    case 38:  // arrow up
      // ここに回転の処理
      break;
    case 40:  // arrow down
      // ここに下に落とす処理
      break;
  }
  draw();
});





var move = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];





function moveBlockRight() {
    for (var i = 19; i >= 0; i--) {
        var newMove = move[i].concat();
        for (var j = 8; j >= 0; j--) {
            if (move[i][j] == 1) {
                array[i][j + 1] = array[i][j];
                array[i][j] = 0;
                newMove[j + 1] = 1;
                newMove[j] = 0;
            }
        }
        move[i] = newMove;
    }
}

function moveBlockLeft() {
    for (var i = 19; i >= 0; i--) {
        var newMove = move[i].concat();
        for (var j = 1; j < 10; j++) {
            if (move[i][j] == 1) {
                array[i][j - 1] = array[i][j];
                array[i][j] = 0;
                newMove[j - 1] = 1;
                newMove[j] = 0;
            }
        }
        move[i] = newMove;
    }
}
