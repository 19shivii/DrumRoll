var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","12.jpg"];    

// var i=0;
//     document.body.style.backgroundImage="url(images/" + images[i] + ")";
//     setInterval(() => {
//         i++;
//         if (i == images.length) {
//             i = 0;
//         }
//         else{
//             document.body.addEventListener("transitionend",function () {
//                 this.style.backgroundImage="url(images/" + images[i] + ")";
//             })
//          function img (){

               
//         }}
//     }, 10);\


$(function () {
    var i = 0;
    $("body").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("body").fadeIn("milliseconds", function () {
            $(this).css("background-image", "url(images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 2000);
});


