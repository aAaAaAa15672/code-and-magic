const BAR_HEIGHT = 150;
const BAR_GAP = 50;
const BAR_WIDTH = 40;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_HEIGHT = 270;

const fillCloud = function (ctx) { //отрисовка облака
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
}
const getMaxNumber = function (times){ //получение максимального числа
  let max = times[0];
  for (let a = 0; a < times.length; a++) {
    if (times[a] > max ) {
      console.log (times[a] + ' - число ');
      max = times[a];
    }
    console.log(max + ' - округленное число');
  }
  //создается переменная max, равная times[0]. max сравнивается со всеми числами массива. Если какое-либо число больше max, то оно записывается в max.
  return max = Math.round;
}
const getRandomNumber = function (max){ //получение рандомного числа от 0 до max
    return Math.floor(Math.random() * Math.floor(max));
}
const getRoundedNumber = function (times){ //получение округленного числа
  for (let a = 0; a < times.length; a++){
    times[a] = Math.floor(times[a]);
  }
}
const getHeightOfColumns = function (times){
  /*getMaxNumber(max); */


  for (a = 0; a<4; a++){
    let HeightOfColumn = times[a] / getMaxNumber(max);
  }
  return HeightOfColumn;
  /*
  1. получим максимальную высоту
  2. нужную высоту делим на макс высоту
  3. получаем число 0 < i < 1, которое нужно умножить на начальную высоту колонки
  */
}
const fillColumns = function (ctx,times, names){ //отрисовка колонок
  let column_x = 140;
  //column_x - начальная координата по горизонтали
  const startX = CLOUD_X;
  const startY = CLOUD_Y + CLOUD_HEIGHT - 30;
  for (a = 0; a<4; a++) {
    const nameX = startX + BAR_GAP * (a + 1) + BAR_WIDTH * a;
    const nameY = startY;
    ctx.fillText(names[a], nameX, nameY)
    if (names[a] == "Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      //первая колонка окрашивается в красный
    } else {
      let random = String(getRandomNumber(100));
      ctx.fillStyle = 'hsl(240, 180%, ' + random + '%)';
      //все остальные колонки окрашиваются в синий рандомной градации
    }
    ctx.fillRect(column_x, 240, 40, -50);
    ctx.fillStyle = 'black';
    /*asdf = getRoundedNumber(times);*/

    // ctx.fillText(Math.floor(times[a]) ,column_x, 260);
    column_x = column_x + 90;
  }
}
window.renderStatistics = function(ctx, names, times) {
  fillCloud(ctx);
  fillColumns(ctx, times, names);
};
