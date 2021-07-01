function Enviar() {
    nome = document.getElementById("nomeid");
    email = document.getElementById("emailid");
    tel = document.getElementById("foneid");
    endereco = document.getElementById("enderecoid");
    bairro = document.getElementById("bairroid");
    cidade = document.getElementById("cidadeid");
    CEP = document.getElementById("cepid");

    if (nome.value != "") {
        if (email.value != "") {
            if (tel.value != "") {
                if (endereco.value != "") {
                    if (nome.value != "") {
                        if (bairro.value != "") {
                            if (cidade.value != "") {
                                if (CEP.value != "") {
                                    alert ('Obrigado ' +nome.value + '! Os seus dados foram salvos e estarão seguros conosco, pois não compartilhamos informações com terceiros :) ')
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}