function handleClick() {

    let userInput = document.getElementById("userInput").value;


    let imgBox = document.getElementById("img-card");

    // console.log(userInput);
    // console.log(imgBox);

    let a = `https://picsum.photos/400/300?random=${userInput}`;

    imgBox.style.backgroundImage = `url("${a}")`
    let imgLink = document.getElementById("imgLink")
    imgLink.href = a;
    imgLink.innerHTML = a
}