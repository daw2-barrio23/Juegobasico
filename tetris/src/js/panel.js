import { ModeloPieza } from "./ModeloPieza.js";

export const panel = {//Creamos el array que sera nuestra pantalla de juego
    matriz: [
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    nuevaPieza: "",
    pintaPanel: ()=>{
        var html = ''
        for(let y = 1; y < panel.matriz.length-1; y++){//creamos un bucle en el que llamamos a la matriz y cogemos su longitud-1 para comparar y ver si podemos añadir una pieza

            html += '<div class="p-fila">'

            for(let x = 1; x < panel.matriz[y].length-1; x++){//recorremos la matriz buscando el apartado en el que esta la pieza para pintarla cuando detecte que la casilla es un 1 (se pintaria en este caso de color rojo) en vez de un 0(no se pintaria)
                const valorMatriz = panel.matriz[y][x];
                if(valorMatriz == 1){
                    html+= `<div class="celda bg-danger"></div>` 
                }
                else{
                    html+= `<div class="celda"></div>`
                }
                
            }
            html += '</div>'
        }
        document.getElementById('panel').innerHTML = html//inyectamos el resultado en el elemento que tenga id=panel en el documento html
    },
    crearNuevaPieza: ()=>{
        
       
        panel.nuevaPieza = new  ModeloPieza(0)//sacamos la pieza del palo
        console.log(panel.nuevaPieza);
        let x = Math.ceil(Math.random()*((10-panel.nuevaPieza.longitud)));
        panel.nuevaPieza.x = x
    },

    insertarPieza: ()=>{
        let x = panel.nuevaPieza.x
        let y = panel.nuevaPieza.y
        
        for(let alt = 0; alt< panel.nuevaPieza.altura; alt++, y++){
            for(let long = 0; long< panel.nuevaPieza.longitud; long++, x++){
                panel.matriz[y][x]=1
            }
            x = panel.nuevaPieza.x
        }
    },
    controlTeclas: ()=>{//cogemos el control de teclas
        document.addEventListener("keydown", function(event){
            console.log(event.key);
            if(event.key == 'ArrowRight'){//flecha derecha llama a moverse a la derecha
                panel.moverDra();
            }
            else if(event.key == 'ArrowLeft'){//flecha izquierda llama a moverse a la izquierda
                panel.moverIzq()
            }
            else if(event.key == 'ArrowDown'){//la flecha de abajo llama a poder bajar 
                panel.bajar()
            }
            else if(event.key == 'ArrowUp'){//flecha de arriba te deja rotar la figura
                let resultado = panel.girarComprobacion()
                if(resultado == true){
                    console.log("puede girar");
                    panel.borrar()
                    panel.nuevaPieza.girar()
                    panel.insertarPieza()
                    panel.pintaPanel()
                }
                else{
                    console.log("no puede girar");
                }
            }
        })
    },
    borrar: ()=>{//borra el estado anterior de la pieza
        let x = panel.nuevaPieza.x
        let y = panel.nuevaPieza.y

        for(let alt = 0; alt< panel.nuevaPieza.altura; alt++, y++){
            for(let long = 0; long< panel.nuevaPieza.longitud; long++, x++){
                panel.matriz[y][x]=0
            }
            x = panel.nuevaPieza.x
        }
    },
    moverDra: ()=>{//cuando se mueve a la derecha lo primero que hace es llamar a la funcion borrar para que borre la pieza pintada segun esta cayendo para luego actualizarla de forma correcta moviendola al nuevo lado
        panel.borrar()
        if(panel.nuevaPieza.x <=9 && panel.nuevaPieza.x + panel.nuevaPieza.longitud < 11){
            panel.nuevaPieza.x = panel.nuevaPieza.x + 1
        }
        else{
            console.log("estas en el limite de la derecha");
        }
        panel.insertarPieza()
        panel.pintaPanel()
        console.log(panel.nuevaPieza);
    },
    moverIzq: ()=>{//cuando se mueve a la derecha lo primero que hace es llamar a la funcion borrar para que borre la pieza pintada segun esta cayendo para luego actualizarla de forma correcta moviendola al nuevo lado
        panel.borrar()
        if(panel.nuevaPieza.x > 1){
            panel.nuevaPieza.x = panel.nuevaPieza.x -1
            
        }
        else{
            console.log("estas en el limite de la izquierda");
        }
        panel.insertarPieza()
        panel.pintaPanel()
        console.log(panel.nuevaPieza);
    },
    bajar: ()=>{//cuando se mueve a la derecha lo primero que hace es llamar a la funcion borrar para que borre la pieza pintada segun esta cayendo para luego actualizarla de forma correcta moviendola al nuevo lado
        panel.borrar()
        if(panel.nuevaPieza.y<20 && panel.nuevaPieza.y + panel.nuevaPieza.altura <21){
            panel.nuevaPieza.y = panel.nuevaPieza.y + 1
            console.log("Baja");
        }
        else{
            console.log("estas en el limite de abajo");
        }
        panel.insertarPieza()
        panel.pintaPanel()
        console.log(panel.nuevaPieza.y);
    },
    iniciarMovimiento: ()=>{//inicia el movimieto de la pieza 
       let Bajar = setInterval(panel.bajar,1500)//cada 1500 milisegundos bajara
       console.log("esta");
    },
    girarComprobacion: ()=>{//comprueba si puede girar la pieza
        let resultadoGiro = false

        panel.borrar()
        panel.nuevaPieza.girar()

        if(panel.nuevaPieza.x + panel.nuevaPieza.longitud <=11 && panel.nuevaPieza.y + panel.nuevaPieza.altura <= 21){
            resultadoGiro = true
        }
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        return resultadoGiro
    }
}