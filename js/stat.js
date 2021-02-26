const getMaxNumber = function (times){
  let max = times[0];
  for (let a = 0; a < times.length; a++) {
    if (times[a] > max ) {
      max = times[a];
    }
  }
  return max;
}
//const getRandomNumber (){}
window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect (110, 20, 420, 270);
  //заливка тени под облаком

  ctx.fillStyle = 'white';
  ctx.fillRect (100, 10, 420, 270);
  //само облако с результатами

  ctx.font="16px PT Mono";
  ctx.fillStyle = 'black';
  //стиль текста на облаке
  ctx.fillText("Ура вы победили!",120,41);
  ctx.fillText("Список результатов:", 120, 60);
  //текст на облаке

  let column_x = 140;
  //column_x - начальная координата по горизонтали
  for (a = 0; a<4; a++){
    if (a == 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      //первая колонка окрашивается в красный
    } else {
      ctx.fillStyle = 'hsl(240, 100%, 50%)';
      //все остальные колонки окрашиваются в синий разной градации
      //!!!!!!!!!!!!!!!!!!!сделать ctx.fillStyle = 'hsl(240, 100%, getRandomNumber)';
    }
    ctx.fillRect(column_x, 90, 40, 150);
    ctx.fillStyle = 'black';
    ctx.fillText(getMaxNumber(times),140,260);
    column_x = column_x + 90;
  }
};
