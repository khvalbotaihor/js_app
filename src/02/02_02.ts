type StreetType = {
    title: string
}

type AddressType = {
    number?:number
    street: StreetType
}

type HousesType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}

type GovermentBuildingType = {
    type: "HOSPITAL" | "FIRE_STATION"
    budget: number
    staffCount: number
    address:AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    govermentBuildings: Array<GovermentBuildingType>
    citizenNumber: number
}