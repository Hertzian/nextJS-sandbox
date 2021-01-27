import headerStyles from '../styles/Header.module.css'

const Header = () => {
  // const conditional = 2

  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> Newz
      </h1>

      <p className={headerStyles.description}>Keep up to date with the latest web dev newz</p>

      {/* <style jsx>
        {`
          .title {
            color: ${conditional > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  )
}

export default Header
