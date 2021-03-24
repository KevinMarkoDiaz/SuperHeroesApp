import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/Heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRoutes = () => {
    return (
        <div>
            <Navbar />

            <div className="container mt-4">
                <Switch>
                    <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/marvel" component={MarvelScreen} />




                    <Redirect to="/marvel" />
                </Switch>

            </div>
        </div>
    )
}
