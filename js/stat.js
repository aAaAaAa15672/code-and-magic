window.renderStatistics = function(ctx, names, times) {
  // debugger;

//   const canvasElement = document.getElementById ('canvas');
//   const ctx = canvasElement.getContext('2d');

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect (110, 20, 270, 420);

  ctx.fillStyle = 'white';
  ctx.fillRect (100, 10, 270, 420);



  /*ctx.clearRect(100, 10, 270, 420);*/

  ctx.font = '16px PT Mono';
  fillStyle = 'black';
  ctx.fillText = ('Ура вы победили!', 120, 30)
  // ctx.fillText = 'Список результатов:';
};
