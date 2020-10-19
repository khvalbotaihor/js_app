export type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number,
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean,
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: "Dimich",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surgunova 2",
        city: {
            title: "minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        }, {
            id: 2,
            title: "CSS"
        }, {
            id: 3,
            title: "React"
        }
    ]


}


console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
student.technologies[2].title


const school = {
    name: "IT-INCUBATOR.BY",
    isOpen: true,
    mentors: [
        {
            name: "Valera",
            age: 33,
            position: {
                name: "Support developer",
                technologies: [
                    {name: "HTML", stack: "CSS"},
                    {name: "React", stack: "Pess"},
                    {name: "Deno", stack: "Sooft"},
                ]

            }
        }, {
            name: "Dima",
            age: 42,
            position: {
                name: "FrontEnd developer",
                technologies: [
                    {name: "HTML", stack: "CSS"},
                    {name: "React", stack: "Pess"},
                    {name: "Deno", stack: "Sooft"},
                ]

            }
        }
    ]
}