import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { useDispatch, useSelector } from 'react-redux'
import { loadDataStart } from "../actions";
import Drawer from "../ui-component/Drawer/Drawer";

const Homepage = () => {
    const dispatch = useDispatch();
    const { motorcycle } = useSelector((state) => state)
    
    useEffect(() => {
        dispatch(loadDataStart())
    }, [])
    
    return (
        <>
        <MainLayout>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {motorcycle && motorcycle.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>Edit Delete</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </MainLayout>
        </>
    )
}

export default Homepage;