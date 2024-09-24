// Fetch the user data
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Parse JSON response
    .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.innerHTML = `
                <strong>Name:</strong> ${user.name}<br>
                <strong>Email:</strong> ${user.email}<br>
                <div class="user-info">
                    <strong>Address:</strong> ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}
                </div>
            `;
            userList.appendChild(userItem);
        });
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });