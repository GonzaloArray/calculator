import { handleSubmit } from "./components/FormSubmit";
import { renderBtnNumeric } from "./components/TableNumeric";
import { renderSimbolBasic } from "./components/TableSimbol";
import { BTN_NUMERIC_CONFIG, OPERATION_BUTTONS } from "./data/BTN_CALCULATOR";

const formulario = document.querySelector('#formulario');

renderSimbolBasic(OPERATION_BUTTONS)
renderBtnNumeric(BTN_NUMERIC_CONFIG)

formulario?.addEventListener('submit', handleSubmit)