import styled from "styled-components"
import plusIcon from '../../../../assets/images/plus.svg'


export const ButtonIcon = styled.button`
    position: fixed;
    bottom: 40px;
    right: 40px;
    height: 67px;
    width: 67px;
    color: white;
    box-shadow: 0 5px 20px -10px hsla(0, 0%, 0%, 0.1);
    background-image: url(${plusIcon});
    background-size: 35%;
    background-repeat: no-repeat;
    background-color: #f2aa4cff;
    background-position: center center;
    border: none;
    border-radius: 50%;
    z-index: 999;
    outline: none;
    transform: rotate(${({ isDrawerVisible }) => (isDrawerVisible ? '45deg' : '0')});
    transition: transform 0.5s ease-in-out;

  :hover {
    cursor: pointer;
  }
`