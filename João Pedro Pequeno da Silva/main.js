var x;
p = async function get(){
   const dados = await fetch("./dados.json")
    const data = await dados.json().then((valor) => x = valor); 
    return data
}
console.log(p())