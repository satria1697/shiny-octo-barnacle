import {mine} from "./protos/hehe.js"
import {asd} from "./protos/test.js"

let test1 = asd.create({
    testString: "ini test string",
    testInt: 0,
    testBool: false
});

let minez = mine.create({
    detail: "ini detail",
    details: {
        oneofKind: "asd",
        asd: test1
    }
})

const mes = mine.toJson(minez)
console.log(mes)