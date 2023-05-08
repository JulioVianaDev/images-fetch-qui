const form = document.getElementById("my-form");
form.addEventListener("submit",handleSubmit);
var colorCard = 'greenCard';
var textCard =''
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData();
  data.append("post[title]",event.target.title.value);
  data.append("post[image]",event.target.image.files[0]);
  // console.log(data)
  submitToAPI(data);
}
const miniCard = document.getElementById("miniCard");
async function submitToAPI(data){
  try {
    var response = await fetch("http:/localhost:3000/posts",{
      method: "POST",
      body: data,
    })
    var colorCard = 'greenCard';
    var textCard= 'Foto cadastrada com sucesso!'
    endAnimation()
  } catch (error) {
    var colorCard = 'redCard';
    var textCard = "Algo deu errado!";
    endAnimation()
  }
  miniCard.innerHTML = `<div id="card" class='${colorCard}'> ${textCard}</div>`  
  var json = await response.json()
  const latestPost = document.getElementById("latest-post");
  latestPost.innerHTML = `<img class="LatestImagem" src="${json.image_url}" alt="ultima Imagem" />`;
  endAnimation()
}
function endAnimation(){
  setTimeout(()=>{
    const card = document.getElementById("card");
    card.style.opacity = 0;
  },2000)
}