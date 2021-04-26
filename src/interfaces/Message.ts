import { User } from "./User";
import { Channel } from './Channel'

export interface Message {
    body: string
    timestamp: Date
    user: User
    channel: Channel
}