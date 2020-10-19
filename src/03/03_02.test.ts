import {CityType} from "../02/02_02";
import {addMoneyToBudget, demolishHousesOnStreet, greetingMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
import {log} from "util";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    street: {
                        title: "White street"
                    },
                    number: 100
                }
            }, {
                buildedAt: 2008,
                repaired: false,
                address: {
                    street: {
                        title: "Happy street"
                    },
                    number: 100
                }
            }, {
                buildedAt: 2020,
                repaired: false,
                address: {
                    street: {
                        title: "Happy street"
                    },
                    number: 101
                }
            }
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }

            }, {
                type: "FIRE_STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }

            }
        ],
        citizenNumber: 1000000
    }


})


test("Budget should be chnaged fro HOSPITAL", () => {
    addMoneyToBudget(city.govermentBuildings[0], 100000)

    expect(city.govermentBuildings[0].budget).toBe(300000)
    expect(city.govermentBuildings[1].budget).toBe(500000)

})

test("Budget should be chnaged fro FIRE-STATION", () => {
    addMoneyToBudget(city.govermentBuildings[1], -100000)

    expect(city.govermentBuildings[0].budget).toBe(200000)
    expect(city.govermentBuildings[1].budget).toBe(400000)

})


test("Houses should be destroyed", () => {
    demolishHousesOnStreet(city.houses, "White street");


})

test("House should be repaired", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})


test("Increase stuff number", () => {

    toFireStaff(city.govermentBuildings[0], 20);

    expect(city.govermentBuildings[0].staffCount).toBe(180)

})
test("Increase stuff number", () => {

    toHireStaff(city.govermentBuildings[0], 20);
    toHireStaff(city.govermentBuildings[1], 100);

    expect(city.govermentBuildings[0].staffCount).toBe(220)
    expect(city.govermentBuildings[1].staffCount).toBe(1100)

})

test("Greeting", () => {

    expect(greetingMessage(city)).toBe("Hello New York. All 1000000 citizens")


})





