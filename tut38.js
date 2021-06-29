console.log('we are in tut 38');


let fruits = document.getElementById('fruitsBtn');
fruits.addEventListener('click', showFruits);

function showFruits(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'fruits.json', true);

    xhr.onload = function(){
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            // console.log(obj);
            let tableBody = document.getElementById('tableBody');
            tableRow = "";
            for (let i = 0; i < obj.fruits.length; i++)
            {
                tableRow +=  `<table class="table table-hover">
                    <tr>
                        <td>${obj.fruits[i].Name}</td>
                        <td>${obj.fruits[i].color}</td>
                    </tr>
                    </table>`;
            }
            // console.log(tableRow);
            tableBody.innerHTML = tableRow;
        }
        else
        {
            console.log('Some error');
        }

    }

    xhr.send();
}


let veg = document.getElementById('vegBtn');
veg.addEventListener('click', showVeg);

function showVeg(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'vegetables.json', true);

    xhr.onload = function(){
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            // console.log(obj);
            let tableBody = document.getElementById('tableBody');
            tableRow = "";
            for (let i = 0; i < obj.vegetables.length; i++)
            {
                tableRow +=  `<table class="table table-hover">
                    <tr>
                        <td>${obj.vegetables[i].Name}</td>
                        <td>${obj.vegetables[i].color}</td>
                    </tr>
                    </table>`;
            }
            // console.log(tableRow);
            tableBody.innerHTML = tableRow;
        }
        else
        {
            console.log('Some error');
        }

    }

    xhr.send();
}
