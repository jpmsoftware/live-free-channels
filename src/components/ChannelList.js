import React from 'react';
import Channel from './Channel';
import data from '../channels.json';

function ChannelList() {
  return (
    <div className='channel-list'>
      {
        data.map((channel) => (
          <Channel key={channel.id} channel={channel} />
        ))
      }
    </div>
  )
}

export default ChannelList;