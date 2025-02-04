document.addEventListener("DOMContentLoaded", function () {
    const amountInput = document.getElementById("amount");
    const priceDisplay = document.getElementById("price");
    const buyButton = document.getElementById("buyButton");
    const orderResult = document.getElementById("orderResult");

    function updatePrice() {
        const amount = parseFloat(amountInput.value);
        const price = amount * 62500000000000; // 62,5 Billionen € pro Nanogramm
        priceDisplay.innerText = price.toLocaleString() + " €";
    }

    function buyAntimatter() {
        const amount = parseFloat(amountInput.value);
        if (amount > 0) {
            orderResult.innerText = "✅ Bestellung erfolgreich! Lieferung in 5 Milliarden Jahren.";
        } else {
            orderResult.innerText = "❌ Bitte eine gültige Menge eingeben.";
        }
    }

    amountInput.addEventListener("input", updatePrice);
    buyButton.addEventListener("click", buyAntimatter);
});
