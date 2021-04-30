//instructions
import descInstru from '../assets/img/Instru/Inst_nono.png';
import abstInstru from '../assets/img/Instru/Inst_nono.png';
import geneInstru from '../assets/img/Instru/Inst_nono.png';
import depuInstru from '../assets/img/Instru/Inst_nono.png';

//covers
//descomposition
import descCover1 from '../assets/img/covers/desc/desc1.svg';
import descCover2 from '../assets/img/covers/desc/desc2.svg';
import descCover3 from '../assets/img/covers/desc/desc3.svg';
import descCover4 from '../assets/img/covers/desc/desc4.svg';
import descCover5 from '../assets/img/covers/desc/desc5.svg';

//abstraction
import abstCover1 from '../assets/img/covers/abst/abst1.svg';
import abstCover2 from '../assets/img/covers/abst/abst2.svg';
import abstCover3 from '../assets/img/covers/abst/abst3.svg';
import abstCover4 from '../assets/img/covers/abst/abst4.svg';
import abstCover5 from '../assets/img/covers/abst/abst5.svg';

//generalization
import geneCover1 from '../assets/img/covers/gene/gene1.svg';
import geneCover2 from '../assets/img/covers/gene/gene2.svg';
import geneCover3 from '../assets/img/covers/gene/gene2.svg';
import geneCover4 from '../assets/img/covers/gene/gene4.svg';
import geneCover5 from '../assets/img/covers/gene/gene5.svg';

//depuration
import depuCover1 from '../assets/img/covers/depu/depu1.svg';
import depuCover2 from '../assets/img/covers/depu/depu2.svg';
import depuCover3 from '../assets/img/covers/depu/depu3.svg';
import depuCover4 from '../assets/img/covers/depu/depu4.svg';
import depuCover5 from '../assets/img/covers/depu/depu5.svg';


export const descomp = [
    {
        title: 'Geometry Draw',
        subtitle: '¡Cuidado con repetir!',
        description: 'En el menor tiempo posible logra pintar todos las figuras, pero cuidado con repetir',
        instru: 'Mueve el cursor para pasar por cada una de las figuras y pintarlas todas, pero CUIDADO, en cuanto pases con el cursor dos veces por una misma figura, el ejercicio se reicniciará. Piensa antes de dibujar cual sería el camino más adecuado',
        instruImg: descInstru,
        cover: descCover1,
    },
    {
        title: 'Crea la Figura',
        cover: descCover2,
    },
    {
        title: 'Tablas',
        cover: descCover3,
    },
    {
        title: 'Bum Bum Joppy',
        cover: descCover4,
    },
    {
        title: 'Joppy Words',
        cover: descCover5,
    },
];

export const abstra = [
    {
        title: 'Joppy Color',
        subtitle: '¡Alcanza la maxíma puntuación!',
        description: 'Aquí deberas despejar tantas filas y columnas como sea posible utilizando el menor número de movimientos posible.',
        instru: 'Mueve las fichas de colores y en cuanto juntes 3 iguales, estas desaparecerán dándote puntos y moviendo las demás. Intenta conseguir la máxima puntuación posible (entre más fichas iguales juntes, mayor será tu puntuación)',
        instruImg: abstInstru,
        cover: abstCover1,
    },
    {
        title: 'Secuencias',
        cover: abstCover2,
    },
    {
        title: 'Juguemos con Letras',
        cover: abstCover3,
    },
    {
        title: 'Math Race',
        cover: abstCover4,
    },
    {
        title: 'Encuentra a Joppy',
        cover: abstCover5,
    },
];

export const general = [
    {
        title: '¿Dónde esta mi zanahoria?',
        subtitle: '¡Ayuda a Joppy a llegar a su zanahoria!',
        description: 'En este juego le indicarás a el conejo Joppy que debe hacer para llegar a su zanahoria',
        instru: 'Los botones en la parte inferior serán las herramientas para que le indiques a Joppy hacía donde ir o que hacer. Intenta ser lo más especifico posible en las instrucciones para que llegue más rápido.',
        instruImg: geneInstru,
        cover: geneCover1,
    },
    {
        title: 'Cocinemos Juntos',
        cover: geneCover2,
    },
    {
        title: 'Joppy, Recuerda',
        cover: geneCover3,
    },
    {
        title: 'Swap',
        cover: geneCover4,
    },
    {
        title: 'Knight’s tour',
        cover: geneCover5,
    },
];

export const depura = [
    {
        title: 'Joppygrama',
        subtitle: '¡A construir!',
        description: 'Un nonograma es un rompecabezas japonés en el que coloreas las celdas correctas, de acuerdo a los números en su parte superior e izquierda, con el fin de revelar una imagen oculta',
        instru: 'Los números en su parte superior e izquierda, indican el número de casillas consecutivas que se tienen que rellenar. Intenta cometer la MENOR CANTIDAD de errores posible.',
        instruImg: depuInstru,
        cover: depuCover1,
    },
    {
        title: 'Bakuro',
        cover: depuCover2,
    },
    {
        title: 'Koduppy',
        cover: depuCover3,
    },
    {
        title: 'Decide',
        cover: depuCover4,
    },
    {
        title: 'Escalemos',
        cover: depuCover5,
    },
];

export const coverDesc = [

];