document.addEventListener("DOMContentLoaded", function () {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const gender = urlParams.get("gender");
  const weight = parseFloat(urlParams.get("weight"));
  const height = parseFloat(urlParams.get("height")) / 100;

  if (gender && weight && height) {
    // Set gender value in the select box
    document.getElementById("gender").value = gender;
    // Set weight and height values
    document.getElementById("weight").value = weight;
    document.getElementById("height").value = height * 100; // Convert back to cm

    // Calculate BMI
    calculateBMI();
  }
});

function calculateBMI() {
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value); // Use parseFloat to ensure weight and height are treated as numbers
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  const bmi = (weight / (height * height)).toFixed(2);

  document.getElementById("bmi-anda").textContent = `BMI Anda`;
  document.getElementById("result").textContent = bmi;

  let category = "";
  let program = "";

  if (bmi < 18.5) {
    category = "Kategori: Underweight (Kekurangan berat badan)";
    program = "Program: Konsumsi lebih banyak kalori dan nutrisi seimbang.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Kategori: Normal (Berat badan ideal)";
    program = "Program: Pertahankan pola makan sehat dan rutin berolahraga.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Kategori: Overweight (Kelebihan berat badan)";
    program = "Program: Kurangi asupan kalori dan tingkatkan aktivitas fisik.";
  } else {
    category = "Kategori: Obese (Obesitas)";
    program =
      "Program: Konsultasikan dengan dokter atau ahli gizi untuk rencana penurunan berat badan.";
  }

  document.getElementById("category").textContent = category;
  document.getElementById("program").textContent = program;
}

function myReset() {
  document.getElementById("bmiID").reset();
  document.getElementById("bmi-anda").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("category").textContent = "";
  document.getElementById("program").textContent = "";
}
