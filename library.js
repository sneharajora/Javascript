// Create a book store to borrow book
function Book(title,author,isbn,availableCopies,borrowBook){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
    this.loanHistory = [];

    this.borrowBook= function(patronName){
           if(this.availableCopies>0){
               this.availableCopies--;
               const dateLoaned = new Date().toLocaleDateString();
               this.loanHistory.push({patronName});
               console.log(`${patronName} borrowed "${dateLoaned}`)
           }
           else{
            console.log(`Sorry, "${this.title}" is out of stock`);
           }
    }
};

    this.returnBook = function(patronName){
           const loanRecord = this.loanHistory.find(record => record.patronName === patronName);
           if(loanRecord){
            this.availableCopies++;
            const index  = this.loanHistory.indexof(loanRecord);
            this.loanHistory.splice(index,1);
            console.log(`${patronName} has not borrowed this book`);
           } else{
            console.log(`${patronName} has not borrowed this book.`);
           }
    };
   
   function Patron(name){
       this.name = name;
       this.borrowBookstack = [];
       this.borrowedBooks = function(book){
          if(this.borrowBookstack>=5){
             console.log(`sorry ${name} you have already exceeded the borrowed list`);
          }
          else{
              book.borrowBook(this.name);
              this.borrowBookstack.push(book);
          }
       }
        this.returnBook = function(book){
            const index = this.borrowBookstack.indexof(book);

            if(index !== -1){
                book.returnBook(this.name);
                this.borrowBookstack.splice(index,1);
            }
            else{
                console.log(`${this.name} has not borrowed "${book.title}"`);
            }
        };
   }

   // Library
    
   const book1 = new Book('Java book',"author is dead","1234",3);
   const book2 = new Book('python book',"author2 is also dead","1234",2);

    const neha = new Patron("Neha");
    const sakshi = new Patron("Sakshi");

    neha.borrowedBooks(book2);
    sakshi.borrowedBooks(book1);

   console.log(book1.availableCopies);
   console.log(book2.availableCopies);
    


