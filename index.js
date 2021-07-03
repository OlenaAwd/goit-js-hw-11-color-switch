// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector("body"),
  };
  
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const timer = {
    isActive: false,
    start() {
      if(this.isActive){
        return;
      };

      this.isActive = true;
      this.switchColors = setInterval(() =>{
        const min = 0;
        const max = colors.length - 1;
        let i = randomIntegerFromInterval(min, max);
        refs.body.style.backgroundColor = colors[i];
      }, 1000);
    },
    stop() {
      clearInterval(this.switchColors);
      this.isActive = false;
    },
  };


  
  refs.startBtn.addEventListener("click", timer.start.bind(timer));
  refs.stopBtn.addEventListener("click", timer.stop.bind(timer));