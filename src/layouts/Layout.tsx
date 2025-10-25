import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { RootState } from "../store"
import { useSelector } from "react-redux"

export const Layout = () => {

    const theme = useSelector((state: RootState) => state.themeList.theme)


    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Outlet />
            </ThemeProvider>
        </>
    )
}