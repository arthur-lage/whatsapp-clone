import React from 'react'

import { Container } from './styles'

const SearchForChat: React.FC = () => {
    return (
        <Container>
            <input type="text" placeholder='Search or start new chat' />
        </Container>
    )
}

export default SearchForChat