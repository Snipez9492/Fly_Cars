
class Cars {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    get latitude() {
        return this.lat;
    }

    get longtitude() {
        return this.long;
    }
}

const car1 = new Cars(42.806911, -71.290611);
const car2 = new Cars(42.742, -71.3161);

const violation = (car1, car2) => {
    let max = 500;
    let altitude = 10;

    if (car1 instanceof Cars && car2 instanceof Cars && altitude >= 10) {
        let lat2 = car2.latitude;
        let lon2 = car2.longtitude;
        let lat1 = car1.latitude;
        let lon1 = car1.longtitude;
        let r = 6371;
        let x1 = lat2 - lat1;
        let dlat = x1 * (Math.PI / 180);
        let x2 = lon2 - lon1;
        let dlon = x2 * (Math.PI / 180);
        let a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180))
            * Math.sin(dlon / 2) *
            Math.sin(dlon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = r * c;

        let distance = (Math.floor(d * 0.621371));

        if (distance > 10) {
            return 'This is a violation';
        } else {
            return 'You are good.';
        }
    }
}

console.log(violation(car1, car2));

//console.log(setInterval(violation, 1000, car1, car2));

