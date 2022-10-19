import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg'

// Routes
import { routes } from './routes';



export const Navigation = () => {
  return (
    // Need Suspense to says to React that we are using lazy loading
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout"> 
            <nav>
                <img src={logo} alt="React Logo"/>
                <ul>
                  
                  {
                    routes.map( ({to, name}) => 
                      (
                        <li key={to}>
                            <NavLink 
                              to={to} 
                              className={ ({isActive}) => isActive ? 'nav-active' : '' }>
                                {name}
                            </NavLink>
                        </li>
                      ))
                  }
                </ul>
            </nav>

            <Routes>
              {
                routes.map( ({path, Component, to}) =>(
                  <Route 
                    key={ to }
                    path={ path } 
                    element={<Component/>} 
                    />
                ))
              }
              {/* did not found any available endpoint */}
              <Route path="/*" element={<Navigate to={ routes[0].to} replace />} />
            </Routes>
        </div>
      </BrowserRouter>

    </Suspense>
  )
}
