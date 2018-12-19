const getVagonQuantity = (max = 20, min = 10) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

class Train {
  constructor(sizeMax) {
		this.vagons = [],
		this.vagonCounter = 0;
    // генерим выгоны
    for (var i = 0; i < getVagonQuantity(sizeMax); i++) {
      this.vagons.push({
        lightIsOn: !!Math.round(Math.random()),
      });
    }
  }
  get forwardStep() {
    // замыкаем вагоны
    return this.vagons[++this.vagonCounter % this.vagons.length];
  }
  backwordsStep() {
    return this.vagons[--this.vagonCounter % this.vagons.length];
  }
}

function calculateLengthTrain() {
  // создаём новый поезд
  const locomotive = new Train(20);
  console.log('locomotive check', locomotive.vagons.length);
  let backword = false;
  let saveCounter = 0;
  // просыпаемся и включаем свет в первом вагоне
  const awokeLigth = locomotive.vagons[locomotive.vagonCounter];
  awokeLigth.lightIsOn = true;
  // и делаем шаг в перёд
  let forward = true;
  locomotive.forwardStep;
  // до тех пор пока свет горит в первом вогоне
  while (awokeLigth.lightIsOn) {
    // идём вперёд
    while (forward) {
      let currentStep = locomotive.forwardStep;
      // если лампочка горит
      if (currentStep.lightIsOn === true) {
        //тушим лампочку
        currentStep.lightIsOn = false;
        // уходим назад
        forward = false;
        backword = true;
        // сохраняем текущее положение
        saveCounter = locomotive.vagonCounter;
      }
    }
    // идём назад
    while (backword) {
      locomotive.backwordsStep();
      // доходим до первой лампочки и проверяем горит или нет
      if (locomotive.vagonCounter === 0) {
        backword = false;
        //если лампочка горит идём обратно
        if (locomotive.vagons[locomotive.vagonCounter].lightIsOn) {
          forward = true;
        }
      }
    }
  }

  return saveCounter;
}

console.log('locomotive length :', calculateLengthTrain());
