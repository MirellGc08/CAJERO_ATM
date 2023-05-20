  // Datos de las cuentas
  const accounts = [
    { username: "Nicol", password: "031222", balance: 900 },
    { username: "Mirell", password: "8320", balance: 100 },
    { username: "Bladimir", password: "f4nt4sm4", balance: 500 },
  ];

  // Variable para almacenar el usuario actual
  let currentUser = null;

  // Función para mostrar el formulario de inicio de sesión
  function showLoginForm() {
    document.getElementById("loginSection").classList.remove("hidden");
    document.getElementById("operationsSection").classList.add("hidden");
  }

  // Función para mostrar las consultas de saldo, retiro e ingreso
  function showOperations() {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("operationsSection").classList.remove("hidden");
  }
 
  // Event listener para el formulario de inicio de sesión
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si la cuenta existe y las credenciales son correctas
    const account = accounts.find(acc => acc.username === username && acc.password === password);

    if (account) {
      // Verificar que el saldo de la cuenta cumple con los requisitos
      if (account.balance >= 10 && account.balance <= 990) {
        currentUser = account;
        document.getElementById("usernameDisplay").textContent = currentUser.username;
        showOperations();
      } else {
        alert("El saldo de la cuenta no cumple con los requisitos.");
      }
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });

  // Event listener para el botón "Consultar saldo"
  document.getElementById("btnConsultarSaldo").addEventListener("click", function() {
    if (currentUser) {
      alert(`Saldo actual: $${currentUser.balance}`);
    }
  });

  // Event listener para el botón "Ingresar monto"
document.getElementById("btnIngresarMonto").addEventListener("click", function() {
if (currentUser) {
const amount = parseFloat(prompt("Ingrese el monto a ingresar:"));
if (isNaN(amount) || amount <= 0) {
    alert("Monto inválido.");
  } else {
    currentUser.balance += amount;
    alert(`Monto ingresado: $${amount}\nNuevo saldo: $${currentUser.balance}`);
  }
}
});

// Event listener para el botón "Retirar monto"
document.getElementById("btnRetirarMonto").addEventListener("click", function() {
if (currentUser) {
  const amount = parseFloat(prompt("Ingrese el monto a retirar:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Monto inválido.");
  } else if (amount > currentUser.balance) {
    alert("Saldo insuficiente.");
  } else {
    currentUser.balance -= amount;
    alert(`Monto retirado: $${amount}\nNuevo saldo: $${currentUser.balance}`);
  }
}
});

// Mostrar el formulario de inicio de sesión al cargar la página
showLoginForm();
document.getElementById("btnBack").addEventListener("click", function() {
showLoginForm();
});