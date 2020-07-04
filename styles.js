var posts =[
    {
        id:1,
        name: "Linkedin",
        profile_image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png",
        followers : "12907982",
        occupation: null,
        date: NaN,
        Promoted: true,
        edited: false,
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed vehicula nisl, ut viverra purus. Phasellus pretium ex a nibh faucibus, sed posuere augue condimentum. Nulla eleifend consequat augue. Nam ...see more",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXRO42mDBdVznDvvuOVqzEq36-ONi8cUcliA&usqp=CAU",
        likes: "800",
        comments:["","","","","","","","","","","","","","",""]
    },
    {
        id:2,
        name: "XYZ",
        profile_image : "https://i.pinimg.com/originals/ab/67/53/ab6753ec1cef75f1cc2052487b1f4059.jpg",
        followers : "12907982",
        date: 2,
        occupation:"Software Engineer",
        Promoted: false,
        edited: true,
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed vehicula nisl",
        image:null,
        likes: "6",
        comments:["","","",""]
    }
];
for(var i=0;i<posts.length;i++){
    document.querySelectorAll("#post_profile_image")[i].src=posts[i].profile_image;
    document.querySelectorAll("#name")[i].textContent=posts[i].name;
    document.querySelectorAll("#profile_details")[i].style.display="block";
    // console.log( document.querySelectorAll("#occupation")[i])
    if(posts[i].occupation === null) {
        document.querySelectorAll("#occupation")[i].style.display="none";
    }
    else {
        document.querySelectorAll("#occupation")[i].textContent=posts[i].occupation;
    }
    if(isNaN(posts[i].date) && posts[i].Promoted){
        document.querySelectorAll("#dot_edited")[i].style.display='none';
        document.querySelectorAll("#dot_notpromo")[i].style.display='none';
        document.querySelectorAll("#edited")[i].style.display='none';
        document.querySelectorAll("#globe")[i].style.display='none';
        document.querySelectorAll("#followers")[i].textContent=posts[i].followers+" followers";
        document.querySelectorAll("#time")[i].textContent="Promoted";
        document.querySelectorAll("#follow_promo")[i].style.verticalAlign="top";
        document.querySelectorAll("#follow_promo")[i].style.float="right";
        document.querySelectorAll("#follow_promo .fa.fa-plus")[i].style.fontSize=30+"px";
        document.querySelectorAll("#follow_promo")[i].style.color="blue";
        document.querySelectorAll("#profile_details")[i].style.borderBottom="1px solid lightgrey";
    }
    else {
        document.querySelectorAll("#time")[i].textContent=posts[i].date+"d";
        document.querySelectorAll("#follow_promo")[i].style.display="none";
        if(posts[i].edited) {
            document.querySelectorAll("#edited")[i].textContent='Edited';
        }
    }
    document.querySelectorAll("#profile_content")[i].textContent=posts[i].text;
    if(posts[i].image === null ) {
        document.querySelectorAll("#post_img")[i].parentNode.removeChild(document.querySelectorAll("#post_img")[i]);
    }
    else {
        document.querySelectorAll("#post_img")[i].src=posts[i].image;
        document.querySelectorAll("#post_img")[i].style.width="100%";
    }
    document.querySelectorAll("#likes")[i].textContent=posts[i].likes;
    document.querySelectorAll("#comments")[i].textContent=posts[i].comments.length+" comments";
}