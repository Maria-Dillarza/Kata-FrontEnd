import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({titulo}) => {

const onClick = () => {
    console.log('click')
}

    return (
        <header className='header'>
            <h1 style = {{color: 'pink'}}> {titulo}</h1>
            <Button color = 'purple' text = 'Nuevo' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    titulo:'default'
}

Header.propTypes = {
    titulo: PropTypes.string
}



export default Header