/*--------------Carousel---------*/
/*----*('.carousel').carousel({
  interval: 4000
})----*/
/*----------------Json-----------*/
document.getElementById('page-loaded').innerHTML=
(new Date()).toLocaleTimeString();

document.querySelector('button')
    .addEventListener('click', getData);
    
    function getData(e) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                const client = JSON.parse(xhr.responseText);
                document.getElementById('client-name').innerHTML = client.name;
                document.getElementById('client-address').innerHTML = client.address;
                document.getElementById('client-age').innerHTML = client.age;
                
            }
        }
        xhr.open('GET', 'client.json', true);
        xhr.send();
    }