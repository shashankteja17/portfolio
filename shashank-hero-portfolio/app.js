const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const missionData = {
  visionx: {
    eyebrow: "MISSION DOSSIER / 01 · FEATURED",
    title: "VISION X",
    lede: "An AI vision concept focused on intelligent detection and situational awareness, presented as the flagship mission in this portfolio.",
    problem: "How might computer vision help surface meaningful visual signals in complex environments?",
    approach: "Explore a pipeline built around video input, object detection, tracking, and reviewable observations. Keep a human in the loop for consequential decisions.",
    tools: "Python · YOLO · OpenCV · Real-time video processing concepts",
    status: "Award highlight: NIT Trichy Best Idea Award 2026. Patent application reference supplied: 202641076822; grant status not independently verified."
  },
  sentinel: {
    eyebrow: "MISSION DOSSIER / 02",
    title: "SENTINEL SWARM",
    lede: "An AI-powered fraud-detection prototype concept that explores coordinated agent workflows to help reviewers investigate suspicious banking patterns.",
    problem: "Banking risk teams need to connect signals across transactions and reduce the noise around alerts.",
    approach: "Explore agent coordination, entity relationships, retrieval, and risk signals to help prioritize cases for human review—not make unreviewed financial decisions.",
    tools: "Python · FastAPI · Neo4j · ChromaDB · Redis · LangChain · Sentence Transformers",
    status: "Prototype / hackathon project exploration. Not represented as a production banking system."
  },
  kyi: {
    eyebrow: "MISSION DOSSIER / 03",
    title: "KYI // KNOW YOUR INSURANCE",
    lede: "An insurance comparison platform intended to help people understand options and compare policies more confidently.",
    problem: "Insurance choices can be difficult to compare when terms, coverage, and costs are scattered across providers.",
    approach: "Organize comparison and recommendation flows around user needs, clear information, and cost-awareness.",
    tools: "React.js · Java Spring Boot · REST APIs · Product and recommendation concepts",
    status: "Project lead / RenewBuy collaboration. Resume-reported reach: 60+ insurance companies covered and 50+ customers reached."
  },
  veyil: {
    eyebrow: "MISSION DOSSIER / 04",
    title: "VEYILMITRA",
    lede: "A social-good concept focused on heat awareness for outdoor workers and street vendors.",
    problem: "People who work outdoors may need accessible, understandable signals about heat risk and safer choices.",
    approach: "Design a simple, language-aware experience for heat-awareness information, practical prompts, and risk communication. Any real deployment requires validated data and local expert input.",
    tools: "AI product concept · Heat-risk communication · English-first with Tamil support planned",
    status: "Concept / hackathon direction. The demo on this page is illustrative, not a live health or weather service."
  }
};

function openMission(key) {
  const data = missionData[key];
  if (!data) return;
  $("#modalEyebrow").textContent = data.eyebrow;
  $("#modalTitle").textContent = data.title;
  $("#modalLede").textContent = data.lede;
  $("#modalProblem").textContent = data.problem;
  $("#modalApproach").textContent = data.approach;
  $("#modalTools").textContent = data.tools;
  $("#modalStatus").textContent = data.status;
  $("#modalBackdrop").classList.add("open");
  $("#modalBackdrop").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}
function closeMission() {
  $("#modalBackdrop").classList.remove("open");
  $("#modalBackdrop").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$$("[data-mission]").forEach(el => el.addEventListener("click", () => openMission(el.dataset.mission)));
$("#modalClose").addEventListener("click", closeMission);
$("#modalBackdrop").addEventListener("click", e => { if (e.target === $("#modalBackdrop")) closeMission(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMission(); });

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => revealObserver.observe(el));

const cursorGlow = $("#cursorGlow");
window.addEventListener("pointermove", e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
}, { passive: true });

$("#suitUp").addEventListener("click", () => {
  document.body.classList.toggle("suit-mode");
  const enabled = document.body.classList.contains("suit-mode");
  $("#suitUp").querySelector("span").textContent = enabled ? "⚡ SUIT MODE: ON" : "⚡ SUIT UP";
  showToast(enabled ? "SUIT MODE ACTIVATED // ENERGY SIGNATURE SHIFTED" : "STANDARD BUILDER MODE RESTORED");
  $("#coreStage").animate([{filter:"brightness(1)"},{filter:"brightness(1.7)"},{filter:"brightness(1)"}], {duration:650});
});

$("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
$$(".nav-links a").forEach(link => link.addEventListener("click", () => $("#navLinks").classList.remove("open")));

const forgeData = {
  vision: {
    icon: "⌖", type: "VISION INTELLIGENCE", title: "Map the scene. Find the signal.",
    desc: "A practical vision workflow starts by capturing input, detecting relevant objects, and surfacing observations for a human to review.",
    steps: [["INPUT","Video frame"],["ANALYZE","Detection model"],["REVIEW","Human validation"]],
    result: "Potential objects surfaced for human review."
  },
  fraud: {
    icon: "⌁", type: "RISK ANALYTICS", title: "Connect signals. Prioritize review.",
    desc: "A risk-analysis pathway can connect transaction patterns, entity relationships, and anomaly signals before a reviewer decides what to investigate.",
    steps: [["INGEST","Transaction data"],["CORRELATE","Pattern signals"],["ESCALATE","Analyst review"]],
    result: "Illustrative risk signals prioritized for analyst review."
  },
  agents: {
    icon: "◈", type: "AGENT GOVERNANCE", title: "Verify the agent. Enforce the boundary.",
    desc: "An agent-governance flow checks identity and policy before a requested action is allowed, denied, or sent for approval.",
    steps: [["IDENTITY","Agent context"],["POLICY","Permission check"],["DECISION","Allow / deny"]],
    result: "Illustrative policy decision generated before action."
  },
  heat: {
    icon: "☼", type: "SOCIAL-GOOD DESIGN", title: "Make risk easier to understand.",
    desc: "A heat-awareness experience could combine validated local weather data with clear, accessible guidance for outdoor workers.",
    steps: [["CONTEXT","Local conditions"],["ASSESS","Validated risk"],["INFORM","Clear guidance"]],
    result: "Illustrative awareness prompt prepared; no live forecast used."
  }
};
let currentForge = "vision";
$$("[data-forge]").forEach(btn => btn.addEventListener("click", () => {
  currentForge = btn.dataset.forge;
  $$(".forge-option").forEach(item => item.classList.toggle("active", item === btn));
  const d = forgeData[currentForge];
  $("#terminalIcon").textContent = d.icon;
  $("#terminalType").textContent = d.type;
  $("#terminalTitle").textContent = d.title;
  $("#terminalDesc").textContent = d.desc;
  $("#terminalResult").textContent = d.result;
  $("#flowSteps").innerHTML = d.steps.map((step, i) => `${i ? '<i>→</i>' : ''}<div class="flow-step ${i < 2 ? 'complete' : ''}"><span>0${i+1}</span><b>${step[0]}</b><small>${step[1]}</small></div>`).join("");
  $("#terminalResult").style.opacity = ".4";
  setTimeout(() => $("#terminalResult").style.opacity = "1", 100);
}));
$("#runSimulation").addEventListener("click", () => {
  const button = $("#runSimulation");
  button.disabled = true;
  button.innerHTML = "<span>◌</span> RUNNING SIMULATION <b>PROCESSING...</b>";
  const steps = $$(".flow-step", $("#flowSteps"));
  steps.forEach(s => s.classList.remove("complete"));
  steps.forEach((step, i) => setTimeout(() => {
    step.classList.add("complete");
    if (i === steps.length - 1) {
      $("#terminalResult").textContent = forgeData[currentForge].result;
      button.innerHTML = "<span>✓</span> SIMULATION COMPLETE <b>RUN AGAIN ↵</b>";
      button.disabled = false;
    }
  }, 420 * (i + 1)));
});

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2600);
}
function updateClock() {
  const now = new Date();
  $("#terminalClock").textContent = [now.getHours(),now.getMinutes(),now.getSeconds()].map(n=>String(n).padStart(2,"0")).join(":");
}
setInterval(updateClock, 1000); updateClock();
$("#year").textContent = new Date().getFullYear();

// Graceful fallback for browsers without IntersectionObserver.
if (!("IntersectionObserver" in window)) $$(".reveal").forEach(el => el.classList.add("visible"));


// Cinematic but skippable mission intro. Keep navigation available after entry.
(() => {
  const intro = document.getElementById('missionIntro');
  const enter = document.getElementById('enterPortfolio');
  const skip = document.getElementById('skipIntro');
  if (!intro) return;
  const leave = () => {
    intro.classList.add('is-leaving');
    document.body.classList.add('intro-complete');
    window.setTimeout(() => intro.remove(), 900);
  };
  enter?.addEventListener('click', leave);
  skip?.addEventListener('click', leave);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById('missionIntro')) leave();
  });
})();
