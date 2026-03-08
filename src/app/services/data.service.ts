export class DataService {
    static getAirlines() {
        return [
            {
                id: 1,
                name: 'Air Serbia',
                priceImpact: 1.0
            },
            {
                id: 2,
                name: 'Wizz Air',
                priceImpact: 0.8
            },
            {
                id: 3,
                name: 'Fly Emirates',
                priceImpact: 1.2
            }
        ]
    }

    static getSeatingTypes() {
        return [
            {
                id: 1,
                name: 'Economy',
                price:80
            },
            {
                id: 2,
                name: 'Buisiness',
                price:130
            },
            {
                id: 3,
                name: 'First Class',
                price:190
            }
        ]
    }
}