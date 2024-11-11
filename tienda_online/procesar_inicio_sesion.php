<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $contraseña = $_POST["contraseña"];

    // Conectar a la base de datos
    $conn = new mysqli("localhost", "root", "", "cupcakes_bella_bel");

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Buscar el usuario en la base de datos
    $sql = "SELECT * FROM usuarios WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($contraseña, $row["contraseña"])) {
            echo "Inicio de sesión exitoso";
            // Redirecciona a la página de bienvenida o dashboard
            header("Location: pagina_web/index.html");
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "Usuario no encontrado";
    }

    $conn->close();
}
?>
