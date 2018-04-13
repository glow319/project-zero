import {actions} from '../../../constants/Actions'

export function mapDispatchToNewsFeedItemProps(dispatch) {
  return {
    onImageClick: () => dispatch({
      type: actions.NEWSFEED.OPEN_DETAILS
    })
  }
}


