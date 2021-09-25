<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <!-- Metadeta Attributes -->
    <meta charset="utf-8" />
    <meta name="author" content="Mohammed Adnan Y" />
    <meta name="description" content="Polynomial Equation Solver" />
    <meta name="keywords" content="polynomial, mathematics, polynomial equation solver, adnan" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Title & Icons -->
    <title>Polynomial Equation Solver | Adnan</title>
    <link rel="icon" type="image/png" href="../favicon/favicon-white/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-white/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-white/favicon-16x16.png" />

    <!-- Font Awesome -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>

    <!-- CSS Stylesheets -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=Libre+Baskerville&family=Lora&family=Montserrat&display=swap" rel="stylesheet">

</head>
<body>

    <header>

        <nav class="fixed-top">

            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <div class="overlay-content">
                    <a href="../About/index.html">About</a>
                    <a href="">Polynomial Solver</a>
                    <a href="../Encrypt Decrypt/index.html">Encrypt-Decrypt</a>
                    <a href="../Magic Square/index.html">Magic Square</a>
                    <a href="mailto:mohammedadnan2307@gmail.com">Contact</a>
                </div>
            </div>
            <span onclick="openNav()" class="menu-toggler"><i class="fas fa-bars"></i></span>

            <div id="navbar-left">
                <a href="../About/index.html">About</a>
                <div class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Work</a>
                    <div class="dropdown-content">
                        <a href="">Polynomial Solver</a>
                        <a href="../Encrypt Decrypt/index.html">Encrypt-Decrypt</a>
                        <a href="../Magic Square/index.html">Magic Square</a>
                    </div>
                </div>
                <a href="mailto:mohammedadnan2307@gmail.com">Contact</a>
            </div>

            <a href="../index.html"><img class="logo" src="../images/quill.png" alt="website-logo" /></a>

            <div id="navbar-right">
                <a href="https://twitter.com/MohammedAdnanY3"><i class="social-icon fab fa-twitter"></i></a>
                <a href="https://linkedin.com/in/adnan23"><i class="fab fa-linkedin"></i></a>
            </div>

        </nav>

    </header>

    <section class="top-section">

        <h1>Polynomial Equation Solver</h1>
        <div class="dropdown input-dropdown">

            <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
                Choose an option
            </button>
            <div class="dropdown-menu">
                <button class="dropdown-item btn btn-light" id="1" type="button" data-toggle="tooltip" data-placement="bottom" title="Calculate the real roots of polynomial">Calculate Roots</button>
                <button class="dropdown-item btn btn-light" id="2" type="button" data-toggle="tooltip" data-placement="bottom" title="Find the turning points in a polynomial">Turning Points</button>
                <button class="dropdown-item btn btn-light" id="3" type="button" data-toggle="tooltip" data-placement="bottom" title="Find the equation of polynomial when roots are known">Generate Equation</button>
                <button class="dropdown-item btn btn-light" id="4" type="button" data-toggle="tooltip" data-placement="bottom" title="Calculate the area of curve in an interval">Curve Area</button>
                <button class="dropdown-item btn btn-light" id="5" type="button" data-toggle="tooltip" data-placement="bottom" title="Calculate the length of curve in an interval">Curve Length</button>
            </div>

        </div>
        <div class="form">
    
            <input type="text" placeholder="Enter values" id="coefInput" list="examples"/>
            <datalist id="examples">
                <option>1,-5,6</option>
                <option>1,,-5.2</option>
            </datalist>
            <button class="go btn btn-dark">Go</button>
           
        </div>

    </section>

    <div id="result"></div>

    <!-- Bootstrap Scripts -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!-- React Scripts -->
    <script crossorigin="anonymous" src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin="anonymous" src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <!-- My Scripts -->
    <script src="solver.js" charset="utf-8" type="text/javascript"></script>
    <script src="index.js" charset="utf-8" type="text/javascript"></script>

</body>
</html>
