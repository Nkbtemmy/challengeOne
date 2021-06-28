const getParams = function (url) {
    let link = document.createElement('a');
    link.href = url;
    let query = link.search.substring(1);
    let parameters = query.split('&');
    const vars = {};

    for (let i = 0; i < parameters.length; i++) {
      let pair = parameters[i].split('=');
      vars[pair[0]] = decodeURIComponent(pair[1]);
    }
    
    return vars;
  };

const getUserPosts = async() =>{
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    const id = getParams(url);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id.userid}`)
    .then((response) => response.json())
    .then((data) => {     
      let output = '<span >'
        data.forEach(async (post) => {
            output += `
              <div class="parent">
                  <div class="child card">
                      <h2>${post.title}</h2>
                      <p>${post.body}</p>
                  </div>
              </div>
              `
        });
       output += '</span>'
       document.getElementById('details').innerHTML = output;
    })
    .catch(err => console.log("Error occur during retreiving blogs"));
    
}
