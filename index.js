const dashboardAPI = "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard";
let dashboardData;
var tag = "";
let table = document.querySelector('table');


getDashboardData().catch(error => console.log(error));

async function getDashboardData() {
    const response = await fetch(dashboardAPI);
    const data = await response.json();
    if (data) {
        console.log(data);
        let myRows = table.rows;
        for (let i = 0; i < 6; i++) {           
            let Keyword = data.data[i].keyword;
            let goal = data.data[i].goal;
            let matches = data.data[i].matches;
            let searchStatus = data.data[i].search_status;
            // let deleteKeyword
            // console.log(Keyword);

            let template = `
                <tr>
                    <div class="border"></div>
                    <td class="data1"> ${Keyword} <img src="searchicon.png" alt=""></td>
                    <td class="data2"> ${goal} </td>
                    <td class="data3"> ${matches} </td>
                    <td class="data4"> ${searchStatus} </td>
                    <td class="data5"><button><img src="deleteicon.png" alt=""></button></td>
                </tr>`;

            table.innerHTML += template;
        }
    }
}

