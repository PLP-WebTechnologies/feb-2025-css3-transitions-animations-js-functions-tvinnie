<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animations + localStorage</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 50px;
    }

    .btn {
      padding: 15px 30px;
      font-size: 18px;
      background-color: #6200ea;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #3700b3;
    }

    .animate {
      animation: pop 0.5s ease-out;
    }

    @keyframes pop {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    #greeting {
      margin-top: 30px;
      font-size: 24px;
      color: #333;
    }
  </style>
</head>
<body>

  <h1>Welcome!</h1>
  <button class="btn" onclick="handleClick()" id="actionBtn">Click Me</button>

  <div id="greeting"></div>

  <script>
    // Check for existing preference
    window.onload = function () {
      const savedName = localStorage.getItem('username');
      if (savedName) {
        document.getElementById('greeting').textContent = `Welcome back, ${savedName}!`;
      }
    }

    function handleClick() {
      const name = prompt("What's your name?");

      if (name) {
        localStorage.setItem('username', name);
        document.getElementById('greeting').textContent = `Hello, ${name}!`;

        const btn = document.getElementById('actionBtn');
        btn.classList.remove('animate'); // reset animation
        void btn.offsetWidth; // trigger reflow
        btn.classList.add('animate'); // re-apply animation class
      }
    }
  </script>

</body>
</html>
