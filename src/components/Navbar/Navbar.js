
import styled from 'styled-components';
import { BrowserRouter as Router,Link } from 'react-router-dom';


//CSS

const NavbarDiv=styled.div`
overflow: hidden;
background-color:white;
position:fixed;
bottom: 0;
width: 100%;
height:65px;
margin:auto;` 

const MenuIcons=styled.ul`
display:flex;
justify-content:space-evenly`


function Navbar() {

    return (
        <NavbarDiv>
            
                <MenuIcons>
                 <Link><li>Cycle</li></Link>
                   <Link><li>Selfcare</li></Link>
                   <Link><li>+</li></Link>
                    <Link><li>Diet</li></Link>
                    <Link><li>News</li></Link>
            </MenuIcons>
        </NavbarDiv>
    )

}


export default Navbar;