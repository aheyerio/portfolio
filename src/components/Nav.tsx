import React from 'react';

const Nav = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <a href="/"
                           className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <span className="fs-4">full</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="26.000000pt" height="28.000000pt" viewBox="0 0 262.000000 286.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,286.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M830 1914 c-256 -151 -477 -289 -492 -305 -33 -34 -34 -49 -10 -77 27 -32 952 -552 982 -552 26 0 939 515 971 548 30 30 32 58 7 85 -27 30 -954 577 -978 577 -8 0 -224 -124 -480 -276z m905 -114 c198 -116 363 -214 367 -218 7 -7 -778 -462 -796 -462 -20 0 -795 445 -788 452 4 4 185 113 402 242 l395 234 30 -18 c17 -10 192 -113 390 -230z"/>
                                    <path d="M1770 1009 c-250 -144 -459 -262 -465 -262 -5 1 -212 116 -460 257 -247 141 -460 256 -472 256 -24 0 -63 -43 -63 -70 0 -9 8 -25 19 -34 39 -35 957 -549 981 -549 32 0 935 515 973 554 15 16 27 38 27 48 0 22 -44 61 -69 61 -9 0 -221 -118 -471 -261z"/>
                                    <path d="M1765 635 l-460 -264 -40 23 c-312 182 -878 496 -893 496 -23 0 -62 -44 -62 -70 0 -9 10 -26 23 -37 40 -37 949 -546 976 -547 17 0 196 97 503 273 504 290 516 298 489 350 -12 22 -42 41 -63 41 -7 -1 -220 -120 -473 -265z"/>
                                </g>
                            </svg>
                            <span className="fs-4">heyer.me</span>
                        </a>
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="/#" className="nav-link active"
                                                        aria-current="page">Projects</a></li>
                            <li className="nav-item"><a href="/#" className="nav-link">Resume</a></li>
                            <li className="nav-item"><a href="/#" className="nav-link">Gatitas</a></li>
                        </ul>
                    </header>
                </div>

            </main>
        </div>
    );
};

export default Nav;