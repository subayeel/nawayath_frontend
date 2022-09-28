import React from 'react'
import { MessageContainer,MessageWrapper } from './MessageSection.elements'
import MessageCard from './MessageCard'
import { teamMsg,historyMsg,missionMsg } from '../../Data/messageData'

const MessageSection = () => {
  return (
    <>
        <MessageContainer>
            <MessageWrapper>
                <MessageCard {...teamMsg}/>
                <MessageCard {...missionMsg} />
                <MessageCard {...historyMsg}/>
            </MessageWrapper>
        </MessageContainer>
    </>
  )
}

export default MessageSection