let bookObject = {
  title: "The Robots of dawn",
  author: "Isaac Asimov",
  readingStatus: "no",
  metod: function readStatus() {
    if (this.readingStatus === "yes") {
      console.log(`Already read '${this.title}' by '${this.author}'`);
    } else console.log("You need to read this book");
  },
};
bookObject.metod();
