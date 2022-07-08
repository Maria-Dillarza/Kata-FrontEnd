import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({titulo, onAdd, showAdd }) => {

const onClick = () => {
    console.log('click')
}

    return (
        <header className='header'>
            <h1 style = {{color: 'pink'}}> {titulo}</h1>
            <Button color = {showAdd ? 'purple' : 'pink'} text = {showAdd ? 'Close' : 'New'} onClick={onAdd}/>
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