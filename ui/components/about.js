import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <p style={{ width: "100%" }} className="text-center">
                        Bare Bones React is a minimalist web framework created by Senior Software Engineer
                         and YouTuber <a href="http://bit.ly/chrishawkes">Chris Hawkes</a> from Washington D.C.  Built with Express, React, SASS, and Bootstrap!
                    </p>
                </div>
            </div>
    )
}
}