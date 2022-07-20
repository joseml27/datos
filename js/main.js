import {user} from "./data.js";

let caja_texto = document.querySelector("#cj-titulo_texto");
let bt_siguiente = document.getElementById("bt_siguiente");
let bt_anterior = document.getElementById("bt_anterior");

    
        let usuario = 0;
        caja_texto.innerHTML = user[usuario][1]

        function siguiente(){
            if(usuario <= 8){
                usuario++;
                caja_texto.innerHTML = user[usuario][1];
            }
        }
        bt_siguiente.addEventListener('click',siguiente);

        function atras(){
            if(usuario >= 1){
                usuario--;
                caja_texto.innerHTML = user[usuario][1];
            }
            
        }
        bt_anterior.addEventListener('click',atras);

        let datos1 = document.getElementById("datos1");
        let datos2 = document.getElementById("datos2");
        let datos3 = document.getElementById("datos3");
        let datos4 = document.getElementById("datos4");
        let datos5 = document.getElementById("datos5");
        let datos6 = document.getElementById("datos6");
        let datos7 = document.getElementById("datos7");
        let bt_ver = document.getElementById("bt_ver");
        let titulo = document.getElementById("titulo")

        function ver(){
                    if(usuario == usuario){
                        titulo.innerHTML = '<h1>' + ' Usuario' + '</h1>'
                        datos1.innerHTML = '<b>' + 'ID: ' + '</b>' + user[usuario][0];
                        datos2.innerHTML = '<b>' + 'Nickname: ' + '</b>' + user[usuario][1];
                        datos3.innerHTML = '<b>' + 'Password: ' + '</b>' + user[usuario][2];
                        datos4.innerHTML = '<b>' + 'Username ' + '</b>' + user[usuario][3];
                        datos5.innerHTML = '<b>' + 'Address: ' + '</b>' + user[usuario][4];
                        datos6.innerHTML = '<b>' + 'E-mail: ' + '</b>' + user[usuario][5];
                        datos7.innerHTML = '<b>' + 'Phone: ' + '</b>' + user[usuario][6];
                    }
               
        }

        bt_ver.addEventListener('click',ver);