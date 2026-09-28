document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENU MOBILE
    ========================= */

    const menuToggle = document.getElementById("menu-toggle");
    const linksMenu = document.querySelectorAll("nav a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menuToggle) {
                menuToggle.checked = false;
            }

        });

    });


    /* =========================
       FORMULÁRIO DE CADASTRO
    ========================= */

    const formCadastro = document.getElementById("formCadastro");

    if (formCadastro) {

        formCadastro.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const participacao = document.getElementById("participacao").value;

            if (
                nome === "" ||
                email === "" ||
                telefone === "" ||
                participacao === ""
            ) {

                mostrarMensagem(
                    "Preencha todos os campos obrigatórios.",
                    "erro"
                );

                return;
            }

            const cadastro = {
                nome: nome,
                email: email,
                telefone: telefone,
                participacao: participacao
            };

            localStorage.setItem(
                "cadastroVoluntario",
                JSON.stringify(cadastro)
            );

            mostrarMensagem(
                "Cadastro realizado com sucesso!",
                "sucesso"
            );

            formCadastro.reset();

        });

    }


    /* =========================
       FORMULÁRIO DE CONTATO
    ========================= */

    const formContato = document.getElementById("formContato");

    if (formContato) {

        formContato.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const assunto = document.getElementById("assunto").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (
                nome === "" ||
                email === "" ||
                assunto === "" ||
                mensagem === ""
            ) {

                mostrarMensagem(
                    "Preencha todos os campos antes de enviar.",
                    "erro"
                );

                return;
            }

            const contato = {
                nome: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem
            };

            localStorage.setItem(
                "mensagemContato",
                JSON.stringify(contato)
            );

            mostrarMensagem(
                "Mensagem enviada com sucesso!",
                "sucesso"
            );

            formContato.reset();

        });

    }


    /* =========================
       FUNÇÃO DE FEEDBACK
    ========================= */

    function mostrarMensagem(texto, tipo) {

        let caixa = document.getElementById("mensagem-feedback");

        if (!caixa) {

            caixa = document.createElement("div");

            caixa.id = "mensagem-feedback";

            const formulario =
                formCadastro || formContato;

            if (formulario) {
                formulario.insertAdjacentElement(
                    "afterend",
                    caixa
                );
            }

        }

        if (tipo === "erro") {

            caixa.className = "toast toast-erro";

        } else {

            caixa.className = "toast";

        }

        caixa.textContent = texto;

        setTimeout(function () {

            caixa.textContent = "";
            caixa.className = "";

        }, 4000);

    }


    /* =========================
       RECUPERAR CADASTRO SALVO
    ========================= */

    const cadastroSalvo =
        localStorage.getItem("cadastroVoluntario");

    if (cadastroSalvo) {

        const dados =
            JSON.parse(cadastroSalvo);

        console.log(
            "Último cadastro salvo:",
            dados
        );

    }

});
const botaoContraste = document.getElementById("contraste-btn");

if (botaoContraste) {
    botaoContraste.addEventListener("click", function () {

        document.body.classList.toggle("alto-contraste");

        const ativado =
            document.body.classList.contains("alto-contraste");

        botaoContraste.setAttribute(
            "aria-pressed",
            ativado
        );

        localStorage.setItem(
            "altoContraste",
            ativado
        );
    });

    const contrasteSalvo =
        localStorage.getItem("altoContraste");

    if (contrasteSalvo === "true") {
        document.body.classList.add("alto-contraste");
        botaoContraste.setAttribute("aria-pressed", "true");
    }
}   