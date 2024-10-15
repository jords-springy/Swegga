// JORDAN SPRINGVELDT

calculate_button = document.getElementById('calculate_button');
calculate_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
    calculate();
})
console.log('click addEventListener');

function calculate() {
    m_price = document.getElementById('m_price').innerText
    console.log('m_price: ' + m_price);
    f_price = document.getElementById('f_price').innerText
    console.log('f_price: ' + f_price);

    m_quantity = document.getElementById('m_quantity').value;
    console.log('m_quantity: ' + m_quantity);
    f_quantity = document.getElementById('f_quantity').value;
    console.log('f_quantity: ' + f_quantity);

    m_total_value = (m_price * m_quantity).toFixed(2);
    console.log('m_total_value: ' + m_total_value);
    f_total_value = (f_price * f_quantity).toFixed(2);
    console.log('f_total_value: ' + f_total_value);

    sum_total = (parseFloat(m_total_value) + parseFloat(f_total_value)).toFixed(2);
    console.log('sum_total: ' + sum_total);

    document.getElementById('m_total').innerText = 'R ' + m_total_value;
    document.getElementById('f_total').innerText = 'R ' + f_total_value;
    document.getElementById('sum_total').innerText = 'R ' + sum_total;

}
