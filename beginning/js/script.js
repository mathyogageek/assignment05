


  window.addEventListener('load', ()=>{
    let btn = document.getElementById("empForm");
    btn.addEventListener('submit', (event) =>{
    event.preventDefault();

    let formData ='';
    for (let i =0; i < btn.elements.length; i ++){
      const element = btn.elements[i];
      if (element.name){
        formData += `${element.name}: ${element.value}\n`;

      }
    }
    console.log(formData);
  });
  });

  
  