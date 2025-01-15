$(document).ready(function (e) {
    $(".btn1").click(function (e) {
        let imageUrl = phones.id[1].rasmi[1];
        $(".img1").attr("src", imageUrl);
    });
    $(".btn2").click(function (e) {
        let imageUrl = phones.id[1].rasmi[2];
        $(".img2").attr("src", imageUrl);
    });
    
});
