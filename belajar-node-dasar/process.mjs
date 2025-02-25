import process from "process"

process.addListener("exit", (exitCode) => {
    console.info(`node js exit with code : ${exitCode}`)
})

console.info(process.version)
console.table(process.argv)
console.table(process.version)
console.table(process.version)