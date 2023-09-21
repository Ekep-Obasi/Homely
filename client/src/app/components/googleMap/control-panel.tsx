import * as React from 'react';

const eventNames = ['onDragStart', 'onDrag', 'onDragEnd'];

function round5(value: number) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

function ControlPanel(props: {events: Record<string, any>}) {
  return (
    <div className="p-4 bg-slate">
      <h3>Draggable Marker</h3>
      <p>Try dragging the marker to another location.</p>
      <div>
        {eventNames.map(eventName => {
          const {events = {}} = props;
          const lngLat = events[eventName];
          return (
            <div key={eventName}>
              <strong>{eventName}:</strong>
              {lngLat ? `${round5(lngLat.lng)}, ${round5(lngLat.lat)}` : <em>null</em>}
            </div>
          );
        })}
      </div>
      <div className="source-link">
      
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);