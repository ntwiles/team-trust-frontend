import styled, { css } from 'styled-components'
import { Channel } from '../interfaces/Channel'

type ChannelMenuProps = {
    channels: Channel[]
}

export const ChannelMenuContainer = styled.div`
  width: 20%;
  position: fixed;
  top: 60px;
  z-index: 10;
  background: #c2f2cf;
`

export const ChannelMenuTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
`

export const ChannelMenuItem = styled.div`
    font-weight: 700;
`

export const ChannelMenu = ({ channels }: ChannelMenuProps) => {

  return (
    <ChannelMenuContainer>
        <ChannelMenuTitle>
            Channels
        </ChannelMenuTitle>
        { channels && channels.map((channel: any) =>
            (
                <ChannelMenuItem>
                    { channel.channelName }
                </ChannelMenuItem>
            )
        )
        }
    </ChannelMenuContainer>
  )
}
