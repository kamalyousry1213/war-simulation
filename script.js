let faction = "";
let escalation = 0;

function selectFaction(selectedFaction) {
  faction = selectedFaction;
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function selectScenario(scenario) {
  let summary = "";
  if (scenario === "هجوم صاروخي محدود") {
    escalation += 30;
    summary = `${faction} نفذت هجومًا صاروخيًا. تسبب في تصعيد كبير ورد فعل عسكري محدود.`;
  } else if (scenario === "هجوم سيبراني") {
    escalation += 15;
    summary = `${faction} شنت هجومًا سيبرانيًا ناجحًا، أدى لشلل مؤقت في البنية التحتية للخصم.`;
  } else if (scenario === "وساطة دبلوماسية") {
    escalation -= 20;
    summary = `${faction} حاولت تهدئة الأوضاع عبر وساطة دبلوماسية. التصعيد انخفض قليلًا.`;
  }

  escalation = Math.max(0, Math.min(100, escalation));

  document.getElementById("step2").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("summaryText").innerText = summary;
  updateEscalationBar();
}

function updateEscalationBar() {
  const bar = document.getElementById("escalationLevel");
  bar.style.width = escalation + "%";

  bar.classList.remove("green", "orange", "red");
  if (escalation < 40) {
    bar.classList.add("green");
  } else if (escalation < 75) {
    bar.classList.add("orange");
  } else {
    bar.classList.add("red");
  }
}
