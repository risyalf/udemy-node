import http from "http"
import {TodolistService} from "./todolist-service.mjs"

const service = new TodolistService()
const server = http.createServer((request, response) => {
    if (request.method === "GET") {
        service.getTodoList(request, response)
    }
})

server.listen(3000)