import React, { useEffect } from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { addItemStart, loadDataStart, updateItemStart } from "../../actions";

const StyledWrapper = styled.div`
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

  @media (max-width: 600px) {
    padding: 40px 20px;
    width: 320px;
  }
`;

const StyledHeading = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: auto;
  gap: 20px;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
`

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 0;
  font-weight: 700;
  font-weight: 1rem;
  text-transform: uppercase;

  :hover {
    background-color: #414141;
    color: white;
    cursor: pointer;
  }
`


const Drawer = ({ isVisible, handleClose, formValue, setFormValue, context, id }) => {
    const dispatch = useDispatch()

    const { name, description, price, photoURL } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && price) {
          if (context === 'add') {
            dispatch(addItemStart(formValue))
          }
          else {
            dispatch(updateItemStart({id, formValue}))
          }
          handleClose()
          setTimeout(() => dispatch(loadDataStart()), 500)
        }
    }
    const handleInputChange = (e) => {
        setFormValue({
            ...formValue, [e.target.name]: e.target.value
        })
    }

    return (
        <StyledWrapper isVisible={isVisible}>
            <StyledHeading>{context === 'add' ? "Add new Item" : "Edit item"}</StyledHeading>
    
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput 
                    value={name}
                    required
                    type='text'
                    onChange={handleInputChange}
                    name='name'
                    placeholder="Name*"
                />
                <StyledInput 
                    value={description}
                    type='text'
                    onChange={handleInputChange}
                    name='description'
                    placeholder="Description"
                />
                <StyledInput 
                    value={price}
                    required
                    type='number'
                    onChange={handleInputChange}
                    name='price'
                    placeholder="Price*"
                />
                 <StyledInput 
                    value={photoURL}
                    type='text'
                    onChange={handleInputChange}
                    name='photo'
                    placeholder="Photo URL"
                />
                <p>*Required</p>
                <StyledButton
                    type="submit"
                >Submit</StyledButton>
            </StyledForm>
        </StyledWrapper>
    )
}

export default Drawer