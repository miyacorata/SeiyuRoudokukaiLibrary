function addBookElement(targetId,data){
    /* .book */
    var book = document.createElement('div');
    book.classList.add('book');

    /* Title */
    // 作品名
    var title = document.createElement('h3');
    title.innerText = data.title;
    book.appendChild(title);

    /* meta */
    var meta = document.createElement('div');
    meta.classList.add('meta');
    // 声優さんのお名前
    var seiyu = document.createElement('span');
    seiyu.classList.add('seiyu');
    seiyu.innerText = data.seiyu;
    meta.appendChild(seiyu);
    // 作者さんのお名前
    var author = document.createElement('span');
    author.classList.add('author');
    author.innerText = data.author;
    meta.appendChild(author);
    // 親要素へappend
    book.appendChild(meta);

    /* Tweet */
    // blockquote
    var tweet = document.createElement('blockquote');
    tweet.classList.add('twitter-tweet');
    // a
    var link = document.createElement('a');
    link.setAttribute('href',data.tweet_url);
    link.innerText = data.title;
    tweet.appendChild(link);
    //親要素へappend
    book.appendChild(tweet);

    // Append
    document.getElementById(targetId).appendChild(book);
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('main').innerHTML = '';
    books.forEach(book => {
        addBookElement('main',book);
    });
});