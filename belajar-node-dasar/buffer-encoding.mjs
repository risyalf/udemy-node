const buffer = Buffer.from("eko kurniawan khannedy", "utf8")

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("ZWtvIGt1cm5pYXdhbiBraGFubmVkeQ==", "base64")
console.info(bufferBase64.toString("utf8"))



