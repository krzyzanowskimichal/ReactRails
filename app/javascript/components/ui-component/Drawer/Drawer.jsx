import React, { useEffect } from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { addItemStart, loadDataStart, updateItemStart } from "../../actions";

const StyledWrapper = styled.div`
  border-left: 10px solid;
  z-index: 99;
  position: fixed;
  padding: 100px 50px;
  background-color: white;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: 0;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '110%')});
  transition: transform 0.5s ease-in-out;
  top: 0;
  height: 100vh;
  width: 600px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: auto;
`;


const Drawer = ({ isVisible, handleClose, formValue, setFormValue, context, id }) => {
    const dispatch = useDispatch()

    const { name, description, price } = formValue

    // useEffect(() => {
    //   setFormValue(initialValues)
    // }, [isVisible])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && description && price) {
          if (context === 'add') {
            dispatch(addItemStart(formValue))
          }
          else {
            dispatch(updateItemStart({id, formValue}))
          }
          dispatch(loadDataStart())
          handleClose()

        }
    }
    const handleInputChange = (e) => {
        setFormValue({
            ...formValue, [e.target.name]: e.target.value
        })
    }

    return (
        <StyledWrapper isVisible={isVisible}>
            <h4>{context === 'add' ? "Add new Item" : "Edit item"}</h4>
    
            <StyledForm onSubmit={handleSubmit}>
                <input 
                    value={name}
                    required
                    type='text'
                    onChange={handleInputChange}
                    name='name'
                    placeholder="Name"
                />
                <input 
                    value={description}
                    required
                    type='text'
                    onChange={handleInputChange}
                    name='description'
                    placeholder="Description"
                />
                <input 
                    value={price}
                    required
                    type='number'
                    onChange={handleInputChange}
                    name='price'
                    placeholder="price"
                />
                <button
                    type="submit"
                >Submit</button>
            </StyledForm>
        </StyledWrapper>
    )
}

export default Drawer