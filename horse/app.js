function Horse(name = 'Anonim') { // Horse.totalDistance
    let distance = 0;
    this.name = name;
    this.tired = 0;

    // this.run = function(dist) {
    //
    //     this.__proto__.totalDistance = this.__proto__.totalDistance || 0;
    //
    //     for (let i = 1; i <= dist; i++) {
    //         this.tired++;
    //         distance++;
    //         this.__proto__.totalDistance++;
    //
    //         if (this.tired !== 10) {
    //             continue;
    //         }
    //
    //         const currentTime = new Date().getTime();
    //         while (currentTime + 1000 >= new Date().getTime()) {}
    //
    //         console.log('Наша лошадь отдыхает!');
    //         this.tired = 0;
    //     }
    // }


    this.run = function(dist) {

        const self = this;

        for (let i = 1; i <= dist; i++) {
            distance++;
            self.tired++;
            self.__proto__.totalDistance++;

            if (self.tired < 10) {
                console.log(`Лошадь ${self.name} бежит ${i}км`);
                console.log(`Лошадь ${self.name} пробежала ${distance}км`);
                continue;
            }

            let rest = dist - i;
            console.warn(`Лошадь ${self.name} отдыхает 1 секунду`);

            setTimeout(function() {
                self.tired = 0;
                self.run.call(self, rest);
            }, 1000);

            break;
        }
    };

    this.getDistance = function() {
        return distance;
    };

    this.getTotalDistance = function() {
        return this.__proto__.totalDistance;
    };
}

const horse = new Horse();
// const horse1 = new Horse();
horse.run(30);
// horse1.run(20);

