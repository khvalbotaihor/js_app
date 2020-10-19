import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Dimich",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surgunova 2",
            city: {
                title: "Minsk",
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


})

test("new tech skill should be added to student", () => {

    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined()

})

test("student should be active", () => {

    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);


})

test("Does student lives in city", () => {


    const res1 = doesStudentLiveInCity(student, "Moskov");
    const res2 = doesStudentLiveInCity(student, "Minsk");

    expect(res1).toBe(false);
    expect(res2).toBe(true);


})