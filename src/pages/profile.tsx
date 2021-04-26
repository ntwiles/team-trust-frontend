import { Channel } from '../interfaces/Channel'
import { User } from '../interfaces/User'
import { mockUsers } from '../data/users'
import { mockInterests } from '../data/interests'
import styled from 'styled-components'
import { SourceSansProFont } from '../styles/fonts'
import { DefaultPadding } from '../styles/global-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Interests } from '../components/Interests'

type ThumbnailProps = {
    backgroundImage?: string
}

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    ${ SourceSansProFont };
`

export const Thumbnail = styled.div<ThumbnailProps>`
    width: 7rem;
    height: 7rem;
    margin: 1rem auto;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-position: center;
    ${ (props: any) => props.backgroundImage ? `background-image: url(${props.backgroundImage})` : '' };
`

export const DisplayName = styled.div`
    font-weight: 900;
    font-size: 1.3rem;
    margin: 0.5rem 0;
`

export const Bio = styled.div`
    font-size: 0.875rem;
    ${ DefaultPadding };
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const SettingsEditButton = styled.button`
    display: inline-block;
    width: 8rem;
    padding: 1rem;
    margin: 1rem;
    color: #666;
    background-color: #EAEAEA;
    border: none;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-transform: uppercase;

    svg {
        margin-right: 0.5rem;
    }
`

const Profile = () => {

    const user: User = mockUsers[0]

    const channels: Channel[] = mockInterests

    return (
        <ProfileContainer>
            <Thumbnail backgroundImage={user.avatar}/>
            <DisplayName>{ user.displayName }</DisplayName>
            <Bio>{ user.bio }</Bio>
            <Interests interests={user.interests} edit={false} />
            <ButtonsContainer>
                <SettingsEditButton>
                <FontAwesomeIcon icon={faCog} />
                    Settings
                </SettingsEditButton>
                <SettingsEditButton>
                <FontAwesomeIcon icon={faEdit} />
                    Edit
                </SettingsEditButton>
            </ButtonsContainer>
        </ProfileContainer>
    )
  }

  export default Profile