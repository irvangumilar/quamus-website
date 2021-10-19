import CourseAccordion from './CourseAccordion'
import classes from './CourseBottomBar.module.css'

const CourseBottomBar = () => {
  return (
    <div className={classes['bottom-bar']}>
      <div className={classes['title']}>
        <h1>Materi Pembelajaran</h1>
      </div>
      <div className={classes['accordion-group']}>
        {
          DUMMYDATA.map((item, index) => {
            return (
              <CourseAccordion key={index} item={item} index={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default CourseBottomBar

const DUMMYDATA = [
  {
    title: "Pendahuluan",
    numSubsection: 2,
    doneSubsection: 1,
    duration: '1 jam 10 menit',
    subsection: [
      {
        title: 'Kurikulum Umum Quamus Arabic',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      },
      {
        title: 'Persiapan Quamus Arabic Level I',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      }
    ]
  },
  {
    title: "Unsur Bahasa Arab",
    numSubsection: 1,
    doneSubsection: 1,
    duration: '1 jam 10 menit',
    subsection: [
      {
        title: 'Unsur Bahasa Arab ',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      }
    ]
  },
  {
    title: "Huruf I",
    numSubsection: 4,
    doneSubsection: 1,
    duration: '1 jam 10 menit',
    subsection: [
      {
        title: 'Nama dan Jumlah Huruf Hijaiyyah',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      },
      {
        title: 'Empat Ilmu Tentang Huruf Hijaiyyah',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      },
      {
        title: 'Nama & Persamaan Huruf Hijaiyyah',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      },
      {
        title: 'Cara Pengucapan Huruf Hijaiyyah',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      },
      {
        title: 'Cara Penulisan Huruf Hijaiyyah',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      },
      {
        title: 'Fungsi Tanda Baca',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      },
      {
        title: 'Tanda Baca Pendek',
        isOpen: true,
        to: '/',
        duration: '15 menit'
      }
    ]
  }
]
