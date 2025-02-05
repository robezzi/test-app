import refresh from '../../assets/refresh.png';
import menu from '../../assets/menu.png';

function Header() {
    return (
      <>
        <header>
            <div className='content-width'>  
                <img src={menu}/>
                <p>Dashboard</p>
                <img src={refresh}/>
            </div>
        </header> 
      </>
    )
  }
  
  export default Header