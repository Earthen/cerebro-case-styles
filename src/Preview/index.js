import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loading, KeyboardNav, KeyboardNavItem } from 'cerebro-ui'
import styles from './styles.css'


class Preview extends Component {
  renderCases(cases) {
    const className = [
      styles.wrapper,
        this.props.cases
    ].join(' ');
    return (
      <div className={className}>
        <KeyboardNav>
          <ul className={styles.list}>
            {
              cases.map(s => (
                <KeyboardNavItem
                  key={s.id}
                  tagName={'li'}
                  onSelect={s.onSelect}
                >
                  {s.tittle}
                </KeyboardNavItem>
              ))
            }
          </ul>
        </KeyboardNav>
      </div>
    )
  }
  render() {
    const { cases } = this.props
    return (
        <div>
           {(cases) => this.renderCases(cases )}
        </div>
    )
  }
}

Preview.propTypes = {
  cases: PropTypes.array.isRequired,
};

export default Preview
