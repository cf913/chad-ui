import {ViewStyle} from 'react-native'

export enum ThemeActionType {
  UPDATE = 'UPDATE',
  RESET = 'RESET',
}

export type ThemeAction = {
  type: ThemeActionType
  payload: any
}

export type ThemeState = {
  layout: {
    padding: number
    borderRadius: number
    itemHeight: number
    button: {
      height: number
      borderRadius: number
    }
  }
  colors: {}
}

export type CustomStyles = {[key: string]: ViewStyle}

export const INIT_THEME: ThemeState = {
  layout: {
    padding: 16,
    borderRadius: 16,
    itemHeight: 54,
    button: {
      height: 48,
      borderRadius: 12,
    },
  },
  colors: {},
}

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case ThemeActionType.RESET: {
      return INIT_THEME
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export default themeReducer
