const redirector = (id) =>{
    window.location=`posts.html?userId=${id}`
}

const list = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                 // console.log(data[i]);
                let output =` 
                <table>
                    <tr>
                        <th>order</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>More Info</th>
                    </tr>
                `;
                for(let i=0;i<10;++i){
                    var id = data[i].id;
                    output += `
                    <tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${ data[i].email}</td>
                        <td>
                            <button  onclick="redirector(${id})"> Get User’s Posts </button>
                        </td>
                    </tr>
                    `;
                }
                 output +='</table>';
                 document.getElementById('home').innerHTML = output;
            })
            .catch(err => console.log("Error occur during fetching data"));
}
