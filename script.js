const deskType = document.getElementById("desk-type");
const membershipTier = document.getElementById("membership-tier");
const membership = document.getElementById("membership");
const form = document.getElementById("booking-form");
const result = document.getElementById("result");

let availableDesks = {
  individual: 10,
  team: 5,
};

deskType.addEventListener("change", () => {
  membershipTier.style.display = deskType.value === "individual" ? "block" : "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const type = deskType.value;
  const hours = parseInt(document.getElementById("hours").value);
  let cost = 0;

  if (type === "individual") {
    if (availableDesks.individual === 0) {
      result.innerHTML = "No individual desks available.";
      return;
    }

    const tier = membership.value;
    const rates = {
      basic: 10,
      premium: 15,
      executive: 20
    };

    cost = rates[tier] * hours;
    availableDesks.individual--;
  } else if (type === "team") {
    if (availableDesks.team === 0) {
      result.innerHTML = "No team desks available.";
      return;
    }

    cost = 25 * hours;
    availableDesks.team--;
  }

  result.innerHTML = `
    ✅ Booking successful!<br>
    Total cost: $${cost}<br>
    Desks left — Individual: ${availableDesks.individual}, Team: ${availableDesks.team}
  `;
});
