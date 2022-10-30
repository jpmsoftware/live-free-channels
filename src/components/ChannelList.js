import React from "react";
import Channel from "./Channel";

function ChannelList({ channels }) {
  return (
    <div className="channels-list">
      {
        channels.map((channel) => (
          <Channel key={channel.id} channel={channel} />
        ))
      }
    </div>
  )
}

export default ChannelList;