import { renderOptions } from "./components/ConfigCalculator";
import { renderClenButton } from "./components/ControlPanel";
import { handleSubmit } from "./components/FormSubmit";
import { renderBtnNumeric } from "./components/TableNumeric";
import { renderSimbolBasic } from "./components/TableSimbol";
import { BTN_NUMERIC_CONFIG, OPERATION_BUTTONS } from "./data/BTN_CALCULATOR";
import { BTN_CONFIG } from "./data/OPTION_CONFIG";
import { DATA_PANEL_CONTROL } from "./data/panel_control/DATA";

const formulario = document.querySelector('#formulario');

renderClenButton(DATA_PANEL_CONTROL)
renderOptions(BTN_CONFIG)
renderSimbolBasic(OPERATION_BUTTONS)
renderBtnNumeric(BTN_NUMERIC_CONFIG)

formulario?.addEventListener('submit', handleSubmit)