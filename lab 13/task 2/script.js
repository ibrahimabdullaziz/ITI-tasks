window.addEventListener("load", function () {
  var mainBranchBtn = document.getElementById("mainBranchBtn");
  var branchBtn = document.getElementById("branchBtn");
  var smartVillageCard = document.getElementById("smartVillageCard");
  var branchCards = document.querySelectorAll(
    ".location-card:not(#smartVillageCard)",
  );

  mainBranchBtn.addEventListener("click", function () {
    smartVillageCard.classList.toggle("active-main");
  });

  branchBtn.addEventListener("click", function () {
    branchCards.forEach(function (card) {
      card.classList.toggle("active-branch");
    });
  });
});
