import React from 'react';
import Inner from './Inner';

const Nav = () => {
  return (
    <header>
      <Inner>
        <span className="logo">
          <svg width="50" height="50" viewBox="0 0 140 140">
            <g transform="translate(-43 -17)">
              <rect width="140" height="140" rx="15" transform="translate(43 17)"/>
              <text transform="translate(115 141)" fill="#fff" font-size="58" fontFamily="Lato-Bold, Lato" fontWeight="700"><tspan x="0" y="0">M</tspan></text>
            </g>
          </svg>
          <span>
            Minimal To Do List.
          </span>
        </span>

        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/ispykenny" target="_blank">By @ispykenny</a>
            </li>
          </ul>
        </nav>
      </Inner>
    </header>
  )
}

export default Nav;