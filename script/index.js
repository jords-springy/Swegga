// JORDAN SPRINGVELDT

function calculate() {
    // Get prices and ensure they are parsed as floats
    const m_price = parseFloat(document.getElementById('m_price').innerText);
    const f_price = parseFloat(document.getElementById('f_price').innerText);

    // Get quantities and ensure they are parsed as floats, default to 0 if empty
    const m_quantity = parseFloat(document.getElementById('m_quantity').value) || 0;
    const f_quantity = parseFloat(document.getElementById('f_quantity').value) || 0;

    // Calculate total values
    const m_total_value = (m_price * m_quantity).toFixed(2);
    const f_total_value = (f_price * f_quantity).toFixed(2);
    
    // Sum total
    const sum_total = (parseFloat(m_total_value) + parseFloat(f_total_value)).toFixed(2);

    // Update the total price fields
    document.getElementById('m_total').innerText = 'R ' + m_total_value;
    document.getElementById('f_total').innerText = 'R ' + f_total_value;
    document.getElementById('sum_total').innerText = 'R ' + sum_total;
}

// Add event listeners to quantity input fields for real-time calculation
document.getElementById('f_quantity').addEventListener('input', calculate);
document.getElementById('m_quantity').addEventListener('input', calculate);

// If you still want the button to do something else, you can keep the following code
const calculate_button = document.getElementById('calculate_button');
calculate_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
    // Optionally call calculate here too if needed
    calculate();
});

console.log('Event listeners added');
