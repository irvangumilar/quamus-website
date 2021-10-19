import { useState } from 'react'
import classes from './CourseAccordion.module.css'
import CourseAccordionButton from './CourseAccordionButton'

const CourseAccordion = props => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const toggleAccordionHandler = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }

  return (
    <div className={classes['accordion']}>
      <button onClick={toggleAccordionHandler} className={classes['btn-title']}>
        <h1>Bab {+props.index + 1} : {props.item.title}</h1>
        <p>{props.item.doneSubsection}/{props.item.numSubsection} | {props.item.duration}</p>
        <i className={`${classes['caret']} bi bi-caret-down-fill`}></i>
      </button>
      {isAccordionOpen && (
        <div className={classes['content']}>
          <ul>
            {
              props.item.subsection.map((item, index) => {
                return (
                  <li key={index}>
                    <CourseAccordionButton
                      to={item.to}
                      isOpen={item.isOpen}
                      title={item.title}
                      duration={item.duration}
                      index={index}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default CourseAccordion