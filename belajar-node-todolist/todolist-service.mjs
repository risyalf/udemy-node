export class TodolistService {
    todolist = ["Programmer", "Zaman", "Now"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    }

    getTodoList(request, response) {
        response.setHeader("Content-Type", "application/json")
        
        response.write(this.getJsonTodoList())
        response.end()
    }
}