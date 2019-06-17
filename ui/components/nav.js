    import React from 'react';

    export default class Header extends React.Component {
        render() {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                    <a className="navbar-brand" href="#">Bare Bones React</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" target="blank" href="https://github.com/chawk/bare_bones_react">Contribute</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
        )
    }
}