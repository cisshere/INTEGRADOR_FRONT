import dotenv from "dotenv";

dotenv.config();

const baseLink = "https://integrador-backend-nine.vercel.app";

export const loginUsuario = async (email, contrasenia) => {
    try {
        const response = await fetch(`${baseLink}/login`, {
            method: "POST",
            body: JSON.stringify({email, contrasenia}),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        });
        const data = await response.json();
        return data.token;
    } catch (e) {
        console.log(e);
    }
}

export const registrarUsuario = async (email, contrasenia, nombre, apellido) => {
    try {
        const response = await fetch(`${baseLink}/registo`, {
            method: "POST",
            body: JSON.stringify({email, contrasenia, nombre, apellido}),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        });
        const data = await response.json();
        return data.token;
    } catch (e) {
        console.log(e);
    }
}

export const listarProductosDestacados = async () => {
    try {
        const response = await fetch(`${baseLink}/producto/destacados`);
        const data = await response.json();
        return data.productos;
    } catch (e) {
        console.log(e);
    }
}

export const listarProductos = async () => {
    try {
        const response = await fetch(`${baseLink}/producto`);
        const data = await response.json();
        return data.productos;
    } catch (e) {
        console.log(e);
    }
}

export const listarCategorias = async () => {
    try {
        const response = await fetch(`${baseLink}/categoria`);
        const data = await response.json();
        return data.categorias;
    } catch (e) {
        console.log(e);
    }
}

export const guardarCompra = async (productos, token) => {
    try {
        const response = await fetch(`${baseLink}/compra`, {
            method: "POST",
            body: JSON.stringify({
                productos: productos.map((item)=>item._id),
                fecha: new Date().toISOString(),
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": token,
            }
        });
    } catch (e) {
        console.log(e);
    }
}
