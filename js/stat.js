  var renderCloud = function(ctx, x, y, color) {
    ctx.fillRect(ctx, x, y, color);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
  }

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var BAR_X = 150;
  var BAR_Y = 100;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var STEP = 10;
  var TEXT_WIDTH = 50;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var MARGIN = 75;
  var MARGIN_FROM_TEXT = 200;
  var TEXT_HEIGHT = 20;
  var MAX_BAR = BAR_HEIGHT;

var getMaxElement = function(arr) {
  var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
     if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + STEP, CLOUD_Y + STEP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + STEP * 2, CLOUD_Y + STEP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + STEP * 2, CLOUD_Y + STEP * 5);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + TEXT_WIDTH + MARGIN * i, TEXT_HEIGHT + TEXT_WIDTH + MARGIN_FROM_TEXT);
    if (names[i] ===  'Вы') {
    //ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    var proportion = (MAX_BAR * times[i]) / maxTime;
    ctx.fillRect(BAR_X, BAR_Y + (100% - (MAX_BAR * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR * times[i]) / maxTime);
    }
    if (names[i] === 'Кекс') {
      //ctx.fillStyle = 'blue';
      ctx.fillRect(BAR_X + MARGIN, BAR_Y + (100% - (MAX_BAR * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR * times[i]) / maxTime);
    }
      if (names[i] === 'Катя') {
      //ctx.fillStyle = '#DFDFDF';
      ctx.fillRect(BAR_X + MARGIN * 2, BAR_Y + (100% - (MAX_BAR * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR * times[i]) / maxTime);
    }
      if (names[i] === 'Игорь') {
      //ctx.fillStyle = '#000';
      ctx.fillRect(BAR_X + MARGIN * 3, BAR_Y + (100% - (MAX_BAR * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR * times[i]) / maxTime);
    }
  }

}
