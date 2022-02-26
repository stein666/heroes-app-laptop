import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DcScreem } from '../components/dc/DcScreem'
import { LoginScreem } from '../components/login/LoginScreem'
import { MarvelScreem } from '../components/marvel/MarvelScreem'
import { SearchScreem } from '../components/search/SearchScreem'
import { NavBar } from '../components/ui/NavBar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path="/" element={<MarvelScreem />} />
              <Route path="/marvel" element={<MarvelScreem />} />
              <Route path="/dc" element={<DcScreem />} />
              <Route path="/search" element={<SearchScreem />} />
              <Route path="/login" element={<LoginScreem />} />
          </Routes>
    </BrowserRouter>
  )
}
