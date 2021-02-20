window.renderStatistics = function(ctx, names, times) {
//   const canvasElement = document.getElementById ('canvas');
//   const ctx = canvasElement.getContext('2d');

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect (110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect (100, 10, 420, 270);

  ctx.font="16px PT Mono";
  ctx.fillStyle = 'black';
  ctx.fillText("Ура вы победили!",120,41);
  ctx.fillText("Список результатов:", 120, 60);

  var column_x = 140;
  for (a = 0; a<4; a++){
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(column_x, 90, 40, 150);
    ctx.fillText(times,140,260);
    column_x = column_x + 90;
  }
};
