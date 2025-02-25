import timers from "timers/promises"

// console.info(new Date())

// const name = await timers.setTimeout(5000, "Eko");

// console.info(new Date())
// console.info(name)

const date = new Date()
for await (const startTime of timers.setInterval(1000, null)) {
   console.info(`Start Timer at ${new Date}`)
}