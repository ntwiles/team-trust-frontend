import styled, { css } from 'styled-components'
import { Message } from '../interfaces/Message'

type MessageProps = {
    message: Message
}

export const MessageContainer = styled.div`
    padding: 1rem;
    height: 3rem;
`

export const Username = styled.span`
    font-weight: 700;
`

export const ThumbnailImage = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border: 1px solid red;
`

export const TimeCreated = styled.span`
    font-size: 0.8rem;
    color: #777;
`

export const MessageText = styled.div`

`

// export const MessageComp = styled.div``

export const PublicMessage = ({ message }: MessageProps) => {
    console.log('MESSAGE: ', message)

    return (
        <MessageContainer>
            {/* <ThumbnailImage/>
            <Username>{ message.author.username }</Username>
            <TimeCreated>{ message.createdDate }</TimeCreated>
            <MessageText>{ message.messageText }</MessageText> */}
        </MessageContainer>
    )

}