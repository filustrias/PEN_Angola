// Componentes interativos da página CFIR (cfir.qmd).
// Definições: tradução de trabalho da tabela "CFIR Constructs and Definitions" (2025-11-13).
(function () {
  const c = (nome, en, def, pen, sub) => ({ nome, en, def, pen, sub: sub || [] });

  const DOMINIOS = [
    {
      id: "inovacao",
      nome: "Inovação",
      en: "Innovation",
      curta: "O que se implementa",
      descricao: "A «coisa» que se implementa. No nosso caso, o PEN tal como vai funcionar nas unidades de Angola.",
      grupos: [{
        itens: [
          c("Fonte", "Innovation Source", "O grupo que desenvolveu ou patrocina visivelmente a inovação é respeitado, credível ou digno de confiança.", "Quem é visto como dono do PEN nas unidades: a OMS, o MINSA, a direcção provincial ou um projecto externo?"),
          c("Base de evidência", "Innovation Evidence-Base", "A inovação tem evidência robusta da sua efectividade.", "A evidência chega aos profissionais em termos que os convencem, ou fica em «a OMS recomenda»?"),
          c("Vantagem relativa", "Innovation Relative Advantage", "A inovação é melhor do que as alternativas ou do que a prática actual.", "O que a enfermeira e o utente ganham, face ao que fazem hoje?"),
          c("Adaptabilidade", "Innovation Adaptability", "A inovação pode ser modificada, ajustada ou refinada para responder ao contexto ou às necessidades locais.", "O que pode mudar em cada unidade sem que o PEN deixe de ser o PEN?"),
          c("Testabilidade", "Innovation Trialability", "A inovação pode ser testada em pequena escala e desfeita.", "Podemos experimentar numa unidade, com uma condição, e recuar se não correr bem?"),
          c("Complexidade", "Innovation Complexity", "A inovação é complicada, o que se pode reflectir no seu âmbito e na natureza e no número de ligações e passos.", "Quantos passos, pessoas e decisões são precisos numa consulta de hipertensão?"),
          c("Desenho", "Innovation Design", "A inovação está bem desenhada e bem apresentada, incluindo a forma como é montada, agrupada e mostrada.", "A guia está fácil de usar no ponto de cuidado, em ecrã pequeno e com pouco tempo?"),
          c("Custo", "Innovation Cost", "Os custos de aquisição e de funcionamento da inovação são comportáveis.", "Quem paga as tiras, os medicamentos e a manutenção, depois do fim do projecto?"),
        ],
      }],
    },
    {
      id: "externo",
      nome: "Contexto externo",
      en: "Outer Setting",
      curta: "O que rodeia a unidade",
      descricao: "O ambiente em que a unidade existe: município, província, país. Pode haver vários níveis.",
      grupos: [{
        itens: [
          c("Incidentes críticos", "Critical Incidents", "Acontecimentos de grande escala ou inesperados perturbam a implementação ou a oferta da inovação.", "O que acontece à consulta de crónicos num surto de cólera ou numa greve?"),
          c("Atitudes locais", "Local Attitudes", "Valores socioculturais e crenças levam o contexto externo a apoiar a implementação ou a oferta da inovação.", "Como a comunidade e os líderes locais vêem a hipertensão? É doença, «nervos» ou coisa da idade?"),
          c("Condições locais", "Local Conditions", "Condições económicas, ambientais, políticas ou tecnológicas permitem que o contexto externo apoie a implementação ou a oferta da inovação.", "Estradas, chuvas, energia, rede de telemóvel e custo do transporte permitem voltar à consulta?"),
          c("Parcerias e ligações", "Partnerships & Connections", "A unidade está ligada em rede a entidades externas, incluindo redes de referência, ligações académicas e organizações profissionais.", "Para onde vai quem precisa de referência? Há ligação com universidades e ordens profissionais?"),
          c("Políticas e leis", "Policies & Laws", "Legislação, regulamentos, orientações de grupos profissionais ou padrões de acreditação apoiam a implementação ou a oferta da inovação.", "Enfermeiros e farmacêuticos podem fazer legalmente o que o protocolo lhes pede?"),
          c("Financiamento", "Financing", "Há fundos de entidades externas disponíveis para implementar ou oferecer a inovação.", "Que linha orçamental continua quando terminar o financiamento da OMS?"),
          c("Pressão externa", "External Pressure", "Pressões externas impulsionam a implementação ou a oferta da inovação.", "Que forças de fora empurram, ou travam, a atenção às doenças crónicas?", [
            c("Pressão social", "Societal Pressure", "Campanhas nos media, grupos de defesa ou movimentos sociais impulsionam a implementação ou a oferta.", "Há associações de doentes ou meios de comunicação a falar de hipertensão e diabetes?"),
            c("Pressão de mercado", "Market Pressure", "Competir com entidades semelhantes ou imitá-las impulsiona a implementação ou a oferta.", "Uma unidade ou província segue as outras quando vê que estão a avançar?"),
            c("Pressão de medição de desempenho", "Performance-Measurement Pressure", "Métricas de qualidade, comparações ou metas de serviço impulsionam a implementação ou a oferta.", "Os indicadores de doenças crónicas são pedidos e olhados por alguém acima da unidade?"),
          ]),
        ],
      }],
    },
    {
      id: "interno",
      nome: "Contexto interno",
      en: "Inner Setting",
      curta: "O que há dentro da unidade",
      descricao: "O lugar onde a inovação é oferecida: a unidade sanitária ou o serviço.",
      grupos: [
        {
          titulo: "Existem com ou sem o PEN",
          itens: [
            c("Características estruturais", "Structural Characteristics", "Os componentes de infra-estrutura apoiam o bom funcionamento da unidade.", "A unidade tem as condições básicas para funcionar bem?", [
              c("Infra-estrutura física", "Physical Infrastructure", "A disposição do espaço e outros elementos materiais apoiam o bom funcionamento da unidade.", "Onde se mede a tensão? Há privacidade e cadeira para os 5 minutos de repouso?"),
              c("Infra-estrutura de informação", "Information Technology Infrastructure", "Os sistemas de telecomunicação, registo electrónico e armazenamento, gestão, relato e análise de dados apoiam o bom funcionamento.", "Há rede, dispositivo e sistema para consultar a guia e registar no ponto de cuidado?"),
              c("Organização do trabalho", "Work Infrastructure", "A organização de tarefas e responsabilidades, entre pessoas e equipas, e o número de profissionais apoiam o bom funcionamento.", "Quem faz o quê e há gente suficiente nos dias de maior movimento?"),
            ]),
            c("Relações", "Relational Connections", "Existem relações, redes e equipas de boa qualidade, formais e informais, dentro da unidade e entre sectores.", "Enfermagem, farmácia e gestão confiam umas nas outras e resolvem problemas juntas?"),
            c("Comunicação", "Communications", "Existem boas práticas de partilha de informação, formais e informais, dentro da unidade e entre sectores.", "Como a equipa fica a saber de uma mudança na guia ou de uma falta de medicamento?"),
            c("Cultura", "Culture", "Existem valores, crenças e normas partilhados na unidade.", "O que é considerado normal e aceitável nesta equipa?", [
              c("Centrada na igualdade humana", "Human Equality-Centeredness", "Há valores e normas partilhados sobre o igual valor de todas as pessoas.", "Quem chega de longe, sem dinheiro ou sem escolaridade é tratado da mesma forma?"),
              c("Centrada no destinatário", "Recipient-Centeredness", "Há valores e normas partilhados sobre cuidar e responder às necessidades dos destinatários.", "O horário e o fluxo pensam em quem trabalha no mercado ou conduz um táxi?"),
              c("Centrada em quem oferece o cuidado", "Deliverer-Centeredness", "Há valores e normas partilhados sobre cuidar e responder às necessidades de quem oferece a inovação.", "A unidade cuida também da sobrecarga e do bem-estar da sua equipa?"),
              c("Centrada na aprendizagem", "Learning-Centeredness", "Há valores e normas partilhados sobre segurança psicológica, melhoria contínua e uso de dados na prática.", "Uma enfermeira pode dizer «não sei» ou apontar um erro sem medo?"),
            ]),
          ],
        },
        {
          titulo: "Específicos da implementação do PEN",
          itens: [
            c("Tensão para a mudança", "Tension for Change", "A situação actual é intolerável e precisa de mudar.", "A equipa sente que o cuidado actual às doenças crónicas não pode continuar assim?"),
            c("Compatibilidade", "Compatibility", "A inovação encaixa nos fluxos de trabalho, sistemas e processos.", "O protocolo cabe na consulta como ela acontece hoje, ou exige outra rotina?"),
            c("Prioridade relativa", "Relative Priority", "Implementar e oferecer a inovação é importante em comparação com outras iniciativas.", "Com vacinação, malária e saúde materna, que lugar têm as doenças crónicas?"),
            c("Sistemas de incentivos", "Incentive Systems", "Incentivos e recompensas, tangíveis ou intangíveis, ou desincentivos e penalizações, apoiam a implementação e a oferta.", "O que a enfermeira ganha ou perde por seguir o protocolo?"),
            c("Alinhamento com a missão", "Mission Alignment", "Implementar e oferecer a inovação está de acordo com o compromisso, o propósito ou os objectivos gerais da unidade.", "A equipa vê as doenças crónicas como parte do trabalho dos cuidados primários?"),
            c("Recursos disponíveis", "Available Resources", "Há recursos disponíveis para implementar e oferecer a inovação.", "O que falta para fazer hoje o que o protocolo pede?", [
              c("Fundos", "Funding", "Há fundos disponíveis para implementar e oferecer a inovação.", "A unidade tem como pagar pilhas, impressões e pequenas reparações?"),
              c("Espaço", "Space", "Há espaço físico disponível para implementar e oferecer a inovação.", "Existe uma sala para a consulta de seguimento, ou só nos dias sem outro serviço?"),
              c("Materiais e equipamento", "Materials & Equipment", "Há materiais disponíveis para implementar e oferecer a inovação.", "Há amlodipina, tiras e aparelho de tensão a funcionar, hoje, nesta unidade?"),
            ]),
            c("Acesso a conhecimento e informação", "Access to Knowledge & Information", "Há orientação ou formação acessíveis para implementar e oferecer a inovação.", "Quando surge uma dúvida na consulta, onde e a quem a enfermeira pode recorrer na hora?"),
          ],
        },
      ],
    },
    {
      id: "individuos",
      nome: "Indivíduos",
      en: "Individuals",
      curta: "Quem faz e quem recebe",
      descricao: "Os papéis e as características das pessoas envolvidas.",
      grupos: [
        {
          titulo: "Papéis",
          itens: [
            c("Líderes de alto nível", "High-level Leaders", "Pessoas com muita autoridade, incluindo decisores-chave, dirigentes ou directores.", "Quem, no MINSA e na província, pode abrir ou fechar portas ao PEN?"),
            c("Líderes intermédios", "Mid-level Leaders", "Pessoas com autoridade moderada, supervisionadas por um líder de alto nível e que supervisionam outras.", "O chefe da unidade ou o responsável municipal apoia, ignora ou trava?"),
            c("Líderes de opinião", "Opinion Leaders", "Pessoas com influência informal nas atitudes e nos comportamentos dos outros.", "A quem os colegas perguntam quando têm dúvidas, mesmo sem ser chefe?"),
            c("Facilitadores da implementação", "Implementation Facilitators", "Pessoas com conhecimento do tema que ajudam, orientam ou apoiam a implementação.", "Quem visita, orienta e apoia a equipa sem estar lá a fiscalizar?"),
            c("Responsáveis pela implementação", "Implementation Leads", "Pessoas que lideram os esforços para implementar a inovação.", "Quem responde pelo PEN em cada província e em cada unidade?"),
            c("Membros da equipa de implementação", "Implementation Team Members", "Pessoas que colaboram com os responsáveis e os apoiam, de preferência incluindo quem oferece e quem recebe a inovação.", "A equipa inclui farmacêuticos, enfermeiros, gestores e utentes?"),
            c("Outro apoio à implementação", "Other Implementation Support", "Pessoas que apoiam os responsáveis ou os membros da equipa de implementação.", "Quem ajuda nos dados, na logística e na informática?"),
            c("Quem oferece a inovação", "Innovation Deliverers", "Pessoas que oferecem a inovação, directa ou indirectamente.", "Quem mede, decide, dispensa e aconselha em cada passo do cuidado?"),
            c("Destinatários da inovação", "Innovation Recipients", "Pessoas que recebem a inovação, directa ou indirectamente.", "Quem recebe o cuidado, e quem na família e na comunidade é também afectado?"),
          ],
        },
        {
          titulo: "Características",
          itens: [
            c("Necessidade", "Need", "A pessoa tem carências de sobrevivência, bem-estar ou realização pessoal a que a implementação ou a oferta da inovação vai responder.", "O PEN resolve um problema real desta pessoa, tal como ela o sente?"),
            c("Capacidade", "Capability", "A pessoa tem competência interpessoal, conhecimentos e aptidões para desempenhar o seu papel.", "Esta pessoa sabe fazer o que se lhe pede?"),
            c("Oportunidade", "Opportunity", "A pessoa tem disponibilidade, âmbito de acção e poder para desempenhar o seu papel.", "Esta pessoa tem tempo e autorização para o fazer?"),
            c("Motivação", "Motivation", "A pessoa está empenhada em desempenhar o seu papel.", "Esta pessoa quer fazê-lo, e porquê?"),
          ],
        },
      ],
    },
    {
      id: "processo",
      nome: "Processo de implementação",
      en: "Implementation Process",
      curta: "Como se faz acontecer: atravessa todos os domínios",
      descricao: "As actividades e estratégias usadas para implementar a inovação.",
      grupos: [{
        itens: [
          c("Trabalho em equipa", "Teaming", "As pessoas juntam-se, coordenando-se e colaborando intencionalmente em tarefas interdependentes para implementar a inovação.", "Província, unidade e projecto trabalham como uma só equipa, ou em paralelo?"),
          c("Avaliar necessidades", "Assessing Needs", "As pessoas recolhem informação sobre prioridades, preferências e necessidades.", "Perguntámos antes de decidir?", [
            c("De quem oferece", "Innovation Deliverers", "Recolhem informação sobre as prioridades, preferências e necessidades de quem oferece a inovação, para orientar a implementação e a oferta.", "O que as enfermeiras dizem que mais as ajudaria na consulta?"),
            c("Dos destinatários", "Innovation Recipients", "Recolhem informação sobre as prioridades, preferências e necessidades dos destinatários, para orientar a implementação e a oferta.", "O que impede uma pessoa com hipertensão de voltar? Já lhe perguntámos?"),
          ]),
          c("Avaliar o contexto", "Assessing Context", "As pessoas recolhem informação para identificar e apreciar barreiras e facilitadores à implementação e à oferta.", "Visitámos as unidades e olhámos para o que ajuda e o que atrapalha em cada uma?"),
          c("Planear", "Planning", "As pessoas identificam papéis e responsabilidades, definem passos e marcos e fixam antecipadamente objectivos e medidas de sucesso.", "Está claro quem faz o quê, até quando e como saberemos se correu bem?"),
          c("Ajustar as estratégias", "Tailoring Strategies", "As pessoas escolhem e põem em prática estratégias que respondem às barreiras, aproveitam os facilitadores e se ajustam ao contexto.", "A estratégia responde à barreira desta unidade, ou é igual para todas?"),
          c("Envolver", "Engaging", "As pessoas atraem e encorajam a participação na implementação ou na inovação.", "Quem convidámos a participar desde o início?", [
            c("Quem oferece", "Innovation Deliverers", "Atraem e encorajam quem oferece a integrar a equipa de implementação ou a oferecer a inovação.", "Farmacêuticos e enfermeiros estão a construir as guias, ou só a recebê-las?"),
            c("Destinatários", "Innovation Recipients", "Atraem e encorajam os destinatários a integrar a equipa de implementação ou a participar na inovação.", "Algum utente opinou sobre os materiais e sobre o horário?"),
          ]),
          c("Fazer", "Doing", "As pessoas implementam em pequenos passos, testes ou ciclos de mudança, para experimentar e optimizar progressivamente a oferta.", "Qual é o menor teste que podemos fazer esta semana?"),
          c("Reflectir e avaliar", "Reflecting & Evaluating", "As pessoas recolhem e discutem informação quantitativa e qualitativa sobre o sucesso da implementação e da inovação.", "Quando a equipa se senta a olhar para os dados e a conversar sobre eles?", [
            c("Sobre a implementação", "Implementation", "Recolhem e discutem informação quantitativa e qualitativa sobre o sucesso da implementação.", "O protocolo está a ser usado? Onde e por quem não está?"),
            c("Sobre a inovação", "Innovation", "Recolhem e discutem informação quantitativa e qualitativa sobre o sucesso da inovação.", "As pessoas estão a melhorar? Quais não estão?"),
          ]),
          c("Adaptar", "Adapting", "As pessoas modificam a inovação ou a unidade, para um melhor ajuste e integração nos processos de trabalho.", "O que mudámos, porquê, e isso preservou o essencial?"),
        ],
      }],
    },
  ];

  const contar = (d) => {
    let constructos = 0, subs = 0;
    d.grupos.forEach((g) => g.itens.forEach((i) => { constructos += 1; subs += i.sub.length; }));
    return { constructos, subs };
  };
  const rotuloContagem = ({ constructos, subs }) =>
    `${constructos} constructos${subs ? `, ${subs} subconstructos` : ""}`;

  // Todas as entradas, por ordem, para navegar e procurar.
  const TODOS = [];
  DOMINIOS.forEach((d) => d.grupos.forEach((g) => g.itens.forEach((i) => {
    i.chave = `${d.id}:${TODOS.length}`;
    i.dominio = d;
    TODOS.push(i);
    i.sub.forEach((s) => {
      s.chave = `${d.id}:${TODOS.length}`;
      s.dominio = d;
      s.pai = i;
      TODOS.push(s);
    });
  })));
  const porChave = Object.fromEntries(TODOS.map((i) => [i.chave, i]));

  const normalizar = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function iniciarMapa() {
    const raiz = document.getElementById("cf-mapa-raiz");
    if (!raiz) return;
    const chips = document.getElementById("cf-chips");
    const painel = document.getElementById("cf-painel");
    const descricao = document.getElementById("cf-descricao");
    const busca = document.getElementById("cf-procurar");
    const verTudo = document.getElementById("cf-ver-tudo");
    const area = document.getElementById("cf-lista-area");
    const tudo = document.getElementById("cf-tudo");
    let dominio = DOMINIOS[0];
    let atual = TODOS[0];

    raiz.querySelectorAll(".cf-dominio").forEach((b) => {
      const d = DOMINIOS.find((x) => x.id === b.dataset.dominio);
      b.innerHTML = `<strong>${d.nome}</strong><span>${d.curta}</span><small>${rotuloContagem(contar(d))}</small>`;
    });

    const chip = (i, comDominio) =>
      `<button type="button" class="cf-chip${i.pai ? " cf-chip-sub" : ""}" data-chave="${i.chave}">${i.nome}${comDominio ? ` <em>${i.dominio.nome}</em>` : ""}</button>`;

    function desenharChips() {
      const termo = normalizar(busca.value.trim());
      if (termo) {
        const achados = TODOS.filter((i) => normalizar(`${i.nome} ${i.en} ${i.def} ${i.pen}`).includes(termo));
        descricao.textContent = achados.length
          ? `${achados.length} resultado${achados.length > 1 ? "s" : ""} para «${busca.value.trim()}».`
          : `Nenhum resultado para «${busca.value.trim()}».`;
        chips.innerHTML = `<div class="cf-grupo">${achados.map((i) => chip(i, true)).join("")}</div>`;
      } else {
        descricao.textContent = dominio.descricao;
        chips.innerHTML = dominio.grupos.map((g) => `
          ${g.titulo ? `<p class="cf-grupo-titulo">${g.titulo}</p>` : ""}
          <div class="cf-grupo">${g.itens.map((i) => chip(i) + i.sub.map((s) => chip(s)).join("")).join("")}</div>`).join("");
      }
      marcar();
    }

    function marcar() {
      raiz.querySelectorAll(".cf-dominio").forEach((b) => {
        b.setAttribute("aria-pressed", String(!busca.value.trim() && b.dataset.dominio === dominio.id));
      });
      chips.querySelectorAll(".cf-chip").forEach((b) => {
        b.setAttribute("aria-pressed", String(b.dataset.chave === atual.chave));
      });
    }

    function desenharPainel() {
      const i = TODOS.indexOf(atual);
      painel.innerHTML = `
        <p class="cf-painel-dominio">${atual.dominio.nome}${atual.pai ? ` · ${atual.pai.nome}` : ""}</p>
        <h3>${atual.nome}</h3>
        <p class="cf-en">${atual.en}</p>
        <p class="cf-def">${atual.def}</p>
        <div class="cf-pergunta"><b>Pergunta para o PEN</b><p>${atual.pen}</p></div>
        <div class="cf-passos">
          <button type="button" data-ir="${i - 1}" ${i === 0 ? "disabled" : ""}>← Anterior</button>
          <span>${i + 1} de ${TODOS.length}</span>
          <button type="button" data-ir="${i + 1}" ${i === TODOS.length - 1 ? "disabled" : ""}>Seguinte →</button>
        </div>`;
    }

    function selecionar(item) {
      const mudou = item.dominio !== dominio;
      atual = item;
      dominio = item.dominio;
      if (mudou && !busca.value.trim()) desenharChips();
      marcar();
      desenharPainel();
    }

    raiz.querySelector(".cf-mapa").addEventListener("click", (e) => {
      const b = e.target.closest(".cf-dominio");
      if (!b) return;
      dominio = DOMINIOS.find((x) => x.id === b.dataset.dominio);
      busca.value = "";
      atual = TODOS.find((i) => i.dominio === dominio);
      fecharTudo();
      desenharChips();
      desenharPainel();
    });
    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".cf-chip");
      if (!b) return;
      selecionar(porChave[b.dataset.chave]);
      if (raiz.offsetWidth < 620) painel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    painel.addEventListener("click", (e) => {
      const b = e.target.closest("[data-ir]");
      if (!b) return;
      busca.value = "";
      const antes = dominio;
      selecionar(TODOS[Number(b.dataset.ir)]);
      if (antes === dominio) desenharChips();
    });
    busca.addEventListener("input", () => {
      fecharTudo();
      desenharChips();
    });

    function fecharTudo() {
      tudo.hidden = true;
      area.hidden = false;
      verTudo.setAttribute("aria-pressed", "false");
      verTudo.textContent = "Ver lista completa";
    }
    verTudo.addEventListener("click", () => {
      if (!tudo.hidden) {
        fecharTudo();
        return;
      }
      if (!tudo.innerHTML) {
        tudo.innerHTML = DOMINIOS.map((d) => `
          <h3>${d.nome}</h3>
          <table class="tabela-compacta table">
            <thead><tr><th>Constructo</th><th>Definição</th><th>Pergunta para o PEN</th></tr></thead>
            <tbody>${TODOS.filter((i) => i.dominio === d).map((i) => `
              <tr><td class="${i.pai ? "cf-td-sub" : ""}"><strong>${i.nome}</strong><br><span class="cf-en">${i.en}</span></td><td>${i.def}</td><td>${i.pen}</td></tr>`).join("")}</tbody>
          </table>`).join("");
      }
      tudo.hidden = false;
      area.hidden = true;
      verTudo.setAttribute("aria-pressed", "true");
      verTudo.textContent = "Voltar ao mapa";
    });

    desenharChips();
    desenharPainel();
  }

  // Quem é quem: papéis cruzados com características.
  const PESSOAS = [
    {
      nome: "Dra. Graça", papel: "Líder de alto nível", quem: "directora provincial de saúde",
      n: "Precisa de mostrar resultados com um orçamento apertado.",
      c: "Conhece o sistema, mas tem pouca informação sobre doenças crónicas nas unidades.",
      o: "Pode mudar prioridades e abastecimento, mas tem a agenda tomada pelas urgências.",
      m: "Apoia se o PEN responder a uma prioridade que lhe cobram.",
    },
    {
      nome: "Sr. Afonso", papel: "Líder intermédio", quem: "chefe do Centro de Saúde da Nova Esperança",
      n: "Precisa de menos filas e de menos doentes a voltar sem solução.",
      c: "Sabe gerir a unidade, mas nunca teve dados sobre os doentes crónicos.",
      o: "Pode reorganizar horários, mas não contrata pessoal.",
      m: "Hesita: receia que seja mais um projecto que acaba.",
    },
    {
      nome: "Enfermeira Rosa", papel: "Líder de opinião", quem: "30 anos de serviço, sem cargo de chefia",
      n: "Quer ser ouvida antes de as mudanças chegarem à equipa.",
      c: "Tem grande experiência clínica; usa pouco a tabela de risco.",
      o: "Sem autoridade formal, mas os colegas seguem o que ela faz.",
      m: "Céptica no início. Se ela adoptar, a equipa adopta.",
    },
    {
      nome: "Dr. Paulo", papel: "Facilitador da implementação", quem: "apoia as unidades da província",
      n: "Precisa de saber onde o apoio faz mais diferença.",
      c: "Domina o protocolo e sabe orientar sem fiscalizar.",
      o: "Tem 12 unidades e pouco transporte: visita cada uma de vez em quando.",
      m: "Muito empenhado, enquanto houver condições para as visitas.",
    },
    {
      nome: "Enfermeira Marta", papel: "Quem oferece a inovação", quem: "faz a consulta de crónicos",
      n: "Quer regras claras e menos dúvidas sozinha na consulta.",
      c: "Conhece o fluxograma; tem dificuldade em ajustar a medicação.",
      o: "Pouco tempo por pessoa e nem sempre tem medicamento para prescrever.",
      m: "Quer fazer bem: vê os doentes a voltar melhor e isso anima-a.",
    },
    {
      nome: "Dona Teresa", papel: "Destinatária da inovação", quem: "58 anos, vendedora no mercado",
      n: "Quer sentir-se bem e não perder dias de venda.",
      c: "Lê com dificuldade e não sabe o que os números da tensão querem dizer.",
      o: "Só pode ir à unidade se não perder a banca e se tiver dinheiro para o transporte.",
      m: "Toma os comprimidos quando se sente mal, e deixa quando se sente bem.",
    },
  ];
  const CARACTERISTICAS = [
    ["n", "Necessidade", "De que precisa?"],
    ["c", "Capacidade", "O que sabe fazer?"],
    ["o", "Oportunidade", "O que pode fazer?"],
    ["m", "Motivação", "O que quer fazer?"],
  ];

  function iniciarPessoas() {
    const botoes = document.getElementById("cf-pessoas-botoes");
    if (!botoes) return;
    const alvo = document.getElementById("cf-pessoa");
    botoes.innerHTML = PESSOAS.map((p, i) =>
      `<button type="button" data-pessoa="${i}"><strong>${p.nome}</strong><span>${p.papel}</span></button>`).join("");

    function desenhar(i) {
      const p = PESSOAS[i];
      alvo.innerHTML = `
        <p class="cf-pessoa-topo"><strong>${p.nome}</strong>, ${p.quem}</p>
        <div class="cf-caracteristicas">${CARACTERISTICAS.map(([k, nome, perg]) => `
          <div><h4>${nome}</h4><p class="cf-perg">${perg}</p><p>${p[k]}</p></div>`).join("")}</div>`;
      botoes.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-pressed", String(k === i)));
    }
    botoes.addEventListener("click", (e) => {
      const b = e.target.closest("[data-pessoa]");
      if (b) desenhar(Number(b.dataset.pessoa));
    });
    desenhar(4);
  }

  // Da barreira à estratégia.
  const CASOS = [
    {
      problema: "A enfermeira não ajusta o tratamento",
      tentador: "Repetir a formação sobre o protocolo.",
      causa: "Ela sabe o que fazer, mas a sala de espera está cheia e a consulta dura poucos minutos.",
      constructos: ["Compatibilidade", "Oportunidade", "Organização do trabalho"],
      resposta: "Reorganizar o fluxo: o técnico de farmácia mede a tensão antes da consulta, e a guia mostra o passo seguinte no ecrã.",
    },
    {
      problema: "Falta amlodipina todos os meses",
      tentador: "Pedir à equipa que explique aos doentes que o medicamento está em falta.",
      causa: "O pedido é feito por estimativa e a cadeia de abastecimento não conhece o número de doentes em tratamento.",
      constructos: ["Materiais e equipamento", "Parcerias e ligações", "Condições locais"],
      resposta: "Basear o pedido no número de doentes em registo, rever o stock todos os meses com a farmácia provincial e definir o que fazer quando faltar.",
    },
    {
      problema: "Quase não aparecem homens",
      tentador: "Pôr mais cartazes na sala de espera, onde eles não estão.",
      causa: "Os homens trabalham no horário da unidade e só entram lá para acompanhar outras pessoas.",
      constructos: ["Avaliar necessidades: dos destinatários", "Centrada no destinatário", "Envolver: destinatários"],
      resposta: "Perguntar-lhes primeiro. Medir a tensão de quem acompanha, abrir uma manhã de sábado e levar a medição à praça de táxis.",
    },
    {
      problema: "O chefe da unidade não dá prioridade ao PEN",
      tentador: "Enviar mais um ofício a lembrar a obrigação.",
      causa: "A unidade tem muitos programas em simultâneo e ninguém lhe mostrou os números dos seus próprios doentes.",
      constructos: ["Prioridade relativa", "Líderes intermédios", "Pressão de medição de desempenho"],
      resposta: "Levar-lhe os dados da unidade, mostrar o que melhora para ele e pôr as doenças crónicas nas reuniões que a província já faz.",
    },
    {
      problema: "Ninguém preenche a ficha",
      tentador: "Cobrar o preenchimento nas supervisões.",
      causa: "A ficha tem campos a mais, repete o que está noutro livro e os dados nunca voltam à equipa.",
      constructos: ["Complexidade", "Desenho", "Reflectir e avaliar"],
      resposta: "Cortar os campos que não geram indicador, testar a nova ficha com a própria equipa e devolver os resultados todos os meses.",
    },
    {
      problema: "A equipa não confia na tabela de risco",
      tentador: "Fazer uma palestra com a recomendação da OMS.",
      causa: "A tabela parece vir de fora, e quem tem autoridade informal na equipa ainda não a adoptou.",
      constructos: ["Fonte", "Base de evidência", "Líderes de opinião"],
      resposta: "Trabalhar primeiro com a enfermeira mais respeitada, discutir casos reais da unidade e mostrar o benefício em números absolutos.",
    },
  ];

  function iniciarCasos() {
    const botoes = document.getElementById("cf-casos-botoes");
    if (!botoes) return;
    const alvo = document.getElementById("cf-caso");
    botoes.innerHTML = CASOS.map((p, i) => `<button type="button" data-caso="${i}">${p.problema}</button>`).join("");

    function desenhar(i) {
      const p = CASOS[i];
      alvo.innerHTML = `
        <div class="cf-caso-passo cf-caso-tentador"><h4>A resposta que tenta</h4><p>${p.tentador}</p></div>
        <div class="cf-caso-passo"><h4>O que pode estar a acontecer</h4><p>${p.causa}</p>
          <p class="cf-caso-tags">${p.constructos.map((t) => `<span>${t}</span>`).join("")}</p></div>
        <div class="cf-caso-passo cf-caso-resposta"><h4>Uma resposta que acerta na causa</h4><p>${p.resposta}</p></div>`;
      botoes.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-pressed", String(k === i)));
    }
    botoes.addEventListener("click", (e) => {
      const b = e.target.closest("[data-caso]");
      if (b) desenhar(Number(b.dataset.caso));
    });
    desenhar(0);
  }

  iniciarMapa();
  iniciarPessoas();
  iniciarCasos();
})();
