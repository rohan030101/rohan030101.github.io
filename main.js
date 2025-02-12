const scrollLft = document.getElementById("scrollBackwards");
const scrollRght = document.getElementById("scrollForwards");

scrollLft.addEventListener('click', function () {
    document.getElementById("prjtSection").scrollLeft -= 200;
    console.log('button clicked');
})

scrollRght.addEventListener('click', function () {
    document.getElementById("prjtSection").scrollLeft += 200;
    console.log('button clicked');
}) 