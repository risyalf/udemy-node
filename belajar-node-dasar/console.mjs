import {Console} from "console"
import fs from "fs"

const logFile = fs.createWriteStream("application.log")

const log = new Console({
    stdout: logFile,
    stderr: logFile
})

log.info("Hello world")
log.error("error cok")  

const person = {
    firsName: "Eko",
    lastName: "Khannedy"
}

log.table(person)
