let button = document.querySelector('#btn').addEventListener("click", getData)
let data = localStorage.getItem('dataStorage')
getImages(JSON.parse(data))


function getData(e) {
    e.preventDefault()
    let valueInput1 = document.querySelector('.input1').value
    let valueInput2 = document.querySelector('.input2').value
    let inputPage = Number(valueInput1)
    let inputLimit = Number(valueInput2)
    if (
        (inputPage < 1 || inputPage >= 10) &&
        (inputLimit < 1 || inputLimit >= 10)
    ) {
        console.log('Номер страницы и лимит вне диапазона от 1 до 10')
    } else if (inputPage < 1 || inputPage > 10 || isNaN(inputPage)) {
        console.log('Номер страницы вне диапазона от 1 до 10')
    } else if (inputLimit < 1 || inputLimit > 10 || isNaN(inputPage)) {
        console.log('Лимит вне диапазона от 1 до 10')

    } else {
        let url = `https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                localStorage.setItem('dataStorage', JSON.stringify(data))
                getImages(data)

            })
            .catch(error => console.log(error));

    }
}
function getImages(data) {
    if (data)
        data.forEach(element => {
            let divImage = document.getElementById('image-container')
            let img = document.createElement('IMG')
            img.src = element.download_url
            img.style.width = "300px"
            img.style.height = "200px"
            divImage.appendChild(img)
        })
}