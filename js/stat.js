'use strict';

  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT =270;
  var SHADOW = 10;

  var TEXT_X = 120;
  var TEXT_Y = 40;
  var BOT = 20;
  var TEXT_HEIGHT = 60;

  var BAR_X = 140;
  var BAR_Y = 90;
  var BAR_MARGIN = 30;
  var BAR_TEXT = 20;

  var BAR_NAME_X = 140;
  var BAR_NAME_Y = 265;

  var barHeight = CLOUD_HEIGHT - TEXT_HEIGHT - BAR_TEXT - BAR_MARGIN;
  var BAR_WIDTH = 40;
  var MARGIN = 75;

  var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

  var getRandomBlue = function () {
    return 'rgba(0, 0, 255, ' + (Math.ceil(Math.random() * 9)) / 10 + ')';
};

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}
// var renderColumn = function(){

// };

var getMaxElement = function(array) {
  var maxElem = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElem) {
      maxElem = array[i];
    }
  }
  return maxElem;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - SHADOW, CLOUD_Y - SHADOW, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', TEXT_X , TEXT_Y);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', TEXT_X , TEXT_Y + BOT);

  var maxTime = getMaxElement(times);
  var proportion = barHeight * times[i] / maxTime;

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = PLAYER_COLOR;
    } else {
      ctx.fillStyle = getRandomBlue();
    }
    ctx.fillText(names[i], BAR_NAME_X + MARGIN * i, BAR_NAME_Y, BAR_WIDTH, barHeight);
    ctx.fillRect(BAR_X + MARGIN * i, BAR_Y, BAR_WIDTH, (barHeight * times[i]) / maxTime);

  }
}


