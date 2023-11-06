const express = require('express');
const Books = require('../models/Books')

const router = express.Router();

// Add Book
router.post('/addBook', async(req, resp)=>  { 
  const { title, author, description } = req.body

  if(!title || !author || !description){ 
    return resp.status(400).json({ message: 'Please provide Complete Book information'})
  }

  const book = new Books({ 
    title, author, description
  })

  await book.save()

  return resp.status(200).json({message: 'book added'})
})


// get all Books
router.get('/getbooks', async (req, resp) => {
  try {
    const books = await Books.find();

    if (!books || books.length === 0) {
      return resp.status(400).json({ message: 'No books available' });
    }

    return resp.status(200).json({ message: books });
  } catch (error) {
    return resp.status(500).json({ message: 'Oops, something went wrong' });
  }
});



// get Book by id
router.get('/getbookbyid/:id', async(req, resp)=> { 
  try {

    const book = await Books.findById(req.params.id);

    if(book){ 

      return resp.status(200).json({ message : book})
    }
    else{ 
      return resp.status(400).json({ message : 'Book not Found.'})
    }

  } catch (error) {
    return resp.status(500).json({ message: 'Oops, something went wrong' });
  }
})


// Update Book by id
router.put('/updatebook/:id', async (req, res) => {
  const { title, author, description } = req.body;
  const updates = {};

  if (title) {
    updates.title = title;
  }

  if (author) {
    updates.author = author;
  }

  if (description) {
    updates.description = description;
  }

  try {
    const updatedBook = await Books.findByIdAndUpdate(req.params.id, updates, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    return res.status(500).json({ message: 'Oops, something went wrong' });
  }
});


//  Delete Book By id
router.delete('/deletebook/:id', async(req, resp)=> { 
  try{ 
    const book = await Books.findByIdAndDelete(req.params.id)

    if(book){ 

      return resp.status(200).json({ message : 'Book deleted successfully'})
    }
    else{ 
      return resp.status(400).json({ message : 'Book not Found.'})
    }

  }catch(error){ 
    return resp.status(500).json({ message : 'OOps some error occourred'})
  }
})


module.exports = router;