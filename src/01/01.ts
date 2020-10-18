const sentence = "Hello my friends!";

export function sum(a:number, b:number) {
    return a+b
}
export function mulyiply(a:number, b:number) {
    return a*b
}

export function splitIntoWords(sentence: string) {

    const sent = sentence.toLowerCase().split(" ");

    return sent
        .filter(w => w!=="" && w!=="-")

        .map(w => w
            .replace("!",""))






}







