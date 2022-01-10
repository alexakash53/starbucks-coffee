function handleImage(image, bg) {
    let change = document.getElementById('change')
    change.setAttribute("src", image);
    const circle = document.querySelector('.circle')
    circle.setAttribute('style', bg)
}