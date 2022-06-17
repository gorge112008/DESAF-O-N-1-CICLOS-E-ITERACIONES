//ALGORITMO DE SIMULACIÓN DE COMPRAS EN UN MERCADO DE FRUTAS:
alert ("BIENVENIDO AL MERCADO DE FRUTAS")
//DEFINIENDO VARIABLES:
let manza   =20; let costmanza  =1   ; let compramanza  =0 ;
let pera    =15; let costpera   =2   ; let comprapera   =0 ;
let naran   =10; let costnaran  =3   ; let compranaran  =0 ; 
let sandi   = 5; let costsandi  =4   ; let comprasandi  =0 ;    let total   = 0;
//SOLICITANDO DATOS PARA INICIAR BUCLE:
let ingreso = prompt(   "Buen día, selecciona la opción de la fruta que desea comprar:  \n"+
                        "1-Manzana \n2-Pera \n3-Naranja \n4-Sandia \n0-Ninguna, Salir   \n"+
                        "***************************************************************\n"+
                        "Si desea ver el Stock de Frutas ingrese el 5"                    );
//INICIANDO BUCLE MEDIANTE CONDICIONAL WHILE:     
while (ingreso!= "0" && ingreso!=null)  {
    //INDICANDO EL STOCK MEDIANTE CONSOLA PERIODICAMENTE EN CADA CICLO:
    console.log(    "************ MERCADO DE FRUTAS ************   \n"+
                    "Stock disponible:                             \n"+
                    "   *Manzanas:  Quedan "+manza  +" unidad(es). \n"+
                    "   *Peras:     Quedan "+pera   +" unidad(es). \n"+
                    "   *Naranjas:  Quedan "+naran  +" unidad(es). \n"+
                    "   *Sandias:   Quedan "+sandi  +" unidad(es). \n");
//APLICANDO ESTRUCTURA SWITCH:
switch (ingreso) {
    //INGRESANDO AL CASO 1 SI LA OPCIÓN ELEGIDA ES 1:
    case "1":
        //MIENTRAS EXISTA STOCK DE MANZANAS SE INGRESA A LA CONDICIÓN IF.
        if (manza!=0) {
            let cantidad=parseInt(prompt(   "Las manzanas cuestan S/."+costmanza+" la unidad.              \n"+
                                            "¿Cuántas manzanas desea comprar? \nPor favor ingrese un número"));
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (cantidad > manza)    {
                cantidad=parseInt(prompt(   "Disculpe, solo queda(n) "+manza+" manzana(s) en stock.        \n"+
                                            "Por favor, elija otra cantidad."));
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if (cantidad == null)       {
                break;
            }   else if(cantidad == "" || cantidad == "0" || isNaN (cantidad))  {
                    alert(  "No ha indicado ninguna cantidad válida, se le devolvera al menú");
                break;
            }   else    {
                        manza=manza-cantidad;               //ACTUALIZANDO EL STOCK DE MANZANAS.
                        compramanza=compramanza+ cantidad;  //ACTUALIZANDO LA CANTIDAD DE MANZANAS COMPRADAS.
                        total=total+(costmanza*cantidad);   //ACTUALIZANDO EL MONTO TOTAL DE LAS COMPRAS REALIZADAS.
                    //INDICANDO LA CANTIDAD DE MANZANAS COMPRADAS Y SU RESTO EN STOCK:
                    alert(  "Ha comprado "+ cantidad + " manzana(s) \n"+
                            "Queda(n) "+ manza+ " manzana(s) en stock");
                break;
            } 
        }
            //SI NO EXISTE STOCK DE MANZANAS SE INDICA EN UNA ALERTA Y SE REDIRIGE AL MENÚ DE OPCIONES.
            alert("Disculpe, se terminó el stock de manzanas, por favor elija otra opción.");
        break;
    //INGRESANDO AL CASO 2 SI LA OPCIÓN ELEGIDA ES 2:
    case "2":
        //MIENTRAS EXISTA STOCK DE PERAS SE INGRESA A LA CONDICIÓN IF.
        if (pera!=0) {
            let cantidad=parseInt(prompt(  "Las peras cuestan S/."+costpera+" la unidad                \n"+
                                           "¿Cuántas peras desea comprar? \nPor favor ingrese un número"));
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (cantidad > pera)     {
                cantidad=parseInt(prompt(  "Disculpe, solo queda(n) "+pera+" pera(s) en stock.         \n"+
                                           "Por favor, elija otra cantidad."));
            }

            if (cantidad == null)       {
                break;
            }   else if(cantidad == "" || cantidad == "0"|| isNaN (cantidad))  {
                    alert(  "No ha indicado ninguna cantidad válida, se le devolvera al menú");
                break;
            }   else   {  
                        pera=pera-cantidad;                 //ACTUALIZANDO EL STOCK DE PERAS.
                        comprapera=comprapera+cantidad;     //ACTUALIZANDO LA CANTIDAD DE PERAS COMPRADAS.
                        total=total+(costpera*cantidad);    //ACTUALIZANDO EL MONTO TOTAL DE LAS COMPRAS REALIZADAS.
                    //INDICANDO LA CANTIDAD DE PERAS COMPRADAS Y SU RESTO EN STOCK:
                    alert(  "Ha comprado "+ cantidad + " pera(s)\n"+
                            "Queda(n) "+ pera+ " pera(s) en stock");
                break;
            } 
        }
            //SI NO EXISTE STOCK DE PERAS SE INDICA EN UNA ALERTA Y SE REDIRIGE AL MENÚ DE OPCIONES.
            alert("Disculpe, se terminó el stock de peras, por favor elija otra opción.");
        break;
    //INGRESANDO AL CASO 3 SI LA OPCIÓN ELEGIDA ES 3:
    case "3":
        //MIENTRAS EXISTA STOCK DE NARANJAS SE INGRESA A LA CONDICIÓN IF.
        if (naran!=0) {
            let cantidad=parseInt(prompt(   "Las naranjas cuestan S/."+costnaran+" la unidad                \n"+
                                            "¿Cuántas naranjas desea comprar? \nPor favor ingrese un número"));
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (cantidad > naran)    {
                cantidad=parseInt(prompt(   "Disculpe, solo queda(n) "+naran+" naranja(s) en stock.         \n"+
                                            "Por favor, elija otra cantidad."));
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if (cantidad == null)       {
                break;
            }   else if(cantidad == "" || cantidad == "0"|| isNaN (cantidad))   {
                    alert(  "No ha indicado ninguna cantidad válida, se le devolvera al menú");
                break;
            }   else    {   
                        naran=naran-cantidad;               //ACTUALIZANDO EL STOCK DE NARANJAS.
                        compranaran=compranaran+cantidad;   //ACTUALIZANDO LA CANTIDAD DE NARANJAS COMPRADO.
                        total=total+(costnaran*cantidad);   //ACTUALIZANDO EL MONTO TOTAL DE LAS COMPRAS REALIZADAS.
                    //INDICANDO LA CANTIDAD DE NARANJAS COMPRADAS Y SU RESTO EN STOCK:
                    alert(  "Ha comprado "+ cantidad + " naranja(s) \n"+
                            "Queda(n) "+ naran+ " naranja(s) en stock");
                break;
            } 
        }
            //SI NO EXISTE STOCK DE NARANJAS SE INDICA EN UNA ALERTA Y SE REDIRIGE AL MENÚ DE OPCIONES.
            alert("Disculpe, se terminó el stock de naranjas, por favor elija otra opción.");
        break;
    //INGRESANDO AL CASO 4 SI LA OPCIÓN ELEGIDA ES 4:
    case "4":
        //MIENTRAS EXISTA STOCK DE SANDÍAS SE INGRESA A LA CONDICIÓN IF.
        if (sandi!=0) {
            let cantidad=parseInt(prompt(   "Las sandías cuestan S/."+costsandi+" la unidad               \n"+
                                            "¿Cuántas sandías desea comprar? \nPor favor ingrese un número"));
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (cantidad > sandi)    {
                cantidad=parseInt(prompt(   "Disculpe, solo queda(n) "+sandi+" sandía(s) en stock.         \n"+
                                            "Por favor, elija otra cantidad."));
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if (cantidad == null)       {
                break;
            }   else if(cantidad == "" || cantidad == "0"|| isNaN (cantidad))  {
                    alert(  "No ha indicado ninguna cantidad válida, se le devolvera al menú");
                break;
            }   else    {
                        sandi=sandi-cantidad;               //ACTUALIZANDO EL STOCK DE SANDÍAS.
                        comprasandi=comprasandi+cantidad;   //ACTUALIZANDO LA CANTIDAD DE SANDÍAS COMPRADAS.
                        total=total+(costsandi*cantidad);   //ACTUALIZANDO EL MONTO TOTAL DE LAS COMPRAS REALIZADAS.
                    //INDICANDO LA CANTIDAD DE SANDÍAS COMPRADAS Y SU RESTO EN STOCK:
                    alert(  "Ha comprado "+ cantidad + " sandía(s) \n"+
                            "Queda(n) "+ sandi+ " sandía(s) en stock");
                break;
            } 
        }
            //SI NO EXISTE STOCK DE SANDÍAS SE INDICA EN UNA ALERTA Y SE REDIRIGE AL MENÚ DE OPCIONES.
            alert(  "Disculpe, se terminó el stock de sandías, por favor elija otra opción.");
        break;
    //INGRESANDO AL CASO 5 SI LA OPCIÓN ELEGIDA ES 5:
    case "5":
            //INDICANDO EL STOCK DISPONIBLE DE FRUTAS MEDIANTE UNA ALERTA:
            alert(  "Stock disponible:    \n"+
                    "   *Manzanas:  Queda(n)  "+manza +"  unidad(es).\n"+
                    "   *Peras:     Queda(n)  "+pera  +"  unidad(es).\n"+
                    "   *Naranjas:  Queda(n)  "+naran +"  unidad(es).\n"+
                    "   *Sandias:   Queda(n)  "+sandi +"  unidad(es).\n");
        break;
    //INGRESANDO AL CASO 6 SI LA OPCIÓN ELEGIDA ES 6:
    case "6":
            //MOSTRANDO MEDIANTE UNA ALERTA LA BOLETA DETALLADA DE LAS COMPRAS REALIZADAS.
            alert(  "BOLETA DE VENTA DETALLADA:\n"+
                    "   *Manzanas:  Ha comprado  "+compramanza  +"  unidad(es) = S/."+ costmanza*compramanza  + ".\n"+
                    "   *Peras:     Ha comprado  "+comprapera   +"  unidad(es) = S/."+ costmanza*comprapera   + ".\n"+
                    "   *Naranjas:  Ha comprado  "+compranaran  +"  unidad(es) = S/."+ costmanza*compranaran  + ".\n"+
                    "   *Sandias:   Ha comprado  "+comprasandi  +"  unidad(es) = S/."+ costmanza*comprasandi  + ".\n"+
                    "   ////////////////////////////////////////////////////////////////                          \n"+
                    "   MONTO TOTAL DE SU COMPRA= S/."+total+" Soles.");
        break;
    //INGRESANDO AL CASO POR DEFECTO SI LA OPCIÓN ELEGIDA NO ES NINGUNA VÁLIDA:
    default:
            //SI LA OPCIÓN INGRESADA NO ES VÁLIDA SE INDICA MEDIANTE UNA ALERTA.
            alert(  "Opción no válida");
        break;
    }   
    //SOLICITANDO DATOS PARA CONTINUAR CON EL BUCLE O SALIR DEL MISMO:
    ingreso = prompt(   "Buen día, selecciona la opción de la fruta que desea comprar:         \n"+
                        "1-Manzana \n2-Pera \n3-Naranja \n4-Sandia \n0-Ninguna, Terminar compra\n"+
                        "******************************************************************    \n"+
                        "Si desea ver el Stock de Frutas ingrese el 5                          \n"+
                        "Si desea ver su boleta de venta detallada ingrese el 6");
    if (ingreso == "0") {
        break;
    }   else if (ingreso == null) {
                total=0;
            alert(  "Se ha cancelado la compra"); //INDICANDO CANCELACIÓN DE LA COMPRA.
        break;
    }
}
//INDICANDO EL DESENLACE DE LA COMPRA MEDIANTE UNA CONDICIONAL IF ELSE:
if (total== "0") {
        alert ( "Muchas Gracias por su visita, que tenga un buen día"); //ALERTA EMITIDA AL CANCELAR LA COMPRA.
}   else    {
        alert ( "Ha comprado:                    \n"+                   //ALERTA EMITIDA AL COMPLETAR CON ÉXITO LA COMPRA.
                "*"+compramanza +" manzana(s)    \n"+
                "*"+comprapera  +" pera(s)       \n"+
                "*"+compranaran +" naranja(s)    \n"+
                "*"+comprasandi + " sandia(s)    \n"+
                "El monto total de su compra es de: S/."+total+ " Soles.  \n"+
                "Muchas Gracias por su compra, que tenga un buen día!!!"       );
}