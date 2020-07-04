var posts =[
    {
        id:1,
        name: "Linkedin",
        profile_image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png",
        followers : "12907982",
        date: NaN,
        Promoted: true,
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed vehicula nisl, ut viverra purus. Phasellus pretium ex a nibh faucibus, sed posuere augue condimentum. Nulla eleifend consequat augue. Nam ...see more",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXRO42mDBdVznDvvuOVqzEq36-ONi8cUcliA&usqp=CAU",
        likes: "800",
        comments:["","","","","","","","","","","","","","",""]
    }
];
for(var i=0;i<posts.length;i++){
    document.getElementById("post_profile_image").src=posts[i].profile_image;
    document.getElementById("name").textContent=posts[i].name;
    document.getElementById("followers").textContent=posts[i].followers+" followers";
    document.getElementById("profile_details").style.display="block";
    if(isNaN(posts[i].date) && posts[i].Promoted){
        document.getElementById("time").textContent="Promoted";
        document.getElementById("about").style.display="none";
        document.getElementById("follow_promo").style.verticalAlign="top";
        document.getElementById("follow_promo").style.float="right";
        document.getElementById("follow_promo").style.color="blue";
    }
    else {
        document.getElementById("time").textContent=posts[i].date+"days ago";
        // document.getElementById("about").style.display="inline-block";
        document.getElementById("about").style.float="right";
        document.getElementById("about").style.color="blue";
        document.getElementById("follow_promo").style.display="none";
    }
    document.getElementById("profile_content").textContent=posts[i].text;
    document.getElementById("profile_img").src=posts[i].image;
    document.getElementById("profile_img").style.width="100%";
}