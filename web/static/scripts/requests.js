function request(name, animalNo, fee,company, item, dropoff){
        this.name = name;
        this.animalNo = animalNo;
        this.fee = fee;
        this.company = company;
        this.item = item;
        this.dropoff = dropoff;
}

function addToPage(r, imgArray){
    // alert("yo");
    console.log(r);
    document.getElementById("list").innerHTML += '<li class="request" onclick=requested();>'+
            '<div class="rprice">'+
            '<p align="right"><span class="bolder">Delivery Fee:</span><br><strong> '+ r.fee +'</strong></p>'+
            '</div>'+
            '<img align="left" id="animalImg" src="'+imgArray[r.animalNo - 1]+'"height=50%>'+
            '<div class="rname">'+
            '<p align="left"><span class="bolder">'+r.name+ //'</span> -'+ r.score + '</p>' +
            '</div>' +
            '<div class="rcompany">'+
            '<p align="left"><span class="bolder">Dropoff Location:</span>'+ r.dropoff +'</p>'+
            '</div>'+
            '<div class="ritem">'+
            '<p align="left"><span class="bolder">Pickup Location:</span>'+r.company+'</p>'+
            '</div>'+
            '<div class="rdropoff">'+
            '<p align="left"><span class="bolder">Comments:</span><br>'+ r.item +'</p>'+
            '</div>'+
        '</li>'

}

function requested(){
    //if we want to do something when clicking a box, it goes here.
}


var animals = [ "/images/animals/level1.png"
              , "/images/animals/level2.png"
              , "/images/animals/level3.png"
              , "/images/animals/level4.png"
              , "/images/animals/level5.png"
              , "/images/animals/level6.png"
              , "/images/animals/level7.png"
              , "/images/animals/level8.png"
              ];

var test = new request("Jack Wines", 3, 125, "Sayles-Hill, Carleton College", "Strawberry Nana Smoothie", "Myers Hall, Room 340");
var a1 = new request("John doe", 7, 6, "sayles", "chicken queso", "libe");
var a2 = new request("johnny ", 5, 2, "subway", "pickles", "cassat");
var a3 = new request("Aaaa", 1, 3, "Pizza Hut", "fat pizza", "musser");
var array = [test, a1, a2, a3];

function getPosts() {

    var query = new Parse.Query("Posts")

    return query.find({
        success: function(results) {
            console.log(results.length);
            for ( x in results ) {
                var curr = { name     : results[x].attributes.username
                           , animalNo : results[x].attributes.userNum
                           , fee      : results[x].attributes.deliveryFee
                           , company  : results[x].attributes.pickup
                           , item     : results[x].attributes.comments
                           , dropoff  : results[x].attributes.dropoff
                           }
                addToPage(curr, animals);
            }
        },
        error: function(error) {
            console.log("error retrieving");
        }
    });

    // console.log(posts[posts.length - 1].animalNo)
    // return posts
}
getPosts()
// alert(requestArray.length);
// function compare(a,b) {
//     if (a.priority < b.priority)
//         return 1;
//     if (a.priority > b.priority)
//         return -1;
//     return 0;
// }
// array.sort(compare);

