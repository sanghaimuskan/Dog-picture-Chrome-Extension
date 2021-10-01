fetch('https://dog.ceo/api/breeds/image/random')
.then(data => data.json())
.then(popupData => {
    const popupEl = popupData.message;
    const image = document.getElementById('popup');

    image.src = popupEl;
})