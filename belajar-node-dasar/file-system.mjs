import fs from "fs/promises"

// const buffer = fs.readFileSync("file-system.mjs")
const buffer = await fs.readFile("belajar-node-dasar/file-system.mjs")

console.info(buffer.toString())

// fs.writeFileSync("temp.txt", "Hello World")

fs.writeFile("temp.txt", "Hello World")