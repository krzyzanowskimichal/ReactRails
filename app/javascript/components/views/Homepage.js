import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemStart, loadDataStart } from "../actions";
import Drawer from "../ui-component/Drawer/Drawer";
import { ButtonIcon } from "../ui-component/ButtonIcon/ButtonIcon";

const initialValues = {
    name: "",
    description: "",
    price: ""
}

const Homepage = () => {
    const dispatch = useDispatch();
    const { motorcycle } = useSelector((state) => state)
    const [context, setContext] = useState('')
    const [isDrawerVisible, setIsDrawerVisible] = useState(false)
    const [formValue, setFormValue] = useState(initialValues)
    const [editItem, setEditItem] = useState()

    useEffect(() => {
        dispatch(loadDataStart())
    }, [])
    
    const handleDelete = (id) => {
        dispatch(deleteItemStart(id))
    }

    const handleEdit = (id) => {
        setEditItem(id)
        const singleItem = motorcycle.find(item => item.id === id)
        setIsDrawerVisible(true)
        setFormValue({...singleItem})

    }

    useEffect(() => console.log(context), [context])

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
                        <td>
                            <button onClick={() => {
                                setContext('edit')
                                handleEdit(item.id)
                                }
                            }
                                >edit</button>
                            <button onClick={() => handleDelete(item.id)}>delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ButtonIcon 
                isDrawerVisible={isDrawerVisible} 
                onClick={() => {
                    if (!isDrawerVisible) {
                        setContext('add')
                        setFormValue(initialValues) 
                    }
                    setIsDrawerVisible(prevState => !prevState)
                }
            } 
            />
            <Drawer 
                context={context} 
                formValue={formValue} 
                setFormValue={setFormValue} 
                isVisible={isDrawerVisible} 
                handleClose={setIsDrawerVisible} 
                id={editItem}
            />
        </MainLayout>
        </>
    )
}

export default Homepage;