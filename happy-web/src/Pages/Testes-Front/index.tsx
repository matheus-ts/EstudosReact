import axios from 'axios';
import React, { useEffect, useState } from 'react'


const BASE_URL = "http://localhost:3001";

export type UsersTest = {
    id: number;
    image: string;
    name: number;
    price: number
}


export const Testes = () => {


    const [usersResponse, setUsersResponse] = useState<UsersTest>();

    useEffect(() => {
        axios.get(`${BASE_URL}/products`).then(response => setUsersResponse(response.data))
    })

    return (
        <div className="page-container">
            <table className="table" cellPadding="0" cellSpacing="0">
                <thead> {/*Cabeçalho da tabela*/}
                    <tr> {/* Preenchendo a llinha do cabeçalho   */}
                        <th>Nome</th> {/* Celulas do cabeçalho */}
                        <th>Email</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {usersResponse?.map(res => (
                        <tr>
                            <td>{res.id}</td>
                            <td>{res.price}</td>
                            <td>{res.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}