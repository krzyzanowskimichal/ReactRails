import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemStart, loadDataStart } from "../actions";
import Drawer from "../ui-component/Drawer/Drawer";
import { ButtonIcon } from "../ui-component/ButtonIcon/ButtonIcon";
import styled from "styled-components";
import editIcon from '../../../assets/images/edit.png';
import deleteIcon from '../../../assets/images/delete.svg';
import temp from '../../../assets/images/motorbike.png'

const initialValues = {
    name: "",
    description: "",
    price: "",
    photoURL: ""
}

const StyledButton = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
    `

const StyledTh = styled.th`
    padding: 10px;
    color: white;
    background-color: #002984;
    border-bottom: 10px solid #d9d9d9;
`

const StyledTd = styled.td`
    padding: 10px 20px;
    margin: 10px 0;
    border-bottom: 10px solid #d9d9d9;

    @media(max-width: 460px) {
        padding: 10px;
    }
`

const VehicleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const StyledImg = styled.img`
    height: 60px;
    width: auto;

    @media(max-width: 460px) {
        height: 30px;
    }
`

const StyledIcon = styled.img`
    height: 24px; 
    margin-left: ${props => props.ml ? '10px' : 0};
    margin-bottom: ${props => props.mb ? '-2px' : 0};

    @media(max-width: 460px) {
        height: 18px;
    }
`

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

    return (
        <>
        <MainLayout>
            <table style={{margin: '0 auto', borderSpacing: 0, boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                <tbody>
                <tr>
                    <StyledTh>Photo</StyledTh>
                    <StyledTh>Vehicle</StyledTh>
                    <StyledTh>Price PLN</StyledTh>
                    <StyledTh>Action</StyledTh>
                </tr>
                {motorcycle && motorcycle.map(item => (
                    <tr key={item.id} style={{backgroundColor: '#fff'}}>
                        <StyledTd>
                            <StyledImg src={item.photoURL || temp} />
                        </StyledTd>
                        <StyledTd>
                            <VehicleContainer>
                                <p style={{fontWeight: 700}}>{item.name}</p>
                                <p style={{fontSize: '0.8rem'}}>{item.description}</p>
                                </VehicleContainer>
                            </StyledTd>
                        <StyledTd>{item.price}</StyledTd>
                        <StyledTd>
                            <StyledButton onClick={() => {
                                setContext('edit')
                                handleEdit(item.id)
                                    }
                                }
                                ><StyledIcon src={editIcon} />
                            </StyledButton>
                            <StyledButton 
                                onClick={() => handleDelete(item.id)}>
                                <StyledIcon mb ml src={deleteIcon} />
                            </StyledButton>
                        </StyledTd>
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