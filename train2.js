const getVagonQuantity = (max, min = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Train {
  constructor(sizeMax) {
    this.vagons = [];
    for (var i = 0; i < getVagonQuantity(sizeMax); i++) {
      this.vagons.push({
        lightIsOn: !!Math.round(Math.random()),
      });
    }
  }

  set lightOn(step) {
    return (this.vagons[step % this.vagons.length].lightIsOn = true);
  }
  set lightOff(step) {
    return (this.vagons[step % this.vagons.length].lightIsOn = false);
  }
  forwardStep(step) {
    return this.vagons[step % this.vagons.length];
  }
  backwordsStep(step) {
    return this.vagons[step % this.vagons.length];
  }
}

function calculateLengthTrain() {
  // создаём новый поезд
  const locomotive = new Train(30);
  console.log('locomotive check', locomotive.vagons);
  let backword = false;
  let saveCounter = 0;
  let stepCounter = 0;
  // включаем свет в первом вагоне
  locomotive.lightOn = stepCounter;
  // и сохраняем ссылку на первый вагон
  const ligthFirstVagon = locomotive.vagons[stepCounter];
  // делаем первый шаг
  locomotive.forwardStep(++stepCounter);
  let forward = true;
  // цыкл работает до тех пор пока горит лампочка в первом вагоне
  while (ligthFirstVagon.lightIsOn) {
    // если лампочка в вагоне не горит идём дальше
    while (forward) {
      // счетаем шаги и идём в перёд
      // если горит лампочка
      if (locomotive.forwardStep(++stepCounter).lightIsOn) {
        // выключаем её
        locomotive.lightOff = stepCounter;
        // разворачиваемся назад
        forward = false;
        backword = true;
        // сохраняем текущий шаг
        saveCounter = stepCounter;
      }
    }
    // идём назад
    while (backword) {
      locomotive.backwordsStep(--stepCounter);
      // доходим до первого выгона
      if (!stepCounter) {
        // останавливаемся
        backword = false;
        // проверяем горит ли первая лампочка
        if (locomotive.vagons[stepCounter].lightIsOn) {
          // идём вперёд
          forward = true;
        }
      }
    }
  }
  return saveCounter;
}

console.log('locomotive length :', calculateLengthTrain());