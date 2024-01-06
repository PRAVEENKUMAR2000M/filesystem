const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express()

app.use(express.json())


app.get('/', (request, response) => {
    response.status(200).json('<h1>nodejs-filesystem</h1>')
})

app.post('/api/createFiles', (request, response) => {
    const content = `\nsession: 1 ${new Date()}`
    fs.writeFileSync('./text.txt', content, { flag: 'a' })
    console.log('written successfully');
})

app.get('/api/text', (request, response) => {
    retriveFiles(request, response);
}),

app.get('*', (request, response) => {
    response.status(404).json({message:"file not found"})
})

function retriveFiles(request, response) {
    try {
        const files = fs.readdir(path.resolve("./text.txt"));
        if (files.length !== 0) {
            response.status(200).json({ all_Files: files });
        } else {
            response.status(200).json({ message: "there is no files " });
        }
    } catch (error) {
        response.status(404).json({ message: "there is no such directory" });
    }
}

PORT = 3001;
HOSTNAME = '192.168.21';
app.listen(PORT, () => {
    console.log(`server running on port ${PORT} ${HOSTNAME}`)
});