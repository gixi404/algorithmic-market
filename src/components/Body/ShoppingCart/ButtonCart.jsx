import { Link } from 'react-router-dom'
import styled from 'styled-components'
import IconoSVG from './ChangeCart'

function ButtonCart () {
    return (
        <SpecialLink to="/shoppingcart">
            <IconoSVG width="5vw" height="5vh" />
        </SpecialLink>
    )
}
export default ButtonCart

const SpecialLink = styled( Link )`
`;