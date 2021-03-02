let button = document.querySelector('#btn').addEventListener('click',sendRequest)

function sendRequest() {
    let valueInput1 = document.querySelector('#input1').value
    let valueInput2 = document.querySelector('#input2').value
    let valueNum1 = Number(valueInput1)
    let valueNum2 = Number(valueInput2)
    if( isNaN(valueNum1) || 
        isNaN(valueNum2)  ||  
        ((valueNum1 < 100 || valueNum1 >300) && 
        (valueNum2 < 100 || valueNum2 >300))){
        console.log('одно из чисел вне диапазона от 100 до 300');
        return
    }
    
    fetch(`https://picsum.photos/${valueNum1}/${valueNum2}`)
    .then(response=>response.blob())
    .then(image=>{
    let outside = URL.createObjectURL(image)
    let imageDiv = document.querySelector('#img-container')
    let img = document.createElement('IMG')
    img.src=outside
    imageDiv.appendChild(img)
    
    })
 

}

