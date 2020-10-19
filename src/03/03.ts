import {StudentType} from "../02/02";
import {CityType, GovermentBuildingType, HousesType} from "../02/02_02";


export const sum1 = (a: number, b: number) => {
    return a + b

}

export function sum2(a: number, b: number) {
    return a + b

}

export const addSkill = (st: StudentType, skill: string) => {

    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export const doesStudentLiveInCity = (st: StudentType, city: string) => {
    return st.address.city.title === city

}

export const addMoneyToBudget =
    (build: GovermentBuildingType, budgetChange: number) => {
        build.budget += budgetChange;

    }

export function demolishHousesOnStreet(house: Array<HousesType>, street: string) {
    house.map(h => h.address.street.title == street
    )
}


export const repairHouse = (houses: HousesType) =>{
    houses.repaired = true
}

export function toFireStaff(buil: GovermentBuildingType, staffValue: number) {
 buil.staffCount -= staffValue
}
export function toHireStaff(buil: GovermentBuildingType, staffValue: number) {
 buil.staffCount += staffValue
}

export const greetingMessage = (props: CityType) =>{

    return `Hello ${props.title}. All ${props.citizenNumber} citizens`
}