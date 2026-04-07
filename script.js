const modal = document.getElementById("modal");
const viewer = document.getElementById("viewer");
const container = document.getElementById("certContainer");

function openCert(file) {
  console.log("Opening:", file);
  viewer.src = file;
  modal.style.display = "block";
}
function openCert(file) {
  viewer.src = file;
  modal.style.display = "block";
}
const certificates = [
  { name: "AI Security & Governance", file: "ai-security.pdf" },
  { name: "Amazon SageMaker", file: "sagemaker.pdf" },
  { name: "AMD LLM Serving", file: "amd-llm.pdf" },
  { name: "Claude with Bedrock", file: "claude.pdf" },
  { name: "Deloitte Simulation", file: "deloitte.pdf" },
  { name: "AWS ML Foundations", file: "aws-ml.pdf" },
  { name: "Generative AI - GFG", file: "gfg.pdf" },
  { name: "NVIDIA GenAI", file: "nvidia.pdf" },
  { name: "Oracle AI Foundations", file: "oracle.pdf" }
];

certificates.forEach(cert => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = cert.name;

  card.onclick = () => {
    openCert(`assets/certificates/${cert.file}`);
  };

  container.appendChild(card);
});

function openResume() {
  viewer.src = "assets/Aditya_Sharma_Resume.pdf";
  modal.style.display = "block";
}

function openCert(file) {
  viewer.src = file;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  viewer.src = "";
}

window.onclick = function(e) {
  if (e.target == modal) closeModal();
};