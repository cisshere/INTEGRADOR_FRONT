import React, {useEffect, useState} from "react";
import {BtnCategoria, BtnLista, ProductosContainer, ProductsSection, TituloProductos,} from "./ProductosStyles";
import CardProducto from "./CardContainer";
import {listarCategorias, listarProductos} from "../../datos/ClienteApi.js";

const ProductosSecction = () => {
    const [categoriaFiltro, setCategoriaFiltro] = useState();
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        console.log(categoriaFiltro)
        if(categoriaFiltro){
            listarProductos().then((response) => {
                const datos = response.filter((item) => {
                    console.log(item.categoria)
                    return item.categoria === categoriaFiltro;
                });
                setProductos(datos)
            })
        }else{
            listarProductos().then((response) => {
                setProductos(response)
            })
        }
    }, [categoriaFiltro])

    useEffect(() => {
        listarCategorias().then((response) => {
            setCategorias(response)
        })
    }, [])

    return (
        <ProductsSection>
            <TituloProductos>PRODUCTOS</TituloProductos>
            <BtnLista>
                <BtnCategoria onClick={() => setCategoriaFiltro(undefined)}>
                    Todos
                </BtnCategoria>
                {categorias.map((item) =>
                    (<BtnCategoria onClick={() => setCategoriaFiltro(item._id)} key={item._id}>
                        {item.nombre}
                    </BtnCategoria>)
                )}
            </BtnLista>
            <ProductosContainer>
                {productos.map((producto) => (
                    <CardProducto {...producto} key={producto._id}/>
                ))}
            </ProductosContainer>
        </ProductsSection>
    );
};

export default ProductosSecction;
