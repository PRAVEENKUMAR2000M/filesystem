// const fs = require('fs');

// fs.readFile('./text.txt', 'utf-8',(error, data) => {
//     if (error) {
//         console.log(error)
//         return
//     }
//     console.log(data)
// })


// const fs = require('fs');

// const content = '\npraveenkumar'
// fs.writeFile('./text.txt', content, { flag: 'a' }, (error) => {
//     console.log('content writen successfully')
// })





// const fs = require('fs');
// const content = `\nsession: 1 ${new Date()}`
// fs.writeFileSync('./text.txt', content, { flag: 'a' })
// console.log('written successfully');



const express = require('express');
const app = express()
app.use(express.json())
const notes = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
]

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id == id)
    console.log(note)
    if (note) {
        return response.status(200).json(note)
    } else {
      return response.status(404).json({message: 'null'}) 
    }
})

app.post('/api/notes/', (request, response) => {
   notes.push(request.body)
    response.status(200).json({ message: "created successfully" })

})

const PORT = 5001
const HOSTNAME = '192.168.21'
app.listen(PORT, () => {
    console.log(`server running on port ${PORT} ${HOSTNAME}`)
})


