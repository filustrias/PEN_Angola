// Componentes interativos da página RE-AIM (reaim.qmd).
(function () {
  const formato = (n) => n.toLocaleString("pt-PT", { maximumFractionDigits: 1 });

  // Simulador: sequência da Figura 1.4 do guia de PRISM e RE-AIM.
  const FACTORES = [
    { id: "unidades", nome: "Adopção: unidades", pergunta: "Das unidades convidadas, quantas começam?" },
    { id: "profissionais", nome: "Adopção: profissionais", pergunta: "Nessas unidades, quantos profissionais usam o protocolo?" },
    { id: "alcance", nome: "Alcance", pergunta: "Das pessoas elegíveis, quantas recebem o cuidado?" },
    { id: "implementacao", nome: "Implementação", pergunta: "Quantas vezes o cuidado é feito como previsto?" },
    { id: "efectividade", nome: "Efectividade", pergunta: "De quem recebe o cuidado, quantos beneficiam?" },
    { id: "manutencao", nome: "Manutenção", pergunta: "Quantos mantêm a oferta e o benefício ao longo do tempo?" },
  ];

  const CENARIOS = {
    guia: { unidades: 50, profissionais: 50, alcance: 50, implementacao: 50, efectividade: 50, manutencao: 50 },
    efectividade: { unidades: 50, profissionais: 50, alcance: 50, implementacao: 50, efectividade: 100, manutencao: 50 },
    setenta: { unidades: 70, profissionais: 70, alcance: 70, implementacao: 70, efectividade: 70, manutencao: 70 },
    ideal: { unidades: 100, profissionais: 100, alcance: 100, implementacao: 100, efectividade: 100, manutencao: 100 },
  };

  function iniciarSimulador() {
    const raiz = document.getElementById("ra-sim");
    if (!raiz) return;
    const linhas = document.getElementById("ra-linhas");
    const valores = { ...CENARIOS.guia };

    linhas.innerHTML = FACTORES.map((f) => `
      <div class="ra-linha">
        <label for="ra-${f.id}"><strong>${f.nome}</strong><span>${f.pergunta}</span></label>
        <div class="ra-controlo">
          <input type="range" id="ra-${f.id}" data-factor="${f.id}" min="0" max="100" step="5">
          <output for="ra-${f.id}" data-valor="${f.id}"></output>
        </div>
        <div class="ra-resta">
          <span class="ra-resta-texto">Resta <b data-resta="${f.id}"></b></span>
          <i><em data-barra="${f.id}"></em></i>
        </div>
      </div>`).join("");

    function frase(impacto) {
      const pessoas = Math.round(impacto * 10);
      if (impacto === 0) return "Em cada 1000 pessoas elegíveis, nenhuma chega ao fim da cascata.";
      if (pessoas < 1) return "Em cada 1000 pessoas elegíveis, menos de uma chega ao fim da cascata com benefício duradouro.";
      if (pessoas === 1) return "Em cada 1000 pessoas elegíveis, cerca de uma chega ao fim da cascata com benefício duradouro.";
      return `Em cada 1000 pessoas elegíveis, cerca de ${pessoas} chegam ao fim da cascata com benefício duradouro.`;
    }

    function leitura() {
      const lista = FACTORES.map((f) => ({ nome: f.nome, valor: valores[f.id] }));
      const menor = lista.reduce((a, b) => (b.valor < a.valor ? b : a));
      if (menor.valor === 100) return "Nada se perde em nenhuma etapa. É o objectivo, raramente a realidade.";
      if (menor.valor === 0) return `Com ${menor.nome} em 0%, o impacto é zero, por melhores que sejam os outros factores.`;
      const novo = Math.min(menor.valor + 10, 100);
      const ganho = formato(novo / menor.valor);
      if (lista.every((f) => f.valor === menor.valor)) {
        return `Todos os factores estão em ${menor.valor}%. Subir qualquer um para ${novo}% multiplica o impacto por ${ganho}.`;
      }
      return `O factor mais baixo é ${menor.nome} (${menor.valor}%). Subi-lo para ${novo}% multiplica o impacto por ${ganho}.`;
    }

    function desenhar() {
      let restante = 100;
      FACTORES.forEach((f) => {
        restante *= valores[f.id] / 100;
        raiz.querySelector(`[data-factor="${f.id}"]`).value = valores[f.id];
        raiz.querySelector(`[data-valor="${f.id}"]`).textContent = `${valores[f.id]}%`;
        raiz.querySelector(`[data-resta="${f.id}"]`).textContent = `${formato(restante)}%`;
        raiz.querySelector(`[data-barra="${f.id}"]`).style.width = `${restante}%`;
      });
      document.getElementById("ra-valor").textContent = `${formato(restante)}%`;
      document.getElementById("ra-frase").textContent = frase(restante);
      document.getElementById("ra-leitura").textContent = leitura();

      const nomes = Object.keys(CENARIOS);
      raiz.querySelectorAll("[data-cenario]").forEach((b) => {
        const c = CENARIOS[b.dataset.cenario];
        b.setAttribute("aria-pressed", String(FACTORES.every((f) => c[f.id] === valores[f.id])));
      });
      return nomes;
    }

    raiz.addEventListener("input", (e) => {
      if (!e.target.dataset.factor) return;
      valores[e.target.dataset.factor] = Number(e.target.value);
      desenhar();
    });
    raiz.querySelectorAll("[data-cenario]").forEach((b) => {
      b.addEventListener("click", () => {
        Object.assign(valores, CENARIOS[b.dataset.cenario]);
        desenhar();
      });
    });

    desenhar();
  }

  // Teste: que dimensão está a ser medida?
  const DIMENSOES = ["Alcance", "Efectividade", "Adopção", "Implementação", "Manutenção"];
  const PERGUNTAS = [
    {
      texto: "Das 12 unidades convidadas na Huíla, 8 começaram a oferecer a consulta.",
      certa: "Adopção",
      porque: "O denominador são unidades, não pessoas.",
    },
    {
      texto: "Dos 400 adultos atendidos em Março, 240 tiveram a tensão arterial medida.",
      certa: "Alcance",
      porque: "O denominador são pessoas elegíveis, e a pergunta é se receberam a acção.",
    },
    {
      texto: "Das pessoas em tratamento há pelo menos 3 meses, 42% têm a tensão abaixo de 140/90 mmHg.",
      certa: "Efectividade",
      porque: "A pergunta é sobre o resultado alcançado nas pessoas.",
    },
    {
      texto: "Em 7 de cada 10 consultas com tensão alta, a enfermeira seguiu o passo previsto no fluxograma.",
      certa: "Implementação",
      porque: "Mede a fidelidade ao que estava previsto, não o resultado na pessoa.",
    },
    {
      texto: "Dois anos depois do fim do apoio externo, 6 das 8 unidades mantêm a consulta na rotina.",
      certa: "Manutenção",
      porque: "Mede se a oferta continua depois do fim do projecto.",
    },
    {
      texto: "Dos 20 enfermeiros formados, 9 usam o fluxograma nas consultas.",
      certa: "Adopção",
      porque: "O denominador são profissionais: também é adopção, ainda que o número pareça de pessoas.",
    },
  ];

  function iniciarTeste() {
    const raiz = document.getElementById("ra-teste");
    if (!raiz) return;

    raiz.innerHTML = PERGUNTAS.map((p, i) => `
      <div class="ra-pergunta" data-pergunta="${i}">
        <p>${p.texto}</p>
        <div class="ra-opcoes" role="group" aria-label="Escolha a dimensão">
          ${DIMENSOES.map((d) => `<button type="button" data-resposta="${d}">${d}</button>`).join("")}
        </div>
        <p class="ra-resposta" aria-live="polite"></p>
      </div>`).join("");

    raiz.addEventListener("click", (e) => {
      const botao = e.target.closest("[data-resposta]");
      if (!botao) return;
      const bloco = botao.closest("[data-pergunta]");
      const p = PERGUNTAS[Number(bloco.dataset.pergunta)];
      const acertou = botao.dataset.resposta === p.certa;
      bloco.querySelectorAll("[data-resposta]").forEach((b) => {
        b.removeAttribute("data-estado");
        b.setAttribute("aria-pressed", "false");
      });
      botao.dataset.estado = acertou ? "certa" : "errada";
      botao.setAttribute("aria-pressed", "true");
      bloco.querySelector(".ra-resposta").textContent = acertou
        ? `Certo. ${p.porque}`
        : `Ainda não. Tente de novo, olhando para o que está no denominador.`;
    });
  }

  // Quem ficou de fora: 60 de 100 pessoas alcançadas em ambos os cenários.
  const GRUPOS = ["Mulheres, zona urbana", "Homens, zona urbana", "Mulheres, zona rural", "Homens, zona rural"];
  const DISTRIBUICOES = {
    representativo: {
      alcancados: [15, 15, 15, 15],
      leitura: "Alcance de 60%, distribuído por igual: em cada grupo, 3 em cada 5 pessoas foram alcançadas.",
    },
    concentrado: {
      alcancados: [25, 15, 15, 5],
      leitura: "O alcance continua a ser de 60%. Mas todas as mulheres da zona urbana foram alcançadas, e apenas 1 em cada 5 homens da zona rural.",
    },
  };

  function iniciarPessoas() {
    const raiz = document.getElementById("ra-pessoas");
    if (!raiz) return;

    function desenhar(nome) {
      const d = DISTRIBUICOES[nome];
      document.getElementById("ra-grupos").innerHTML = GRUPOS.map((g, i) => {
        const pontos = Array.from({ length: 25 }, (_, k) =>
          `<span class="ra-ponto${k < d.alcancados[i] ? " ra-ponto-sim" : ""}"></span>`).join("");
        return `<div class="ra-grupo">
          <p><strong>${g}</strong><span>${d.alcancados[i]} de 25</span></p>
          <div class="ra-pontos" role="img" aria-label="${g}: ${d.alcancados[i]} de 25 pessoas alcançadas">${pontos}</div>
        </div>`;
      }).join("");
      document.getElementById("ra-pessoas-leitura").textContent = d.leitura;
      raiz.querySelectorAll("[data-distribuicao]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b.dataset.distribuicao === nome));
      });
    }

    raiz.querySelectorAll("[data-distribuicao]").forEach((b) => {
      b.addEventListener("click", () => desenhar(b.dataset.distribuicao));
    });
    desenhar("representativo");
  }

  iniciarSimulador();
  iniciarTeste();
  iniciarPessoas();
})();
