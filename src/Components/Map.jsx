import React from 'react';

const Map = () => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.19225129204153!2d28.85499777174943!3d41.03536230285872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5489b383c93%3A0x1420c790e4d8b209!2sEspressolab%20Ba%C4%9Fc%C4%B1lar%20Meydan!5e0!3m2!1str!2str!4v1741253690766!5m2!1str!2str"
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

