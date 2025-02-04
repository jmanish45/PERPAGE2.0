// Initialize Lucide icons
lucide.createIcons();

// Logout functionality
function logout() {
    // Clear any stored session data
    // Redirect to home page
    window.location.href = 'index.html';
}

// Sample data structure for orders
const sampleOrder = {
    id: '1',
    title: 'Mathematics Assignment',
    deadline: '2024-03-20',
    price: '₹1500',
    status: 'pending'
};

// Function to create order card
function createOrderCard(order) {
    return `
        <div class="order-card">
            <h3>${order.title}</h3>
            <p>Deadline: ${order.deadline}</p>
            <p>Price: ${order.price}</p>
            <div class="order-actions">
                <button class="btn-primary" onclick="acceptOrder('${order.id}')">Accept</button>
                <button class="btn-secondary" onclick="rejectOrder('${order.id}')">Reject</button>
            </div>
        </div>
    `;
}

// Order actions
function acceptOrder(orderId) {
    console.log('Accepting order:', orderId);
    // Implement order acceptance logic
}

function rejectOrder(orderId) {
    console.log('Rejecting order:', orderId);
    // Implement order rejection logic
}

// Update dashboard stats
function updateStats() {
    // Implement stats update logic
}