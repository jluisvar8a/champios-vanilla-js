const equipos = {
  "0" : {
    "alineacion" : [1,4,2,3,1],
    "jugadores" : [
      ["1","H. Lloris"],
      ["2","K. Trippier"],
      ["4","T. Alderweireld"],
      ["5","J. Vertonghen"],
      ["3","D. Rose"],
      ["17","M. Sissoko"],
      ["8","H. Winks"],
      ["23","C. Eriksen"],
      ["20","D. Alli"],
      ["7","Son Heung-Min"],
      ["10","H. Kane"]
    ]
  },
  "1" : {
    "alineacion" : [1,4,3,3],
    "jugadores" : [
      ["13","Alisson"],
      ["26","A. Robertson"],
      ["4","V. van Dijk"],
      ["32","J. Matip"],
      ["66","T. Alexander-Arnold"],
      ["5","G. Wijnaldum"],
      ["3","Fabinho"],
      ["14","J. Henderson"],
      ["10","S. Sané"],
      ["9","R. Firmino"],
      ["11","M. Salah"] 
    ]
  }
}

function activarPestana(event) {
  let id = event.target.id;
  let activeElements = document.getElementsByClassName("active")

  while (activeElements.length > 0){
    activeElements[0].classList.remove("active")
  }

  document.getElementById(id).classList.add("active")
  let contenido = document.querySelector(`[data-pestana=${id}]`)
  contenido.classList.add("active")

  if (id === 'p1') {
    generarAlineacion()
  }
}

function generarAlineacion () {
  if (document.getElementById("posicion00")){
    return 
  } 

  for (let e = 0; e < 2; e++) {
    let nFilas = equipos[e].alineacion.length
    console.log(nFilas)
    let nro = 0

    for (let i = 0; i < nFilas; i++){
      let div = document.createElement("div")
      div.classList = `posicion${e}${i}`
      div.id = `posicion${e}${i}`
      document.getElementById(`line${e}`).appendChild(div) 
      
      let cuantos = equipos[e].alineacion[i]
      for (let j = 0; j < cuantos; j++){
        
        let div1 = document.createElement("div")
        div1.classList = `nombre${e}`
        div1.id = `nombre${e}${nro}`
        document.getElementById(div.id).appendChild(div1) 

        let div2 = document.createElement("div")
        div2.classList = `jugador${e}`
        div2.id = `jugador${e}${nro}`
        document.getElementById(div1.id).appendChild(div2) 

        let span = document.createElement("span")
        span.classList = `span${e}`
        let nroJugador = document.createTextNode(equipos[e].jugadores[nro][0])
        span.appendChild(nroJugador)
        document.getElementById(div2.id).appendChild(span)
        
        let div3 = document.createElement("div")
        div3.classList = 'name' 
        let nameJugador = document.createTextNode(equipos[e].jugadores[nro][1])
        div3.appendChild(nameJugador)
        document.getElementById(div1.id).appendChild(div3) 
        nro++
      }
    }
  }
}

function queEquipo() {
  let team = document.getElementById("select").value 
  let acti = document.getElementsByClassName("act")
  let idj = (team === "liverpool" ? "li" : "to" ) 
  while (acti.length > 0){
    acti[0].classList.remove("act")
  }
  document.getElementById(idj).classList.add("act")
} 
