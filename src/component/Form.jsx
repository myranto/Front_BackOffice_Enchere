import { useRef } from "react";
import axios from 'axios';

export default function Formulaire(props)
{
  var cate = useRef(null)
    var json = null;
  function Valider (){
    alert(cate.current.value)
    var json = {
        "nom" : cate.current.value  
    }

    alert(JSON.stringify(json))
    fetch('http://localhost:8000/enchere/admin/categorie/mety/'+cate.current.value).then((resp)=>{
        return resp.json();
    }).then((ret)=>{
        alert(ret)
    })
    

  }
  
  function getCategorie()
{
    fetch('http://localhost:8000/enchere/admin/categorie/'+10).then((resp)=>{
        return resp.json();
    }).then((ret)=>{
        var cat = ret;
        
        alert(cat.data[0].nom)
        document.getElementById("liste").innerHTML=cat.data[0].nom;
    })
}
    return (<div id="categorie">
    <form onSubmit={props.submit}>      
        Nom Categorie:<input type="text" name="categorie" ref={cate} />
       <p> <input type="submit" value="Valider" onClick={Valider} id="categorie"></input></p>
      
       <p> <input type="submit" value="Voir Liste"  onClick={getCategorie()}></input></p>
        <p><div id="liste">
            </div></p>
      </form>
      </div>);
}
