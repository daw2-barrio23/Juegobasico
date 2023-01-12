// Import our custom CSS
//import '/scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './js/panel';
import { ModeloPieza } from './js/ModeloPieza.js';

panel.pintaPanel()

panel.crearNuevaPieza()

panel.insertarPieza()

panel.pintaPanel()

panel.controlTeclas()

panel.iniciarMovimiento()
console.log("esto funciona")