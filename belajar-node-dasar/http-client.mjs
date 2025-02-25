import https from "https"

const url = "https://eol5jn0ic7h6mru.m.pipedream.net"

const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    firstName: "Eko",
    lastName: "Khannedy"
})

request.write(body)
request.end()