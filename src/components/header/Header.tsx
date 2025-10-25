import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
    const dispatch = useDispatch()

    const getActiveClass = ({isActive}: {isActive: boolean}): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <NavLink 
                to="/" 
                className={getActiveClass}
                >ToDo</NavLink>
                <NavLink to="/list" className={getActiveClass}>List</NavLink>
                {/*<a href="/" className={classes.link}>Home</a>
                <a href="/todo" className={classes.link}>ToDo</a>*/}
                <div className={classes.toggleButton}>
                    <button onClick={() => dispatch(toggleThemeAction())}>toggle</button>
                </div>
            </div>
        </header>
    )
}