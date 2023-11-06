# Crud APIS with  Node Express and Mongodb 

## Add Books 
    http://localhost:4000/api/v1/addbook

    Data Format : 
        {
            "title" :"Horrid Henry",
            "author":"Francesca Simon",
            "description": "Henry, a self-centred, naughty prankster who has issues with authority…"
        }


## Get All Books 
   
   http://localhost:4000/api/v1/getbooks


## Get Books By id

    http://localhost:4000/api/v1/getbookbyid/YOUR_BOOK_ID


## Update Book

    http://localhost:4000/api/v1/updatebook/YOUR_BOOK_ID

    data Format: 
        {
            "title" :"Horrid Henry updated",
            "author":"Francesca Simon",
            "description": "Henry, a self-centred, naughty prankster who has issues with authority…"
        }


## Delete Book

    http://localhost:4000/api/v1/deletebook/YOUR_BOOK_ID


