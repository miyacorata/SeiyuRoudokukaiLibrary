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

function getParameter(){
    const search = window.location.search.substring(1);
    const split = search.split('&');
    var params = {};
    split.forEach((param)=>{
        let kv = param.split('=');
        params[kv[0]] = kv[1];
    });
    return params;
}

document.addEventListener('DOMContentLoaded',()=>{
    const params = getParameter();
    document.getElementById('main').innerHTML = '';
    console.log('Type : '+params.type);
    var viewType = '登録された順';
    switch(params.type){
        case 'reverse':
            books = books.reverse();
            viewType = '新しい順';
            break;
        case 'shuffle':
            for(let i = books.length - 1; i > 0; i--){
                let r = Math.floor(Math.random() * (i + 1));
                let tmp = books[i];
                books[i] = books[r];
                books[r] = tmp;
            }
            viewType = 'ランダム';
            break;
        default:
            console.log('default!');
            viewType = '登録された順';
            break;
    }
    books.forEach(book => {
        addBookElement('main',book);
    });
    var booksLU = new Date(booksLastUpdate);
    document.getElementById('lastUpdate').innerText = '最終更新 : ' + booksLU.toString();
    var booksCount = books.length;
    document.getElementById('booksCount').innerText = '登録数：' + booksCount;
    document.getElementById('viewType').innerText = '表示順：' + viewType.toString();
});