const consentCheck = document.getElementById("consentCheck");
const continueBtn = document.getElementById("continueBtn");

consentCheck.addEventListener("change", () => {
  const ok = consentCheck.checked;
  continueBtn.style.pointerEvents = ok ? "auto" : "none";
  continueBtn.style.opacity = ok ? "1" : "0.6";
  continueBtn.setAttribute("aria-disabled", ok ? "false" : "true");
});