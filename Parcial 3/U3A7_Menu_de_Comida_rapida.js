function fincionProcesar(){
    let varcadena = "Valores de Controles:";

    let varForm = document.forms["frmControles"];

    let varRadio = varForm.elements["radioOpciones"]; varcadena += "\n - Radio:" + varRadio.value;
    let varCheck = varForm.elements["checkOpciones"]; varcadena += "\n - Radio:" + varRadio.value;
    let varSelect = varForm.elements["selecBasic"]; varcadena += "\n - Radio:" + varRadio.value;
    let varMultiple = varForm.elements["selectMultiple"]; varcadena += "\n - Radio:" + varRadio.value;

    let varFile = varForm.elements["varFile"]; varcadena += "\n - Archivo: " + varFile.value;
    let varData = varForm.elements["varData"]; varcadena += "\n - Archivo: " + varFile.value;
    let varColor = varForm.elements["varColor"]; varcadena += "\n - Archivo: " + varFile.value;
    let varTime = varForm.elements["varTime"]; varcadena += "\n - Archivo: " + varFile.value;
    let varWeek = varForm.elements["varWeek"]; varcadena += "\n - Archivo: " + varFile.value;
    let varMonth = varForm.elements["varMonth"]; varcadena += "\n - Archivo: " + varFile.value;

}