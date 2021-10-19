import { Fragment } from "react"
import { useDispatch } from "react-redux"
import { UiActions } from "../stores/ui-slice"

const Tos = () => {
  const dispatch = useDispatch()

  const pageTitle = 'Term of Services'

  dispatch(UiActions.updatePageTitle(pageTitle))

  return (
    <Fragment>
      <p>Tos</p>
    </Fragment>
  )
}

export default Tos