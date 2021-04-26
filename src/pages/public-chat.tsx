import { ChannelMenu } from '../components/ChannelMenu'
import { Channel } from '../interfaces/Channel'
import { User } from '../interfaces/User'
import { Message } from '../interfaces/Message'
import { mockMessages } from '../data/messages'
import { PublicChatMessagingBoard } from '../components/PublicChatMessagingBoard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faArrowLeft, faBookmark } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'
import { DisplayName } from './profile'

export const PublicChatContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

export const Banner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;

    svg {
        margin: 0.5rem;

        &:nth-of-type(2) {
            margin: 0.5rem 1.5rem 0 0;
        }
    }
`

export const ChannelTitle = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;

    /* svg {
        left: 0.5rem;
        position: absolute;
    } */
`

export const ChannelName = styled.span`
    font-size: 1rem;
`

export const ChannelLocation = styled.span`
    font-size: 0.75rem;
    color: #666;
`

export const MessageContainer = styled.div``

export const UserInfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const Thumbnail = styled.span`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
`

export const displayName = styled.span`
    font-size: 0.75rem;
    font-weight: 400;
    color: #666;
    margin: 0 0.5rem;
`

export const Time = styled.div``

export const Text = styled.div``


const PublicChat = () => {

    return (
        <PublicChatContainer>
            <Banner>
                <FontAwesomeIcon icon={faArrowLeft}/>
                <ChannelTitle>
                    <ChannelName>
                        {mockMessages[0].channel.interest}
                    </ChannelName>
                    <ChannelLocation>
                        {mockMessages[0].channel.location}
                    </ChannelLocation>
                </ChannelTitle>
                <FontAwesomeIcon icon={faBookmark}/>
            </Banner>
            {
                mockMessages && mockMessages.map((message: any) => (
                <MessageContainer>
                    <UserInfoContainer>
                        <Thumbnail>C</Thumbnail>
                        <DisplayName>colinFerris314</DisplayName>
                        <Time>3:00P</Time>
                    </UserInfoContainer>
                </MessageContainer>
                ))
            }

        </PublicChatContainer>
    )
  }

  export default PublicChat