import classes from './CourseGoal.module.css'


const CourseGoal = () => {
  const DUMMYDATA = [
    'Mampu membaca teks arab bertanda baca.',
    'Mampu membaca Al-Quran dengan makhrojul huruf dan tajwid yang benar.',
    'Mampu menuliskan teks arab dan ayat Al-Quran dengan benar.'
  ]
  return (
    <div className={classes['tujuan']}>
      <h1>Tujuan Kelas</h1>
      <ul>
        {DUMMYDATA.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseGoal