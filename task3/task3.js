let button=document.querySelector('.btn')
button.addEventListener('click',getInput)


function getInput(){
    let valueInput = document.querySelector('input').value
    let numberInput = Number(valueInput)
    if(numberInput<1 || numberInput>10 ){
        console.log(`число вне диапазона от 1 до 10`)
        return
    
    }  
    const xhr = new XMLHttpRequest()
    const request = `https://picsum.photos/v2/list?limit=${valueInput}`
    xhr.open('GET',request)
    xhr.responseType= 'json'
    xhr.onload= () => {
        if (xhr.status != 200) {        
         console.log('Статус ответа: ', xhr.status)
        } 
        xhr.response.forEach(element => {
            let imageInner = document.getElementById('image-container')
            let img = document.createElement('IMG')
            img.setAttribute("id", "idOne")
            let br = document.createElement('BR')
            img.src = element.download_url
            imageInner.appendChild(img)
            imageInner.appendChild(br)

             });

       
    }
    xhr.onerror = () =>{
        console.log('Ошибка! Статус ответа: ', xhr.status);
    }
    xhr.send()
   
}

