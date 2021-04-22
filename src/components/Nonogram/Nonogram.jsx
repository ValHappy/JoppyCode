import React from 'react';
import Sketch from "react-p5";

const Nonogram = ({ difficult }) => {

    class Casilla {

        static errores = 0;

        constructor(app, x, y, n, npiezas) {
            this.app = app;
            this.x = x;
            this.y = y;
            this.n = n;
            this.active = false;
            this.correcto = false;
            this.npiezas = npiezas;
            this.w = (this.app.width - (this.app.width * 0.2)) / npiezas;
            this.h = (this.app.height - (this.app.height * 0.2)) / npiezas;
            this.unlock = this.unlock.bind(this);
        }

        show() {
            this.app.stroke(255);
            if (this.active === true) {
                if (this.correcto === true) {
                    this.app.fill(0);
                } else {
                    this.app.fill(255, 0, 0, 51);
                }
            } else {
                this.app.fill(24, 195, 200, 51);
            }
            this.app.rect(this.x, this.y, this.w, this.h);

        }

        press(mx, my) {
            if (this.active === false) {
                if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
                    console.log("Yes");
                    if (this.n === 1) {
                        this.correcto = true;
                        this.active = true;
                    } else {
                        this.correcto = false;
                        this.active = true;
                        Casilla.errores++;
                        this.ul = setTimeout(this.unlock, 1000)
                    }
                }
            }
        }

        unlock() {
            this.active = false;
        }

        getCorrecto() {
            return this.correcto;
        }
        getActive() {
            return this.active;
        }

        responsiveApp(x, y) {
            this.x = x;
            this.y = y;
            this.w = (this.app.width - (this.app.width * 0.2)) / this.npiezas;
            this.h = (this.app.height - (this.app.height * 0.2)) / this.npiezas;
        }

    }

    let casillas = [];
    let instruccionesHorizontal;
    let instruccionesVertical;
    let totalVerticales;
    let w, h;
    let npiezas;
    let u;
    let pantalla = 0;
    let finalImage = [];
    let erroresEjercio1 = 0;
    let tiempoEjercicio1;
    let erroresEjercio2 = 0;
    let tiempoEjercicio2;
    let tInicio1 = null;
    let tFinal1 = null;
    let tInicio2 = null;
    let tFinal2 = null;
    let ejercicio1Lineas;


    const setup = (p5, canvasParentRef) => {

        p5.createCanvas(p5.windowWidth * 0.25, p5.windowWidth * 0.25).parent(canvasParentRef);
        switch (difficult) {
            case "principiante":
                ejercicio1Lineas = [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 1, 0]];
                instruccionesHorizontal = [1, 2, 5, "2" + "\n" + "1", 1];
                totalVerticales = 12;
                instruccionesVertical = [1, 3, 5, 1, 2];
                npiezas = ejercicio1Lineas.length;
                w = (p5.width - (p5.width * 0.2)) / npiezas;
                h = (p5.height - (p5.height * 0.2)) / npiezas;
                p5.textAlign(p5.CENTER, p5.CENTER);
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
        
                        casillas.push(new Casilla(p5, (w * j) + (p5.width * 0.2), (h * i) + (p5.height * 0.2), ejercicio1Lineas[i][j], npiezas));
        
                    }
                }
                update.bind(this);
                u = setInterval(update, 20);
                break;

            case "basico":
                casillas = []
                pantalla = 2;
                let ejercicio2Lineas = [[0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 1, 1, 1, 1, 0, 1, 1, 1], [1, 0, 0, 1, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 1, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0, 0, 0]];
                instruccionesHorizontal = [5, "1" + "\n" + "3", "3" + "\n" + "5", "6" + "\n" + "1", "6" + "\n" + "3", "8", "2" + "\n" + "5", "3" + "\n" + "3", 7, 5];
                totalVerticales = 66;
                instruccionesVertical = [6, 8, "1    4    3", "1    3    2", "1    3    2", "10", "3    5", "8", "1    1    1", "1    1    1"];
                npiezas = ejercicio2Lineas.length;
                w = (p5.width - (p5.width * 0.2)) / npiezas;
                h = (p5.height - (p5.height * 0.2)) / npiezas;
                p5.textAlign(p5.CENTER, p5.CENTER);
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {

                        casillas.push(new Casilla(p5, (w * j) + (p5.width * 0.2), (h * i) + (p5.height * 0.2), ejercicio2Lineas[i][j], npiezas));

                    }
                }
                if (tInicio2 === null) {
                    let d = new Date();
                    tInicio2 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                }
                update.bind(this);
                u = setInterval(update, 20);
                break;

        }
        p5.imageMode(p5.CENTER);
    }


    const draw = (p5) => {
        p5.background(255);
        switch (pantalla) {
            case 0:
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].show();

                }
                for (let i = 0; i < instruccionesHorizontal.length; i++) {
                    p5.fill(24, 195, 200);
                    p5.rect((w * i) + (p5.width * 0.2), 0, w, h + (h * 0.2));
                    p5.fill(255);
                    p5.text(instruccionesHorizontal[i], ((w * i) + ((p5.width * 0.2) + ((p5.width * 0.08)))), (p5.height * 0.2) / 2);
                    p5.fill(24, 195, 200);
                    p5.rect(0, (h * i) + (p5.height * 0.2), w + (w * 0.2), h);
                    p5.fill(255);
                    p5.text(instruccionesVertical[i], ((p5.width * 0.2) / 2), (h * i) + ((p5.height * 0.2) + ((p5.height * 0.08))));

                }

                break;
            case 1:
                p5.fill(0);
                p5.fill(24, 195, 200);
                p5.textSize(p5.width * 0.04);
                p5.text("Ya completaste el primer nonograma con éxito,", p5.width / 2, p5.height * 0.68);
                p5.text("ahora ahora retate a hacer uno con más fichas.", p5.width / 2, p5.height * 0.73);

                p5.fill(14, 231, 136);
                p5.textSize(p5.width * 0.06);
                p5.text("Has click aquí para continuar.", p5.width / 2, p5.height * 0.8);




                break;
            case 2:
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].show();

                }
                for (let i = 0; i < instruccionesHorizontal.length; i++) {
                    p5.textSize(p5.width * 0.03);
                    p5.fill(24, 195, 200);
                    p5.rect((w * i) + (p5.width * 0.2), 0, w, h + (h));
                    p5.fill(255);
                    p5.text(instruccionesHorizontal[i], ((w * i) + ((p5.width * 0.24))), (p5.height * 0.18) / 2);
                    p5.fill(24, 195, 200);
                    p5.rect(0, (h * i) + (p5.height * 0.2), w + w, h);
                    p5.fill(255);
                    p5.text(instruccionesVertical[i], ((p5.width * 0.165) / 2), (h * i) + ((p5.height * 0.17) + ((p5.height * 0.08))));

                }
                break;
            case 3:
                p5.fill(0);
                p5.fill(24, 195, 200);
                p5.textSize(p5.width * 0.04);
                p5.text("Has completado el ejercicio", p5.width / 2, p5.height * 0.68);
                p5.text("¡Muchas gracias!", p5.width / 2, p5.height * 0.73);


                /*if (sessionStorage.getItem("Ejercicio1completo") === "true" && sessionStorage.getItem("Ejercicio2completo") === "true" && sessionStorage.getItem("Ejercicio3completo") === "true" && sessionStorage.getItem("Ejercicio4completo") === "true") {
                    var timeBtn = document.getElementById("time__btn");
                    var link;
                    timeBtn.textContent = "Continuar";
                    link = document.getElementById("btnLink");
                    link.setAttribute('href', "Experiencia.html");
                } else {
                    var timeBtn = document.getElementById("time__btn");
                    var link;
                    timeBtn.textContent = "Continuar";
                    link = document.getElementById("btnLink");
                    link.setAttribute('href', "Ejercicios.html");
                }*/


                break;

        }

    }

    const mousePressed = (p5) => {
        switch (pantalla) {
            case 0:
                if (tInicio1 === null) {
                    let d = new Date();
                    tInicio1 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                }
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].press(p5.mouseX, p5.mouseY);
                }

                break;
            case 1:
                
                break;
            case 2:
                for (let i = 0; i < casillas.length; i++) {
                    casillas[i].press(p5.mouseX, p5.mouseY);
                }
                break;


        }
    }

    const update = () => {
        let validadorC = 0;
        for (let i = 0; i < casillas.length; i++) {
            if (casillas[i].getCorrecto() === true && casillas[i].getActive() === true) {
                validadorC++;
            }

        }
        if (validadorC === totalVerticales) {
            switch (pantalla) {
                case 0:
                    erroresEjercio1 = Casilla.errores;
                    Casilla.errores = 0;
                    if (tInicio1 != null) {
                        let d = new Date();
                        tFinal1 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                        console.log(tInicio1);
                        console.log(tFinal1);
                    }

                    break;
                case 2:
                    erroresEjercio2 = Casilla.errores;
                    Casilla.errores = 0;
                    sessionStorage.setItem("erroresEvaluacion1", erroresEjercio1);
                    sessionStorage.setItem("erroresEvaluacion2", erroresEjercio2);
                    if (tInicio2 != null) {
                        let d = new Date();
                        tFinal2 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                        console.log(tInicio2);
                        console.log(tFinal2);
                    }
                    break;

            }
            pantalla++;
            clearInterval(u);

        }
    }

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth * 0.25, p5.windowWidth * 0.25);
        w = (p5.width - (p5.width * 0.2)) / npiezas;
        h = (p5.height - (p5.height * 0.2)) / npiezas;
        let x = 0;
        let y = 0;
        for (let i = 0; i < casillas.length; i++) {
            if (x > npiezas - 1) {
                x = 0;
                y++;
            }
            casillas[i].responsiveApp((w * x) + (p5.width * 0.2), (h * y) + (p5.height * 0.2));
            x++;
        }
    }


    return (
        <>
            <Sketch setup={setup} draw={draw} mousePressed={mousePressed} windowResized={windowResized} />
        </>
    )
}

export default React.memo(Nonogram);