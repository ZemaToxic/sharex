import React from 'react'

import './index.scss'

export function Footer () {
  return (
    <footer className="footer">
      <h4>
        &copy; {(new Date()).getFullYear()}
      </h4>
      <a
        href="https://github.com/zematoxic"
        target="_blank"
      >
        <h4>
          ZemaToxic
        </h4>
      </a>
      <a
        href="https://github.com/alex-taxiera/sharex"
        target="_blank"
      >
        <h4>
          {'<Source Code />'}
        </h4>
      </a>
    </footer>
  )
}
