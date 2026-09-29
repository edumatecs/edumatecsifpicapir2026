const URL_PLANILHA_CAMISA = "https://script.google.com/macros/s/AKfycbw5_L3vF3RNFY4zcm4OoNLB5d48XSYAdUYqow7ftWws5mdfUCHyWfnMbfntBpDHKT8/exec";
const URL_PLANILHA_INSCRICAO = "https://script.google.com/macros/s/AKfycbzq_6F00yr_3GmCrPGUxbaDTgZyLKx1OtDeT7Eh7r6Tw-rGLNAH42_so3HUG6HkiEBp/exec";

function mudarAba(abaId, elementoBotao) {
    document.getElementById('aba-inicio').style.display = 'none';
    document.getElementById('aba-mural').style.display = 'none';
    document.querySelectorAll('.menu-abas button').forEach(btn => btn.classList.remove('ativo'));
    document.getElementById('aba-' + abaId).style.display = 'block';
    elementoBotao.classList.add('ativo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let slideIndex = 0;
let autoSlideTimer = null;
function mostrarSlideAtual(n) {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    slideIndex = (n >= slides.length) ? 0 : (n < 0 ? slides.length - 1 : n);
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[slideIndex].style.display = "block";
}
function mudarSlide(n) { mostrarSlideAtual(slideIndex + n); resetarAutoSlide(); }

function iniciarAutoSlide() {
    if (!autoSlideTimer) {
        autoSlideTimer = setInterval(() => { mudarSlide(1); }, 4000);
    }
}
function pararAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
}
function resetarAutoSlide() {
    pararAutoSlide();
    iniciarAutoSlide();
}
mostrarSlideAtual(0);

let slideIndexDel = 0;
let autoSlideDelTimer = null;
function mostrarSlideDelAtual(n) {
    let slides = document.getElementsByClassName("slide-del");
    if (slides.length === 0) return;
    slideIndexDel = (n >= slides.length) ? 0 : (n < 0 ? slides.length - 1 : n);
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[slideIndexDel].style.display = "block";
}
function mudarSlideDel(n) { mostrarSlideDelAtual(slideIndexDel + n); resetarAutoSlideDel(); }

function iniciarAutoSlideDel() {
    if (!autoSlideDelTimer) {
        autoSlideDelTimer = setInterval(() => { mudarSlideDel(1); }, 4000);
    }
}
function pararAutoSlideDel() {
    clearInterval(autoSlideDelTimer);
    autoSlideDelTimer = null;
}
function resetarAutoSlideDel() {
    pararAutoSlideDel();
    iniciarAutoSlideDel();
}
mostrarSlideDelAtual(0);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target.id === 'secao-turismo') {
            if (entry.isIntersecting) {
                iniciarAutoSlide();
            } else {
                pararAutoSlide();
                slideIndex = 0;
                mostrarSlideAtual(0);
            }
        }
        if (entry.target.id === 'secao-delivery') {
            if (entry.isIntersecting) {
                iniciarAutoSlideDel();
            } else {
                pararAutoSlideDel();
                slideIndexDel = 0;
                mostrarSlideDelAtual(0);
            }
        }
    });
}, { threshold: 0.2 });

observer.observe(document.getElementById('secao-turismo'));
observer.observe(document.getElementById('secao-delivery'));

function mascaraCPF(i) {
    let v = i.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    i.value = v;
}

function mascaraTelefone(i) {
    let v = i.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    i.value = v;
}

function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => alert('Copiado: ' + texto));
}

function toggleNecessidade() {
    const sim = document.querySelector('input[name="necessidade"]:checked')?.value === 'Sim';
    document.getElementById('box-desc-necessidade').style.display = sim ? 'flex' : 'none';
}

function toggleTamanhoOutro() {
    const outro = document.querySelector('input[name="tamanho"]:checked')?.value === 'Outro';
    document.getElementById('box-tamanho-outro').style.display = outro ? 'flex' : 'none';
}

function toggleSubmissao() {
    const sim = document.querySelector('input[name="submissao"]:checked')?.value === 'Sim';
    document.getElementById('box-gts-lista').style.display = sim ? 'block' : 'none';
}

function abrirModal() { document.getElementById('modalPedido').style.display = 'block'; document.body.style.overflow = 'hidden'; }
function fecharModal() { document.getElementById('modalPedido').style.display = 'none'; document.body.style.overflow = 'auto'; }
function abrirModalInscricao() { document.getElementById('modalInscricao').style.display = 'block'; document.body.style.overflow = 'hidden'; }
function fecharModalInscricao() { document.getElementById('modalInscricao').style.display = 'none'; document.body.style.overflow = 'auto'; }

function alternarPagamento() {
    const val = document.getElementById('forma_pagamento').value;
    document.getElementById('area-pix').style.display = (val === 'pix') ? 'block' : 'none';
    document.getElementById('area-comprovante').style.display = (val === 'pix') ? 'block' : 'none';
    document.getElementById('comprovante').required = (val === 'pix');
}

function copiarPix() {
    navigator.clipboard.writeText(document.getElementById('chavePixTexto').innerText).then(() => alert('Chave Pix copiada!'));
}

async function enviarPedido(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    btn.innerText = "Enviando...";
    btn.disabled = true;

    const tamanhoRadio = document.querySelector('input[name="tamanho"]:checked');
    const tamanhoFinal = tamanhoRadio?.value === "Outro" ? document.getElementById('tamanho_outro').value.trim() : tamanhoRadio?.value;
    const file = document.getElementById('comprovante').files[0];
    let base64Data = "", fileName = "", mimeType = "";

    if (file) {
        fileName = file.name; mimeType = file.type;
        base64Data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
    }

    const payload = {
        nome: document.getElementById('nome_completo').value.trim(),
        tamanho: tamanhoFinal,
        telefone: document.getElementById('telefone').value.trim(),
        email: document.getElementById('gmail_user').value.trim() + "@gmail.com",
        forma_pagamento: document.getElementById('forma_pagamento').value,
        fileName, mimeType, fileData: base64Data
    };

    try {
        await fetch(URL_PLANILHA_CAMISA, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
        document.getElementById('box-formulario').style.display = 'none';
        document.getElementById('box-sucesso').style.display = 'block';
    } catch (err) {
        alert("Erro ao enviar pedido.");
    } finally {
        btn.innerText = "Finalizar Pedido";
        btn.disabled = false;
    }
}

async function enviarInscricao(event) {
    event.preventDefault();
    const btn = document.getElementById('btn-submit-insc');
    btn.innerText = "Enviando...";
    btn.disabled = true;

    const file = document.getElementById('insc_comprovante').files[0];
    let base64Data = "", fileName = "", mimeType = "";

    if (file) {
        fileName = file.name; mimeType = file.type;
        base64Data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
    }

    const payload = {
        nome: document.getElementById('insc_nome').value.trim(),
        cpf: document.getElementById('insc_cpf').value.trim(),
        telefone: document.getElementById('insc_telefone').value.trim(),
        cidade: document.getElementById('insc_cidade').value.trim(),
        alojamento: document.querySelector('input[name="alojamento"]:checked').value,
        necessidade: document.querySelector('input[name="necessidade"]:checked').value,
        desc_necessidade: document.getElementById('desc_necessidade').value.trim() || "Nenhuma",
        submissao: document.querySelector('input[name="submissao"]:checked').value,
        oficina1: document.querySelector('input[name="oficina1"]:checked')?.value || "Não escolheu",
        oficina2: document.querySelector('input[name="oficina2"]:checked')?.value || "Não escolheu",
        oficina3: document.querySelector('input[name="oficina3"]:checked')?.value || "Não escolheu",
        minicurso: document.querySelector('input[name="minicurso"]:checked')?.value || "Não escolheu",
        fileName, mimeType, fileData: base64Data
    };

    try {
        await fetch(URL_PLANILHA_INSCRICAO, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
        document.getElementById('box-formulario-inscricao').style.display = 'none';
        document.getElementById('box-sucesso-inscricao').style.display = 'block';
    } catch (err) {
        alert("Erro ao enviar inscrição.");
    } finally {
        btn.innerText = "Finalizar Inscrição";
        btn.disabled = false;
    }
}