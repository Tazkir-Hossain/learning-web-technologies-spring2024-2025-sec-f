function convertUnit() {
    const input = parseFloat(document.getElementById("unitInput").value);
    const type = document.getElementById("unitType").value;
    const result = document.getElementById("unitResult");
  
    if (isNaN(input)) {
      result.textContent = "Please enter a valid number.";
      return;
    }
  
    let output = "";
  
    switch (type) {
      case "gm-to-cup":
        output = `${input} grams ≈ ${(input / 200).toFixed(2)} cups`;
        break;
      case "cup-to-gm":
        output = `${input} cups ≈ ${(input * 200).toFixed(2)} grams`;
        break;
      case "ml-to-tbsp":
        output = `${input} ml ≈ ${(input / 15).toFixed(2)} tbsp`;
        break;
      case "tbsp-to-ml":
        output = `${input} tbsp ≈ ${(input * 15).toFixed(2)} ml`;
        break;
      default:
        output = "Invalid conversion type.";
    }
  
    result.textContent = output;
  }
  
  function adjustServing() {
    const qty = parseFloat(document.getElementById("baseQty").value);
    const base = parseFloat(document.getElementById("baseServing").value);
    const target = parseFloat(document.getElementById("targetServing").value);
    const result = document.getElementById("scaledResult");
  
    if ([qty, base, target].some(val => isNaN(val) || val <= 0)) {
      result.textContent = "Please enter all values correctly.";
      return;
    }
  
    const scaled = (qty / base) * target;
    result.textContent = `Adjusted quantity: ${scaled.toFixed(2)}`;
  }
  