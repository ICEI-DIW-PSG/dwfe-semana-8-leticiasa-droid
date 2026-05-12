const catalogo = {
  
   "fs": [

        {  
         "id": 1,
        "titulo": "Dark",
         "tipo":"" ,
         "ano":"" ,
        "generos":"" ,
         "nota":"9" ,
         "assistido": true
        }

        
    ]

}

    console.log(catalogo);

    function carregarCatalogo(){

        let tela = "";

        let divOutPut = document.getElementById("output");

        for(let i = 0; i < catalogo.fs.length; i++){

            tela += "<h1>" + catalogo.fs[i].titulo + "</h1>";
            tela += "<h3> Ano: " + catalogo.fs[i].ano + "<br>nota" + catalogo.fs[i].nota + "</h3>";

        }

        // Output.innerHTML = 
        divOutPut.innerHTML = tela;

    }