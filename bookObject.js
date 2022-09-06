function Book(title, author, numOfPages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.numOfPages = numOfPages),
    (this.isRead = isRead),
    (this.info = function () {
      return (
        title +
        " by " +
        author +
        ", " +
        numOfPages +
        " pages, " +
        (isRead ? "is read" : "not read yet")
      );
    });
}

const getRich = new Book("GetRichOrDieTryin", "50 Cent", 250, false);

console.log(getRich.info());
