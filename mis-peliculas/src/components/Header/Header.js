import React from "react"
function Header () {
return (
    < React.Fragment>
    <header>
    <img src="./img/logoSMA.png" alt="" />
    <section>
        <div>
            <p>Más Populares </p>
            <p>Mejores Puntuadas</p>
        </div>
    </section>
    </header>
     {/* <header>
<h1>Título/ Nombre de la app</h1>
<section>
    <p>Ordenar ASC/ DESC</p>
    <i className="fas fa-th"></i>
    <i className="fas fa-align-justify"></i>
    <form action="">
        <input type="text" name="search" id="" placeholder="Search">
        <button type="submit"><i className="fas fa-search"></i></button>
    </form>
</section>
</header>  */}
    </React.Fragment>
)
}

export default Header;