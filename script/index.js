// JORDAN SPRINGVELDT

const calculate_button = document.getElementById('calculate_button');
calculate_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
    calculate();
});

console.log('click addEventListener');

function calculate() {
    const m_price = parseFloat(document.getElementById('m_price').innerText);
    console.log('m_price: ' + m_price);
    
    const f_price = parseFloat(document.getElementById('f_price').innerText);
    console.log('f_price: ' + f_price);

    const m_quantity = parseFloat(document.getElementById('m_quantity').value) || 0;
    console.log('m_quantity: ' + m_quantity);
    
    const f_quantity = parseFloat(document.getElementById('f_quantity').value) || 0;
    console.log('f_quantity: ' + f_quantity);

    const m_total_value = (m_price * m_quantity).toFixed(2);
    console.log('m_total_value: ' + m_total_value);
    
    const f_total_value = (f_price * f_quantity).toFixed(2);
    console.log('f_total_value: ' + f_total_value);

    const sum_total = (parseFloat(m_total_value) + parseFloat(f_total_value)).toFixed(2);
    console.log('sum_total: ' + sum_total);

    document.getElementById('m_total').innerText = 'R ' + m_total_value;
    document.getElementById('f_total').innerText = 'R ' + f_total_value;
    document.getElementById('sum_total').innerText = 'R ' + sum_total;
}

// Add input event listeners for real-time calculation
document.getElementById('m_quantity').addEventListener('input', calculate);
document.getElementById('f_quantity').addEventListener('input', calculate);

function showAlert(total) {
    swal({
        title: "Total Price",
        text: "The total price is: R " + total,
        icon: "success",
        button: "OK",
    });
}