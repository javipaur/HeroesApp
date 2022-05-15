import { Route, Routes } from "react-router-dom"
import { DcScreen } from "../components/dc/DcScreen"
import { HereosScreen } from "../components/heroes/HeroesScreen"
import { MarvelScreen } from "../components/marverl/MarvelScreen"
import { Navbar } from "../components/ui/Navbar"

export const DashboardRouters = () => {
  return (
    <>
    <Navbar/>

    <Routes>
          <Route path='marvel' element={<MarvelScreen />}></Route>
          <Route path='dc' element={<DcScreen />}></Route>
          <Route path='search' element={<DcScreen />}></Route>
          <Route path='heroes' element={<HereosScreen />}></Route>

          <Route path='/' element={<MarvelScreen />}></Route>
    </Routes>
    </>
  )
}
