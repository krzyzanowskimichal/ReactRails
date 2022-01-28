import React, { useState } from "react";
import styled from "styled-components"
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addItemStart, loadDataStart } from "../../actions";

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



const InputContainer = styled("div")`
  margin-bottom: 20px;
`;

const StyledField = styled(Field)`
  font-family: "InconsolataLGCmarkup";
  width: 100%;
  padding: 12px 12px;
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  :focus {
    outline: none;
  }
`;

const initialValues = {
    name: "",
    description: "",
    price: ""
}

const Drawer = ({ isVisible, handleClose, actionType }) => {
    const dispatch = useDispatch()

    const [formValue, setFormValue] = useState(initialValues)
    const { name, description, price } = formValue
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && description && price) {
            dispatch(addItemStart(formValue))
            setTimeout(dispatch(loadDataStart()), 500)
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
            <h4>Add newa item</h4>
            <Formik
                initialValues={{...initialValues}}
                validate={values => {
                    const errors = {};
          
                    if (!values.name) {
                      errors.name = 'Name is required';
                    }
          
                    if (!values.description) {
                      errors.description = 'Description is required';
                    }
          
                    if (!values.price) {
                      errors.price = 'Price is required';
                    }
                    
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit()
                    resetForm()
                }}
            >
                <Form style={{ display: "flex", flexDirection: "column" }}>
              <InputContainer>
                <StyledField name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" />
              </InputContainer>
              <InputContainer>
                <StyledField name="description" type="text" placeholder="Description" />
                <ErrorMessage name="description" />
              </InputContainer>
              <InputContainer>
                <StyledField name="price" type="number" placeholder="Price" />
                <ErrorMessage name="price" />
              </InputContainer>
              <button type="submit">Submit</button>
            </Form>

            </Formik>
            {/* <StyledForm onSubmit={handleSubmit}>
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
            </StyledForm> */}
        </StyledWrapper>
    )
}

export default Drawer