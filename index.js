// var Icon = document.getElementById("icon");
// var Sidebar = document.getElementById("sidebar");
// var Text1 = document.getElementById("text1");
// var Text2 = document.getElementById("text2");
// var Text3 = document.getElementById("text3");
// var Text4 = document.getElementById("text4");
// var Text5 = document.getElementById("text5");

// Icon.addEventListener("click", function(){
//     Sidebar.classList.toggle("sidebarOpen")
//     Text1.classList.toggle("open");
//     Text2.classList.toggle("open");
//     Text3.classList.toggle("open");
//     Text4.classList.toggle("open");
//     Text5.classList.toggle("open");
// })

// var Icon = document.getElementById("icon");
// var Sidebar = document.getElementById("sidebar");
// var text1 = document.getElementById("text1");
// var text2 = document.getElementById("text2");
// var text3 = document.getElementById("text3");
// var text4 = document.getElementById("text4");
// var text5 = document.getElementById("text5");

// Icon.addEventListener("click", function(){
//     Sidebar.classList.toggle("sidebarOpen");
//     text1.classList.toggle("open");
//     text2.classList.toggle("open");
//     text3.classList.toggle("open");
//     text4.classList.toggle("open");
//     text5.classList.toggle("open");
// })

// var Main_image = document.getElementById("main_image");

// function MyImage(src){
//     Main_image.src = src;
// }

// // function changeImage3(){
// //     Main_image.src ="image3.jpg";
// // }

// // function changeImage4(){
// //     Main_image.src ="image4.jpg";
// // }


// // function changeImage5(){
// //     Main_image.src ="image5.jpg";
// // }

// var mainImage = document.getElementById("main_image");

// function ChangeImage(src){
//     mainImage.src = src;
// }

// function lightFun(match){
//     var pic;
//     for( var i=1; i<=5; i++){
//         if(match==0){
//             pic ="offbuble.jpg";
//         }
//         else{
//             pic ="onbulbe.jpg";
//         }
//         var Catagory = document.getElementById('light'+(i));
//         Catagory.src = pic;
//     }
// }

// var Image = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
// var My_Image = document.getElementById("myImage");
// var count_index = -1;
// function imageShow(){
//     count_index++;
//     if(count_index >= Image.length){
//         count_index = 0;
//         My_Image.src=Image[count_index];
//     }
//     else{
//         My_Image.src=Image[count_index];
//     }
//     setTimeout("imageShow()",2000);
// }
// window.onload = imageShow();

var Image = ['image1.jpg','image3.jpg', 'image4.jpg'];
var MainImage = document.getElementById("mainImage");
var Count_Index = -1;
function photoShow(){
    Count_Index++;
    if(Count_Index >= Image.length){
        Count_Index = 0;
        MainImage.src =Image[Count_Index];
    }
    else{
        MainImage.src =Image[Count_Index];
    }
    setTimeout("photoShow()", 3000);
}
window.onload = photoShow();