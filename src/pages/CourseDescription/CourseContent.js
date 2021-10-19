import classes from './CourseContent.module.css'

import { toSlug } from '../../actions/utilities'

const CourseContent = () => {
  const DUMMYDATA = [
    {
      title: "Pendahuluan",
      subSection: [
        {
          title: "Kurikulum Umum Quamus Arabic"
        },
        {
          title: "Persiapan Quamus Arabic Level I"
        }
      ]
    },
    {
      title: "Unsur Bahasa Arab",
      subSection: [
        {
          title: "Unsur Bahasa Arab "
        }
      ]
    },
    {
      title: "Huruf I",
      subSection: [
        {
          title: "Nama dan Jumlah Huruf Hijaiyyah"
        },
        {
          title: "Empat Ilmu Tentang Huruf Hijaiyyah"
        },
        {
          title: "Nama & Persamaan Huruf Hijaiyyah"
        },
        {
          title: "Cara Pengucapan Huruf Hijaiyyah"
        }
      ]
    }
  ]


  return (
    <div className={classes['content']}>
      <h1>Materi Kelas</h1>
      <div className={classes['detail']}>
        <ul>
          <li><i className="bi bi-book-fill"></i> 12 Bab</li>
          <li><i className="bi bi-camera-video-fill"></i> 78 Video (1 Jam 20 Menit)</li>
          <li><i className="bi bi-joystick"></i> 45 Game</li>
        </ul>
      </div>
      <div className={classes['materi']}>
        <div className="accordion">
          {
            DUMMYDATA.map(section => {
              const slug = toSlug(section.title)
              return (
                <div key={slug} className="accordion-item">
                  <h2 className="accordion-header">
                    <button className={`${classes['accordion-button']} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse-${slug}`} >
                      {section.title}
                    </button>
                  </h2>
                  <div id={`panelsStayOpen-collapse-${slug}`} className="accordion-collapse collapse">
                    <div className={`${classes['accordion-body']} accordion-body`}>
                      <ul>
                        {section.subSection.map(subSection => {
                          return (
                            <li key={subSection.title}>{subSection.title}</li>
                          )
                        }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CourseContent