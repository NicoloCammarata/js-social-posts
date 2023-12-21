

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": '<img  src="https://unsplash.it/600/300?image=171">',
        "author": {
            "name": "Phil Mangione",
            "image": '<img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione ">',
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": '<img src="https://unsplash.it/600/400?image=112">',
        "author": {
            "name": "Sofia Perlari",
            "image": '<img class="profile-pic" src="https://unsplash.it/300/300?image=10">',
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": '<img src="https://unsplash.it/600/400?image=234">',
        "author": {
            "name": "Chiara Passaro",
            "image": '<img class="profile-pic" src="https://unsplash.it/300/300?image=20">',
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": '<img src="https://unsplash.it/600/400?image=24">',
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": '<img  src="https://unsplash.it/600/400?image=534">',
        "author": {
            "name": "Alessandro Sainato",
            "image": '<img class="profile-pic" src="https://unsplash.it/300/300?image=29">',
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const reel = document.getElementById('container')

console.log(reel)

for(let i = 0; i < posts.length; i++){
    

    reel.innerHTML += 
        '<div class="post">'+
            '<div class="post__header">'+
                '<div class="post-meta">'+
                    '<div class="post-meta__icon">'+
                        posts[i].author.image +                    
                    '</div>' +
                    '<div class="post-meta__data">' +
                        '<div class="post-meta__author">' + posts[i].author.name + '</div>' +
                        '<div class="post-meta__time">4 mesi fa</div>' +
                    '</div> ' +                               
                '</div>' +
        
            '</div>'+
            '<div class="post__text">' + posts[i].content + '</div>'+
            '<div class="post__image">' +
                posts[i].media +
            '</div>' +
            '<div class="post__footer">'+
                '<div class="likes js-likes">'+
                    '<div class="likes__cta">'+
                        '<a class="like-button  js-like-button" href="#" data-postid="'+ posts[i].id + '">'+
                            '<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>'+
                             
                            '<span  class="like-button__label  ">Mi Piace</span>'+
                    
                        '</a>'+
                
                    '</div>'+
                    '<div class="likes__counter">'+
                        'Piace a ' + '<b id="like-counter-' + posts[i].id + '"  class="js-likes-counter ">' + posts[i].likes + '</b>'+ ' persone'+
                    '</div>'+
            
                '</div>'+
                
            '</div>' +
        '</div>';



    



}

let myButton = document.querySelectorAll('.like-button__label')



console.log('button', myButton)

console.log( 'like', posts[0].likes, typeof(posts[0].likes))


const postPiaciuti = []

console.log('post-piaciuti', postPiaciuti)


for(let c = 0; c < myButton.length; c++){
    console.log(myButton[c])

    let counter = 0;

    let nLike = document.getElementById('like-counter-' + posts[c].id)


    console.log(posts[c].likes)

    

    

    myButton[c].addEventListener('click', function(event){
        counter ++;

        

        event.preventDefault()
        console.log(counter)
        if ((counter % 2 == 0) == false) {
            myButton[c].classList.add('button-clicked')

            nLike.innerHTML = posts[c].likes + 1 ;
            
            

            postPiaciuti.push(posts[c].id)


        }
        else {
            myButton[c].classList.remove('button-clicked')

            nLike.innerHTML = posts[c].likes  ;

            
        }
    
    
    
    });



    
}












