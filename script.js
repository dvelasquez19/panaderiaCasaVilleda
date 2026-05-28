function abrirModal(tipo){

    const modal = document.getElementById("modal");
    const contenido = document.getElementById("contenidoModal");
    const modalContent = document.querySelector(".modal-content");

    modal.style.display = "block";

    modalContent.classList.remove("grande");

    /* QUIENES SOMOS */

    if(tipo === "quienes"){

        modalContent.classList.add("grande");

        contenido.innerHTML = `

        <div class="quienes-somos">

        <h2>Quiénes Somos</h2>

        <div class="contenido">

            <div class="texto">

                <p>
                Somos una panadería artesanal dedicada a ofrecer productos frescos y de alta calidad para nuestros clientes.

                Nos especializamos en panes, postres, galletas, café y diferentes productos elaborados diariamente con ingredientes seleccionados cuidadosamente.

                Nuestro objetivo es brindar una experiencia agradable a través de sabores únicos, atención cálida y un ambiente acogedor para cada persona que nos visita.
                </p>

            </div>

            <div class="imagen">

                <img src="IMAGN1.jpeg">

            </div>

        </div>

        </div>

        `;
    }

    /* MISION */

    if(tipo === "mision"){

        contenido.innerHTML = `

        <h2>Misión</h2>

        <p>
        Nuestra misión es brindar a nuestros clientes productos artesanales frescos y de alta calidad, elaborados con dedicación, creatividad y amor por la panadería. En Casa Villeda buscamos crear momentos especiales a través de sabores únicos, ofreciendo panes, postres y bebidas que transmitan calidez y felicidad en cada detalle. Queremos que cada persona que nos visite pueda sentirse cómoda y disfrutar de un ambiente agradable acompañado
        </p>

        `;
    }

    /* VISION */

    if(tipo === "vision"){

        contenido.innerHTML = `

        <h2>Visión</h2>

        <p>
       Nuestra visión es convertirnos en una panadería reconocida por la calidad y dedicación de nuestros productos artesanales, creando experiencias únicas para cada cliente. En Casa Villeda queremos ser un lugar donde las personas puedan disfrutar momentos especiales en un ambiente cálido y agradable, destacándonos por nuestra creatividad, sabor y excelente atención. Buscamos seguir creciendo y llegar a más personas, manteniendo siempre la esencia artesanal y el amor con el que elaboramos cada uno de nuestros productos.
        </p>

        `;
    }

    /* PRODUCTO 1 */

    if(tipo === "prod1"){

        contenido.innerHTML = `

        <h2>Pan de Masa Madre</h2>

        <h3>Precio</h3>
        <p>Q45.00</p>

        <h3>Descripción</h3>
        <p>
        Pan artesanal elaborado con fermentación natural y horneado diariamente.
        </p>

        <h3>Ingredientes</h3>
        <p>
        Harina de trigo, agua, sal y masa madre natural.
        </p>

        `;
    }

    /* PRODUCTO 2 */

    if(tipo === "prod2"){

        contenido.innerHTML = `

        <h2>Roles de Canela</h2>

        <h3>Precio</h3>
        <p>Q30.00</p>

        <h3>Descripción</h3>
        <p>
        Roles suaves y esponjosos cubiertos con glaseado dulce.
        </p>

        <h3>Ingredientes</h3>
        <p>
        Harina, canela, mantequilla, azúcar y leche.
        </p>

        `;
    }

    /* PRODUCTO 3 */

    if(tipo === "prod3"){

        contenido.innerHTML = `

        <h2>Galletas Artesanales</h2>

        <h3>Precio</h3>
        <p>Q20.00</p>

        <h3>Descripción</h3>
        <p>
        Galletas artesanales preparadas diariamente.
        </p>

        <h3>Ingredientes</h3>
        <p>
        Harina, mantequilla, azúcar y chocolate.
        </p>

        `;
    }

    /* PRODUCTO 4 */

    if(tipo === "prod4"){

        contenido.innerHTML = `

        <h2>Granos de Café</h2>

        <h3>Precio</h3>
        <p>Q65.00</p>

        <h3>Descripción</h3>
        <p>
        Café tostado artesanalmente con aroma intenso.
        </p>

        <h3>Ingredientes</h3>
        <p>
        Granos de café 100% naturales.
        </p>

        `;
    }

    /* PRODUCTO 5 */

if(tipo === "prod5"){

    contenido.innerHTML = `

    <h2>Croissants</h2>

    <h3>Precio</h3>
    <p>Q28.00</p>

    <h3>Descripción</h3>
    <p>
    Croissants artesanales horneados diariamente con textura crujiente y suave interior.
    </p>

    <h3>Ingredientes</h3>
    <p>
    Harina, mantequilla, leche, azúcar y levadura.
    </p>

    `;
}

/* PRODUCTO 6 */

if(tipo === "prod6"){

    contenido.innerHTML = `

    <h2>Brownies</h2>

    <h3>Precio</h3>
    <p>Q25.00</p>

    <h3>Descripción</h3>
    <p>
    Brownies de chocolate con textura suave y sabor intenso.
    </p>

    <h3>Ingredientes</h3>
    <p>
    Chocolate, mantequilla, harina, azúcar y cacao.
    </p>

    `;
}

/* PRODUCTO 7 */

if(tipo === "prod7"){

    contenido.innerHTML = `

    <h2>Donas Artesanales</h2>

    <h3>Precio</h3>
    <p>Q18.00</p>

    <h3>Descripción</h3>
    <p>
    Donas suaves decoradas con diferentes coberturas y glaseados.
    </p>

    <h3>Ingredientes</h3>
    <p>
    Harina, leche, azúcar, mantequilla y chocolate.
    </p>

    `;
}

/* PRODUCTO 8 */

if(tipo === "prod8"){

    contenido.innerHTML = `

    <h2>Tarta de Frutas</h2>

    <h3>Precio</h3>
    <p>Q40.00</p>

    <h3>Descripción</h3>
    <p>
    Tarta artesanal decorada con frutas frescas y crema pastelera.
    </p>

    <h3>Ingredientes</h3>
    <p>
    Frutas frescas, crema, harina, mantequilla y azúcar.
    </p>

    `;
}

    /* MAPA */

    if(tipo === "mapa"){

        contenido.innerHTML = `

        <h2>Ubicación</h2>

        <iframe
        src="https://maps.google.com/maps?q=14.64672219397097,-90.48284962188212&z=17&output=embed"
        allowfullscreen=""
        loading="lazy">
        </iframe>

        `;
    }

}

function cerrarModal(){

    document.getElementById("modal").style.display = "none";

}

window.onclick = function(event){

    const modal = document.getElementById("modal");

    if(event.target == modal){

        modal.style.display = "none";

    }

}