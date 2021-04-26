import axios from 'axios'
import { useEffect, useState, FormEvent } from 'react'
import { Message } from '../interfaces/Message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faArrowLeft, faBookmark } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { format } from 'date-fns'

export const PublicChatContainer = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    overflow: scroll;
`

export const Banner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #FFC700;

    svg {
        margin: 1rem 0.5rem 0.5rem 0.5rem;

        &:nth-of-type(2) {
            margin: 1rem 1.5rem 0 0;
        }
    }
`

export const ChannelTitle = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const ChannelName = styled.span`
    font-size: 1rem;
`

export const ChannelLocation = styled.span`
    font-size: 0.75rem;
    color: #666;
`

export const MessageContainer = styled.div`
    margin: 0.5rem;

    &:nth-child(n + 1) {
        margin: 0.5rem 0.5rem 0.5rem 2rem;
    }
`

export const UserInfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const Thumbnail = styled.span`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
`

export const DisplayName = styled.span`
    font-weight: 400;
    color: #666;
    margin: 0.5rem 0.5rem 0 0.5rem;
`

export const Time = styled.div`
    margin: 0.5rem 0.5rem 0 0.5rem;
    color: #b7b7b7;
`

export const MessageText = styled.div`
    text-align: left;
    padding: 0.5rem 1.25rem;
    background-color: #FFC700;
    border-radius: 2rem;
`

export const SearchBar = styled.input`
    width: calc(100% - 4.5rem);
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 0 auto;
`

export const SendButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1rem;
    background-color: #FFC700;
`

export const InputContainers = styled.div`
    position: fixed;
    display: flex;
    bottom: 0.7rem;
    width: 100%;
    /* border-radius: 1rem;
    background-color: #FFC700; */
`

const PublicChat = () => {

    const [messages, setMessages] = useState()
    const [messageText, setMessageText] = useState<string>()

    useEffect(() => {

        axios('http://localhost:5000/messages/cincinnati/programming')
        .then((response) => {
            if (response.status === 200) {
                setMessages(response.data)
            }
        });

      }, [])

    const data: Array<Message> = messages || []

    async function sendClick() {
        axios.post('http://localhost:5000/messages/cincinnati/programming', 
            {
                body: messageText,
                user: "26a15a2b-837a-478d-be07-8d3d865c6ed3",
            }
        )
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <PublicChatContainer>
            <Banner>
                <FontAwesomeIcon icon={faArrowLeft}/>
                <ChannelTitle>
                    <ChannelName>
                        {data.length && data[0].channel.interest}
                    </ChannelName>
                    <ChannelLocation>
                        {data.length && data[0].channel.location}
                    </ChannelLocation>
                </ChannelTitle>
                <FontAwesomeIcon icon={faBookmark}/>
            </Banner>
            {
                data && data.map((message: Message) => (
                <MessageContainer>
                    <UserInfoContainer>
                        { message.user.avatar &&  <Thumbnail/>}
                        <DisplayName>{message.user.displayName}</DisplayName>
                        <Time>{message.timestamp && format(new Date(message.timestamp), 'MM-dd hh:mm')}</Time>
                    </UserInfoContainer>
                    <MessageText>
                        { message.body }
                    </MessageText>
                </MessageContainer>
                ))
            }
            <InputContainers>
                <SearchBar placeholder="enter your message" onChange={(e: FormEvent<HTMLInputElement>) => setMessageText(e.currentTarget.value)}/>
                <SendButton onClick={() => { sendClick() }}>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </SendButton>
            </InputContainers>
        </PublicChatContainer>
    )
  }

  export default PublicChat