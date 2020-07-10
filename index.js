function F_calcular(campo,campoh) {
    document.getElementById(campoh).value = document.getElementById(campo).value;

    if ( document.getElementById(campoh).value.substr(0,1) == "=")
        if ( document.getElementById(campoh).value.substr(3,1) == "+")
            document.getElementById(campo).value = parseFloat(document.getElementById(document.getElementById(campoh).value.substr(1,2)).value) + parseFloat(document.getElementById(document.getElementById(campoh).value.substr(4,2)).value);
        else if ( document.getElementById(campoh).value.substr(3,1) == "-")
            document.getElementById(campo).value = parseFloat(document.getElementById(document.getElementById(campoh).value.substr(1,2)).value) - parseFloat(document.getElementById(document.getElementById(campoh).value.substr(4,2)).value);
}
