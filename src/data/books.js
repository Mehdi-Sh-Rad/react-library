const Books = [
    {
        "name": "Dont Blame",
        "Write": "Cont Mont Christo",
        "Price": 2000,
        "number": 1
    },
    {
        "name": "Faithfullness",
        "Write": "Roger Rodriges",
        "Price": 6000,
        "number": 2
    },
    {
        "name": "Sole Love",
        "Write": "Emily Dickenson",
        "Price": 9000,
        "number": 3
    }
]

export function getBook(){
    return Books
};

export function showBook(number){
    return Books.find((book)=>book.number === number)
}
