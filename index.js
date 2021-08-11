let request = new XMLHttpRequest();
let dashboardData;
var tag = "";
var table = document.getElementById("mytab1");
var goal = document.getElementById("goal");
let className = "data2";

function getData(){
    // request.open("GET", "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard");
    // request.send();
    // request.onload = () => {
    //     // console.log(request);
    //     if(request.status === 200){
    //         console.log(JSON.parse(request.response));
    //         return JSON.parse(request.responseXML);
    //     }
    //     else{
    //         console.log(`error ${request.status} ${request.statusText}`);
    //     }
        
    // }


    fetch("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard")
    .then(res => {
        console.log(res.clone().json());
        return res.clone().json();
    });
}
let myRows = table.rows; 
// for(let i in table.rows){
//     let row = table.rows[i]
//     console.log('row', row)
//     for (let j in row.cells) {
//         let col = row.cells[j]
//         console.log('col', col)
//         table.rows[i].cells[j].innerHTML = "Hi"    
//     } 

// }
dashboardData = getData();
console.log('Test', dashboardData);
for(let i = 1; i<=6; i++ ){
    for(let j=0; j<4; j++){
        // if(j == 0)
            // console.log('Test', dashboardData.data[0].goal);

            // myRows[i].cells[j].innerHTML = dashboardData.data[0].goal;

    }
}


// fetch("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard")
// .then((responce)=>{
//     dashboardData = responce.json();
//     console.log('dashboard',dashboardData[data]);
// })

// const dashboardUrl = "https://api.openweathermap.org/data/2.5/weather";

