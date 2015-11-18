window.onload = function () {
  /**
   * draw Round
   * @param  {Object} ctx    canvas content
   * @param  {Object} params
   * {
   *   rx, -- center of the circle in x
   *   ry, -- center of the circle in y
   *   r   -- radius
   * }
   * @return
   */
  var drawRound = function (ctx, params) {
    ctx.beginPath();
    ctx.arc(params.rx, params.ry, params.r, 0, 2*Math.PI, false);
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.stroke();
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fill();
  }
  /**
   * draw central
   * @param {Object} diceface diceRect
   * @return {null}
   */
  var drawCentral = function (ctx, diceface) {
    drawRound(ctx, {rx: diceface.LTx+diceface.w*0.5, ry: diceface.LTy+diceface.h*0.5, r: diceface.w*0.4/3});
  }

  /**
   * draw left top
   * @param {Object} diceface diceRect
   * @return {null}
   */
  var drawLeftTop = function (ctx, diceface) {
    drawRound(ctx, {rx: diceface.LTx+diceface.w/6, ry: diceface.LTy+diceface.h/6, r: diceface.w*0.4/3});
  }

  /**
   * draw left mid
   * @param {Object} diceface diceRect
   * @return {null}
   */
  var drawLeftMid = function (ctx, diceface) {
    drawRound(ctx, {rx: diceface.LTx+diceface.w/6, ry: diceface.LTy+diceface.h*0.5, r: diceface.w*0.4/3});
  }

  /**
   * draw left bottom
   * @param {Object} diceface diceRect
   * @return {null}
   */
  var drawLeftBottom = function (ctx, diceface) {
    drawRound(ctx, {rx: diceface.LTx+diceface.w/6, ry: diceface.LTy+diceface.h*5/6, r: diceface.w*0.4/3});
  }

  /**
   * draw right top
   * @param {Object} diceface diceRect
   * @return {null}
   */
  var drawRightTop = function (ctx, diceface) {
    drawRound(ctx, {rx: diceface.LTx+diceface.w*5/6, ry: diceface.LTy+diceface.h/6, r: diceface.w*0.4/3});
  }

  /**
   * draw right mid
   * @param {Object} diceface diceRect
   * @return {null}
   */
  var drawRightMid = function (ctx, diceface) {
    drawRound(ctx, {rx: diceface.LTx+diceface.w*5/6, ry: diceface.LTy+diceface.h*0.5, r: diceface.w*0.4/3});
  }

  /**
   * draw right bottom
   * @param {Object} diceface diceRect
   * @return {null}
   */
  var drawRightBottom = function (ctx, diceface) {
    drawRound(ctx, {rx: diceface.LTx+diceface.w*5/6, ry: diceface.LTy+diceface.h*5/6, r: diceface.w*0.4/3});
  }

  var drawOne = function (ctx, diceface) {
    drawCentral(ctx, diceface);
  }

  var drawTwo = function (ctx, diceface) {
    drawLeftTop(ctx, diceface);
    drawRightBottom(ctx, diceface);
  }

  var drawThree = function (ctx, diceface) {
    drawTwo(ctx, diceface);
    drawOne(ctx, diceface);
  }

  var drawFour = function (ctx, diceface) {
    drawRightTop(ctx, diceface);
    drawLeftBottom(ctx, diceface);
    drawTwo(ctx, diceface);
  }

  var drawFive = function (ctx, diceface) {
    drawFour(ctx, diceface);
    drawOne(ctx, diceface);
  }

  var drawSix = function (ctx, diceface) {
    drawLeftMid(ctx, diceface);
    drawRightMid(ctx, diceface);
    drawFour(ctx, diceface);
  }

  /**
   * draw point according number
   * @param  {Object} diceface diceRect
   * @param  {Number} n dice number
   * @return {Boolean} ret_val Is Correctly painted
   */
  var drawPoint = function (ctx, diceface, n) {
    ctx.clearRect(diceface.LTx,diceface.LTy,diceface.w,diceface.h);
    var ret_val = true;
    switch (n) {
      case 1:
        drawOne(ctx, diceface);
        break;
      case 2:
        drawTwo(ctx, diceface);
        break;
      case 3:
        drawThree(ctx, diceface);
        break;
      case 4:
        drawFour(ctx, diceface);
        break;
      case 5:
        drawFive(ctx, diceface);
        break;
      case 6:
        drawSix(ctx, diceface);
        break;
      default:
        ret_val = false;
        break;
    }
    return ret_val;
  }

  /**
   * show result by alert or something
   * @param  {Number} res result
   * 0 - lose
   * 1 - win
   * 2 - continue
   * @return
   */
  var showResult = function (res) {
    switch (res) {
      case 0:
        alert('You lose ^_^');
        break;
      case 1:
        alert('You won!');
        break;
      case 2:
        alert('Please continue.');
        break;
      default:
        break;
    }
  }

  /**
   * calculate result with two value
   * @param  {Number} x dice A
   * @param  {Number} y dice B
   * @return {Number}
   * -1 - wrong
   * 0 - lose
   * 1 - win
   * 2 - continue
   */
  var calResultFirst = function (x1, x2) {
    var ret_val = 2;
    switch (x1+x2) {
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
        break;
      case 2:
      case 3:
      case 12:
        ret_val = 0;
        break;
      case 7:
      case 11:
        ret_val = 1;
        break;
      default:
        ret_val = -1;
        break;
    }
    return ret_val;
  }

  /**
   * calculate result with two value
   * @param  {Number} x dice A
   * @param  {Number} y dice B
   * @return {Number}
   * 0 - lose
   * 1 - win
   * 2 - continue
   */
  var calResultSecond = function (x1, x2) {
    var ret_val = 1;
    switch (x1+x2) {
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
        break;
      case 2:
      case 3:
      case 11:
      case 12:
        ret_val = 2;
        break;
      case 7:
        ret_val = 0;
        break;
      default:
        ret_val = -1;
        break;
    }
    return ret_val;
  }

  /**
   * generate a random number within [first, end]
   * @param  {Number} first
   * @param  {Number} end
   * @return {Number}
   */
  var generateNumber = function (first, end) {
    return first+Math.floor(Math.random()*(end-first+1));
  }

  var changeBtnText = function (btn, text) {
    btn.innerHTML = text;
  }

  /**
   * draw diceface
   * @return
   */
  var drawDice = function (ctx, diceface) {
    ctx.strokeRect(diceface.LTx, diceface.LTy, diceface.w, diceface.h);
  }

  var ctx = document.getElementById('desk').getContext('2d');
  var isFirst = true;
  var diceAnumber, diceBnumber;
  var cal_res;
  var diceA = {LTx: 50, LTy: 50, w: 100, h: 100};
  var diceB = {LTx: 200, LTy: 50, w: 100, h: 100};
  var btn = document.getElementById('throwBtn');

  var init = function () {
    var ctx = document.getElementById('desk').getContext('2d');
    ctx.beginPath();
    drawDice(ctx, diceA);
    drawDice(ctx, diceB);
    drawPoint(ctx, diceA, diceAnumber = generateNumber(1, 6));
    drawPoint(ctx, diceB, diceBnumber = generateNumber(1, 6));
    btn.addEventListener('click', function (e) {
      drawPoint(ctx, diceA, diceAnumber = generateNumber(1, 6));
      drawPoint(ctx, diceB, diceBnumber = generateNumber(1, 6));
      if (isFirst) {
        if ((cal_res = calResultFirst(diceAnumber, diceBnumber)) === 2) {
          isFirst = false;
          changeBtnText(btn, '再掷一次');
        }
      } else if ((cal_res = calResultSecond(diceAnumber, diceBnumber)) !== 2) {
          isFirst = true;
          changeBtnText(btn, '请投掷');
      }
      setTimeout(function () { showResult(cal_res) }, 200);
    }, true);
  }
  init();
}