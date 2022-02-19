import {orders} from '../js/orders.js';

const sideMenu = document.querySelector('[data-aside]');
const menuBtn = document.querySelector('[data-menu-btn]');
const closeBtn = document.querySelector('[data-close-btn]');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('remove');
})

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('remove');
})

orders.forEach((order) => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger': order.shipping === 'Pending' ? 'warning': 'success'}">${order.shipping}</td>
    <td class="primary">Details</td>`

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
