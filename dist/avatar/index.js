import React, { useState, useEffect } from 'react';
import uniqueId from '../uniqueId';
import Backdrop from './backdrop';
import Accessories from './top/accessories';
import Clothe from './clothes';
import Face from './face';
import Skin from './Skin';
import Top from './top';
import { registeredGradients } from '../index';
export const Avatar = (props) => {
    const { className, style, uid: propUid, animationDelay: propAnimationDelay, animated = true } = props;
    const [uid, setUid] = useState(propUid || 'error');
    const [animationDelay, setAnimationDelay] = useState(propAnimationDelay || '0s');
    useEffect(() => {
        if (propUid) {
            setUid(propUid);
        }
        else if (uid === 'error') {
            setUid(uniqueId('avatar-'));
        }
    }, [propUid]);
    useEffect(() => {
        if (propAnimationDelay) {
            setAnimationDelay(propAnimationDelay);
        }
        else if (animationDelay === '0s') {
            const delay = Math.random() * 5;
            setAnimationDelay(`${delay}s`);
        }
    }, [propAnimationDelay]);
    return (React.createElement("svg", { "data-uid": uid, style: style, className: className, width: "264px", height: "280px", viewBox: "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        React.createElement("desc", null, "Created with getavataaars.com"),
        React.createElement("defs", null,
            React.createElement("path", { d: "M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z", id: `${uid}-path-skin` }),
            Array.from(registeredGradients.entries()).map(([gradName, config]) => {
                const Tag = config.type === 'radial' ? 'radialGradient' : 'linearGradient';
                const id = `${uid}-gradient-${gradName}`;
                return (React.createElement(Tag, { key: gradName, id: id, ...config.attrs }, config.stops.map((stop, i) => (React.createElement("stop", { key: i, offset: stop.offset, stopColor: stop.color, stopOpacity: stop.opacity !== undefined ? stop.opacity : undefined })))));
            })),
        React.createElement("g", { id: `${uid}-Avataaar${animated ? '' : '-Static'}`, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", style: { animationDelay: animationDelay } },
            React.createElement("g", { transform: "translate(-825.000000, -1100.000000)", id: `${uid}-Avataaar/Backdrop` },
                React.createElement("g", { transform: "translate(825.000000, 1100.000000)" },
                    React.createElement(Backdrop, { uid: uid }),
                    React.createElement("g", { id: `${uid}-Person`, strokeWidth: "1", fillRule: "evenodd", mask: `url(#${uid}-Backdrop-Mask)` },
                        React.createElement("g", { id: `${uid}-Body`, transform: "translate(32.000000, 36.000000)" },
                            React.createElement("mask", { id: `${uid}-Skin-Color-Mask`, fill: "white" },
                                React.createElement("use", { xlinkHref: `#${uid}-path-skin` })),
                            React.createElement("use", { fill: "#D0C6AC", xlinkHref: `#${uid}-path-skin` }),
                            React.createElement(Skin, { uid: uid }),
                            React.createElement("path", { d: "M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z", id: `${uid}-Neck-Shadow`, fillOpacity: "0.100000001", fill: "#000000", mask: `url(#${uid}-Skin-Color-Mask)` })),
                        React.createElement(Clothe, { uid: uid }),
                        React.createElement(Face, { uid: uid }),
                        React.createElement(Top, { uid: uid },
                            React.createElement(Accessories, { uid: uid }))))))));
};
export default Avatar;
