import React from 'react';

const Map = () => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d632.784612267126!2d28.85692646477782!3d41.02420901472691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1741186252641!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map showing coffee shop location"
            ></iframe>
        </div>
    );
};

export default Map;

