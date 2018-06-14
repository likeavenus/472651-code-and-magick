  var renderCloud = function(ctx, x, y, color) {
    ctx.fillRect(ctx, x, y, color);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
  }

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 122, 40);
  ctx.fillText('Список результатов:', 122, 60);

  ctx.fillText('Вы', 150, 270);
  ctx.fillText('1700', 150, 90);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(150, 100, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', 250, 270);
  ctx.fillText('1520', 250, 110);
  ctx.fillStyle = 'blue';
  ctx.fillRect(250, 120, 40, 130);

  ctx.fillStyle = '#000';
  ctx.fillText('Смузи', 350, 270);
  ctx.fillText('1100', 350, 120);
  ctx.fillStyle = '#DFDFDF';
  ctx.fillRect(350, 130, 40, 120);

  ctx.fillStyle = '#000';
  ctx.fillText('Мару', 450, 270);
  ctx.fillText('950', 450, 150);
  ctx.fillStyle = 'black';
  ctx.fillRect(450, 160, 40, 90);
}
