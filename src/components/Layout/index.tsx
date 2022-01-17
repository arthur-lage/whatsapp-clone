import React from 'react'

import CurrentlyChatting from '../CurrentlyChatting'
import UserPanel from '../UserPanel'
import SearchForChat from '../SearchForChat'

import { Grid } from './styles'

const Layout: React.FC = () => {
    return (
        <Grid>
            <UserPanel />
            <CurrentlyChatting />
            <SearchForChat />
        </Grid>
    )
}

export default Layout 
