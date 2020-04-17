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
    // Order
    const params = getParameter();
    document.getElementById('main').innerHTML = '';
    console.log('Type : '+params.type);
    var viewType = '登録された順';
    switch(params.type){
        case 'reverse':
            books = books.reverse();
            viewType = '新しい順';
            break;
        /*case 'shuffle':
            for(let i = books.length - 1; i > 0; i--){
                let r = Math.floor(Math.random() * (i + 1));
                let tmp = books[i];
                books[i] = books[r];
                books[r] = tmp;
            }
            viewType = 'ランダム';
            break;*/
        default:
            console.log('default!');
            viewType = '登録された順';
            break;
    }
    // pagenation
    const perPage = 100;
    var currentPage = (typeof params.page === 'undefined') ? 1 : params.page;
    var pagenation = document.getElementById('pagenation');
    var pageCount = Math.ceil(books.length / perPage);
    for(var i = 1; i <= pageCount; i++){
        var pageButton = document.createElement('a');
        pageButton.setAttribute('href','?page='+i);
        pageButton.innerText = i+'ページ';
        pagenation.appendChild(pageButton);
    }
    // rendering
    for(var i = (currentPage - 1) * perPage ; i < ((currentPage - 1) * perPage) + perPage ; i++){
        addBookElement('main',books[i]);
        console.log('add : '+i);
    }
    var booksLU = new Date(booksLastUpdate);
    document.getElementById('lastUpdate').innerText = '最終更新 : ' + booksLU.toString();
    var booksCount = books.length;
    document.getElementById('booksCount').innerText = '登録数：' + booksCount;
    document.getElementById('viewType').innerText = '表示順：' + viewType.toString();
    document.getElementById('allPage').innerText = pageCount;
    document.getElementById('currentPage').innerText = currentPage;
});