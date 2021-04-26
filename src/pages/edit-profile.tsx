import { ChannelMenu } from '../components/ChannelMenu'
import { Channel } from '../interfaces/Channel'
import { User } from '../interfaces/User'
import { mockUsers } from '../data/users'
import { mockInterests } from '../data/interests'
import styled, { css } from 'styled-components'
import { SourceSansProFont, LoraFont } from '../styles/fonts'
import { DefaultPadding } from '../styles/global-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faArrowLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Interests } from '../components/Interests'
import { useEffect, useState } from 'react'
import axios from 'axios'

type ThumbnailProps = {
    backgroundImage?: string
}

export const EditProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

`

/* ${ SourceSansProFont }; */


export const HeaderRow = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;

    svg {
        left: 0.5rem;
        position: absolute;
    }
`

export const Save = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    color: #A03271;
    position: absolute;
    right: 1.5rem;
    font-size: 0.8rem;
`

export const EditProfileTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    ${ LoraFont };
    font-weight: 700;
    font-size: 1.2rem;
`

export const PhotoContainer = styled.div`
    background-color: #e5e5e5;
    margin-top: 1rem;
`

export const ThumbnailContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const PhotoEx = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`

export const ExistingThumbnail = styled.div<ThumbnailProps>`
    position: relative;
    width: 7rem;
    height: 7rem;
    margin: 1rem 0.5rem;
    border-radius: 2rem;
    background-repeat: no-repeat;
    background-position: center;
    ${ (props: any) => props.backgroundImage ? `background-image: url(${props.backgroundImage})` : '' };

    svg {
        position: absolute;
        right: 0;
        top: 0;
        color: red;
    }
`

export const AddThumbnail = styled.div`
    position: relative;
    width: 7rem;
    height: 7rem;
    margin: 1rem 0.5rem;
    border: 2px dotted #777;
    border-radius: 2rem;
    background-color: #c5c5c5;

    svg {
        position: absolute;
        top: 35%;
        left: 38%;
        width: 2rem !important;
        height: 2rem;
        color: #666;
    }
`

export const AddPhotoSubTitle = styled.div`
    color: #666;
    font-size: 0.5rem;
`

export const InputContainer = styled.div`
    padding: 0 1rem;
    margin: 0.5rem 0;
`

export const EditLabel = styled.label`
    text-align: left;
    display: block;
    font-weight: 700;
    font-size: 0.65rem;
    margin-bottom: 0.3rem;
`

export const EditInput = styled.input`
    width: calc(100% - 2rem);
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 0 0.65rem 0 0;
    ${ SourceSansProFont };
`

async function fetchUser(setUser: any) {
    const result = await axios(
        'http://localhost:5000/user/3a374bf1-a411-43a7-b9d4-77fb2a068aca',
        );
    console.log(result.data)
    setUser(result.data);
}

const EditProfile = () => {
    const [user, setUser] = useState({} as User);

    useEffect(() => { fetchUser(setUser)}, [])

    return (
        <EditProfileContainer>
            <HeaderRow>
                <FontAwesomeIcon icon={faArrowLeft}/>
                <EditProfileTitle>Edit Profile</EditProfileTitle>
                <Save>Save</Save>
            </HeaderRow>
            <PhotoContainer>
                <AddPhotoSubTitle>
                    Add or remove profile photo
                </AddPhotoSubTitle>
                <ThumbnailContainer>
                    <ExistingThumbnail backgroundImage={user.avatar}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </ExistingThumbnail>
                    <AddThumbnail>
                        <FontAwesomeIcon icon={faPlusCircle}/>
                    </AddThumbnail>
                </ThumbnailContainer>
            </PhotoContainer>
            <InputContainer>
                <EditLabel htmlFor="aboutMe">
                    Display Name
                </EditLabel>
                <EditInput id="aboutMe" placeholder="Add some short info about yourself" value={user.displayName}/>
            </InputContainer>
            <InputContainer>
                <EditLabel htmlFor="aboutMe">
                    About Me
                </EditLabel>
                <EditInput id="aboutMe" placeholder="Add some short info about yourself" value={user.bio}/>
            </InputContainer>
            <InputContainer>
                <EditLabel htmlFor="myWork">
                    My Work
                </EditLabel>
                <EditInput id="myWork" placeholder="Your current job" />
            </InputContainer>
            <InputContainer>
                <EditLabel htmlFor="mySchool">
                    My School
                </EditLabel>
                <EditInput id="mySchool" placeholder="Your current school" />
            </InputContainer>
            <InputContainer>
                <EditLabel htmlFor="myHome">
                    Living In
                </EditLabel>
                <EditInput id="myHome" placeholder="Add city" />
            </InputContainer>
            <InputContainer>
                <EditLabel htmlFor="myInterests">
                    Interest/Hobbies
                </EditLabel>
                <EditInput id="myHome" placeholder="Add interests" />
            </InputContainer>
            <Interests interests={user.interests} edit={true} />
        </EditProfileContainer>
    )
  }

  export default EditProfile