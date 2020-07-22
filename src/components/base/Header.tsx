import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import { GrAppleAppStore } from 'react-icons/gr';

const Nav = styled.ul`
    height:60px;
    background: white;
    display: flex;
    align-items:center;
    padding-left:50px;
`
const GoTo = styled.li`
        display:flex; 
        align-items:center;
        border-bottom: 4px solid transparent;
        font-weight:700;
        &+&{
            margin-left:20px;
        }
        :hover{
                border-bottom:4px solid ${oc.blue[8]};
        }
        height:100%;

`;
const Logo = styled(Link)`
    display: flex;
    flex-flow: column;
    color: ${oc.cyan[7]};
    align-items:center;
    justify-content:center;
    
    margin-right: 50px;
    font-size: 2rem;
    cursor:pointer;
    p{
        font-size:0.8rem;
    }
`
function Header() {
    return (
        <Nav>
            <Logo to="/"><GrAppleAppStore /><p>stores</p></Logo>
            <GoTo><Link to="/">Home</Link></GoTo>
            <GoTo><Link to="/store">Store</Link></GoTo>
            <GoTo><Link to="/register">Register</Link></GoTo>
        </Nav>
    )
}

export default Header;