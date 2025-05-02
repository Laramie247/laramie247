import React from 'react';


const LiveStream = () => (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
            src="https://player.frontlayer.com/live/fl385281"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
            title="Laramie247 Live Stream"
        ></iframe>
    </div>
);

export default LiveStream;
