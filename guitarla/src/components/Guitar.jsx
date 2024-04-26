
// function Guitar(props) { // props - tomamos los props
function Guitar({guitar}) { // aplicando destructuring a props

    // console.log(props.price); // acceder a los props y sus valores
    // console.log(props.auth);
    console.log(guitar);

    const {id, name, image, description, price} = guitar; // aplicando destructuring al prop guitar
    
    return (
        <>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={ `/img/${image}.jpg` } alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    {/* <h3 className="text-black fs-4 fw-bold text-uppercase">{ props.guitar.name }</h3>  sin aplicar destructuring */}
                    {/* <h3 className="text-black fs-4 fw-bold text-uppercase">{ guitar.name }</h3>  aplicando destructuring a props*/}
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{ name }</h3> {/* aplicando destructuring al prop guitar */}
                    <p>{ description }</p>
                    <p className="fw-black text-primary fs-3">${ price }</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                    >Agregar al Carrito</button>
                </div>
            </div>
        </>
    );
}

export default Guitar;