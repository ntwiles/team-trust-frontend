import styled, { css } from 'styled-components'
import { Message } from '../interfaces/Message'
import { PublicMessage } from './PublicMessage'

type PublicChatMessagingBoardProps = {
    messages: Message[]
}

export const PublicChatMessagingBoardContainer = styled.div`
  width: 80%;
`

export const MessageContainer = styled.div``


export const PublicChatMessagingBoard = ({ messages }: PublicChatMessagingBoardProps) => {
    console.log('messages: ', messages)

    return (
        <PublicChatMessagingBoardContainer>
            <MessageContainer>
                {
                    messages && messages.map((message: any) => (
                        <PublicMessage message={message} />
                    ))
                }
            </MessageContainer>
        </PublicChatMessagingBoardContainer>
    )

}
