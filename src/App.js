import './App.scss';
import {Step, Stepper} from "./style-guide";
import React from "react";

function App() {
  return (
    <div className="viewport-container px-4 py-2 w-full h-full flex-center flex">
      <Stepper>
        <Step title="Datos Generales" subTitle="Ingrese los datos solicitados">
          <div>
            <h1>Contenido del Step Datos Generales</h1>
          </div>
        </Step>
        <Step title="Forma de Pago" subTitle="Seleccione forma de pago">
          <h1>Contenido del Step Forma de Pago</h1>
        </Step>
        <Step title="Resumen" subTitle="Verifique los datos de su solicitud">
          <h1>Contenido del Step Resumen</h1>
        </Step>
      </Stepper>
    </div>
  );
}

export default App;
