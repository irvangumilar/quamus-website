import classes from './Instruktur.module.css'

const Instruktur = () => {
  return (
    <section className={classes['instruktur']}>
      <div className='container'>
        <h1>Instruktur <span className='text-quamus'>Quamus Arabic</span></h1>
        <div className={`${classes['bottom']} row`}>
          <div className='col-lg-5'>
            <div className={classes['left']}></div>
          </div>
          <div className={`${classes['description']} col-lg-7`}>
            <h2>Firman Afifudin Saleh, M.Ag.</h2>
            <p>Kandidat Doktor Bahasa Arab & Pendidikan Islam <br />UIN Sunan Gunung Djati</p>
            <ol>
              <li>Praktisi dan pengembang pendidikan Bahasa Arab.</li>
              <li>Pengalaman 16 tahun dalam pendidikan dan pembelajaran Bahasa Arab.</li>
              <li>Pengalaman dalam pengembangan berbagai institusi pendidikan Bahasa Arab.</li>
              <li>Pengalaman meneliti ratusan kitab, buku, jurnal ilmiah dan metode pembelajaran Bahasa Arab.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instruktur