import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { Channel } from '../interfaces/Channel'
import { User } from '../interfaces/User'
import { mockUsers } from '../data/users'
import { mockInterests } from '../data/interests'
import { mockLocations } from '../data/locations'
import styled from 'styled-components'
import { SourceSansProFont } from '../styles/fonts'
import { DefaultPadding } from '../styles/global-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faSadTear, faTired, faAngry } from '@fortawesome/free-solid-svg-icons'
import { Interests } from '../components/Interests'

export const ConnectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    ${ SourceSansProFont };
`

export const ConnectTitle = styled.div`
    margin: 1rem auto;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    ${ SourceSansProFont };
`

export const Info = styled.div`
    font-weight: 400;
    font-size: 0.75rem;
    margin: 0.5rem 0;
    text-align: center;
    padding: 0 4rem;
    ${ SourceSansProFont };
`

export const ConnectButton = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    width: 10rem;
    background-color: #FFC700;
    border: 1px solid #000;
    margin: 1rem auto;
    border-radius: 0.8rem;
    ${ SourceSansProFont };
`

export const FeelingTitle = styled.div`
    font-weight: 400;
    font-size: 1.3rem;
    ${ SourceSansProFont };
`

export const FeelingContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1rem 0;
`

export const FeelingBlock = styled.div`
    width: 35%;
    padding: 0.5rem;
    margin: 0 auto;
`

export const EmojiContainer = styled.div`
    position: relative;
    border-radius: 1rem;
    width: 8rem;
    height: 8rem;
    background-color: #979797;
    margin: 0 auto;

    svg {
        top: 2rem;
        left: 2rem;
        position: absolute;
        width: 4rem !important;
        height: 4rem;
        color: #fff;
    }
`

export const EmojiLabel = styled.div`
    padding: 0.3rem 0;
    text-align: center;
    color: #455154;
    font-size: 0.875rem;
`

export const SearchTitle = styled(ConnectTitle)``

export const SearchBar = styled.input`
    width: calc(100% - 4.5rem);
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin: 0 auto;
    ${ SourceSansProFont };
`

export const SearchBarLocation = styled(SearchBar)`
    margin-bottom: 1rem;
`

type LocationListProps = {
    display?: boolean
}

    /* display: ${(props: any) => props.display ? 'block' : 'none'}; */

export const LocationList = styled.ul<LocationListProps>`
    display: ${(props: any) => props.display ? 'block' : 'none'};
    width: calc(100% - 3rem);
    position: absolute;
    margin: 0 1.5rem;
    position: absolute;
    z-index: 10;
    top: 4rem;
    background: #fff;
    padding: 0;
`

export const LocationListItem = styled.li`
    list-style: none;
    padding: 0.5rem 1rem;
`

const LocationSelect = styled.select`
  width: calc(100% - 4.5rem);
  padding: 0.3rem 0.6rem;
  margin: 0.5rem 0;
`

export const SearchContainer = styled.div`
    position: relative;
`

const Connect = () => {

    const [searchText, setSearchText] = useState('')
    const [locationText, setLocationText] = useState('')
    const [searchResults, setSearchResults] = useState<Array<string>>()
    const [displayResults, setDisplayResults] = useState<Array<string>>()
    const [searchLocationResults, setSearchLocationResults] = useState<Array<string>>(mockLocations)
    const [displayLocationResults, setDisplayLocationResults] = useState<Array<string>>(mockLocations)
    const [locationFocus, setLocationFocus] = useState(false)

    const initSearchResults = () => {
        const interestsBasedOnLocation = mockInterests.filter((mock: any) => {
            // console.log('mock: ', mock.location?.toLowerCase())
            // console.log('locationText: ', locationText.toLowerCase())
            return mock.location?.toLowerCase() === locationText.toLowerCase()
        })
        // console.log('interests based on location: ', interestsBasedOnLocation)
        const interests = interestsBasedOnLocation.map((interest: any) => {
            return interest.interest
        })
        setSearchResults(interests)
        setDisplayResults(interests)

        setSearchLocationResults(mockLocations)
        setDisplayLocationResults(mockLocations)
    }

    useEffect(() => {
        initSearchResults()
    }, [locationFocus])

    useEffect(() => {
        let handler: any = setTimeout(() => {
            if (searchResults) {
                // console.log('BEFORE: ', searchResults)
                const filteredResults = searchResults.filter((searchResult: string) => {
                    return searchResult.toLowerCase().startsWith(searchText)
                })
                // console.log('AFTER: ', filteredResults)
                setDisplayResults(filteredResults)
            }
        }, 500)

        return () => {
            clearTimeout(handler)
        }

    }, [searchText])

    useEffect(() => {
        let handler: any = setTimeout(() => {
            if (searchLocationResults) {
                const filteredResults = searchLocationResults.filter((searchResult: string) => {
                    return searchResult.toLowerCase().startsWith(locationText)
                })
                setDisplayLocationResults(filteredResults)
            }
        }, 500)

        return () => {
            clearTimeout(handler)
        }

    }, [locationText])

    const listItemClick = (e: any) => {
        setLocationText(e)
        updateLocationFocus(false)
        // initSearchResults()
    }

    const updateLocationText = (e: any) => {
        setLocationText(e)
    }

    const updateLocationFocus = (val: boolean) => {
        setLocationFocus(val)
        console.log(locationFocus)
    }

    // onFocus={() => updateLocationFocus(true)}

    return (
        <ConnectContainer>
            <ConnectTitle>
                Best Friends
            </ConnectTitle>
            <Info>
                Connect with people around your location and  
                connect  with People with similar Interests.
            </Info>
            <ConnectButton>
                Connect
            </ConnectButton>
            <FeelingTitle>
                I am feeling....
            </FeelingTitle>
            <FeelingContainer>
                <FeelingBlock>
                    <EmojiContainer>
                        <FontAwesomeIcon icon={faSmile}/>
                    </EmojiContainer>
                    <EmojiLabel>
                        Happy
                    </EmojiLabel>
                </FeelingBlock>
                <FeelingBlock>
                    <EmojiContainer>
                        <FontAwesomeIcon icon={faAngry}/>
                    </EmojiContainer>
                    <EmojiLabel>
                        Angry
                    </EmojiLabel>
                </FeelingBlock>
                <FeelingBlock>
                    <EmojiContainer>
                        <FontAwesomeIcon icon={faSadTear}/>
                    </EmojiContainer>
                    <EmojiLabel>
                        Sad
                    </EmojiLabel>
                </FeelingBlock>
                <FeelingBlock>
                    <EmojiContainer>
                        <FontAwesomeIcon icon={faTired}/>
                    </EmojiContainer>
                    <EmojiLabel>
                        Tired
                    </EmojiLabel>
                </FeelingBlock>
            </FeelingContainer>
            <SearchContainer>
                <FeelingTitle>
                    Search interests and hobbies
                </FeelingTitle>
                <SearchBarLocation placeholder="Select a location" value={locationText} onFocus={() => updateLocationFocus(true)} onChange={(e: FormEvent<HTMLInputElement>) => updateLocationText(e.currentTarget.value)}/>
                {displayLocationResults && 
                    <LocationList display={locationFocus}>
                        {
                            displayLocationResults.map((result: any) => (
                                <LocationListItem key={result} onClick={(e: any) => listItemClick(result)}>{result}</LocationListItem>
                            ))
                        }
                    </LocationList>
                }
                {/* <Interests interests={displayLocationResults} edit={false}/> */}
                <SearchBar placeholder="find interests" onChange={(e: FormEvent<HTMLInputElement>) => setSearchText(e.currentTarget.value)}/>
                <Interests interests={displayResults} edit={false}/>
            </SearchContainer>
        </ConnectContainer>
    )
  }

  export default Connect