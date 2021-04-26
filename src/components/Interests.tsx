import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { Message } from '../interfaces/Message'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

type InterestsProps = {
    interests: any
    edit?: boolean
}

type InterestProp = {
    edit?: boolean
}

export const InterestsContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
`

export const Interest = styled.div<InterestProp>`
    position: relative;
    display: inline-block;
    margin: 0.5rem;
    padding: 0.3rem 0.5rem;
    background-color: #FFC700;
    border-radius: 1rem;
    font-size: 0.75rem;

    svg {
        display: ${ (props: any) => props.edit ? 'block' : 'none' };
        position: absolute;
        right: -0.3rem;
        top: -0.3rem;
        color: red;
        height: 1rem;
        width: 1rem !important;
    }
`

export const Interests = ({ interests, edit }: InterestsProps) => {
    return (
        <InterestsContainer>
        { interests && interests.map((interest: any) => (
            <Interest key={interest} edit={edit}>
                <FontAwesomeIcon icon={faTimesCircle}/>
                { interest }
            </Interest>
        ))}
    </InterestsContainer>
    )

}