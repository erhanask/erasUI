import React from 'react'
import styles from './styles.module.css'

export const ErasButton = ({type, text, erastyle}) => {
  return <button
    style={erastyle}
    className={type == `primary` ? styles.primary :
      type == `default` ? styles.default :
        type == `dashed` ? styles.dashed :
          type == `text` ? styles.text :
            type == 'link' ? styles.link :
              styles.ErasButton}>{text}</button>
}
