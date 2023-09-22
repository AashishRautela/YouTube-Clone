import "../style/Header.css"
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
const Header = () => {
    const dispach=useDispatch();
    const toggleMenuHandler=()=>{
        dispach(toggleMenu());
    }  
    return (
        <div className='header'>
            <div className='header-left'>
                <img id="menu"src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="menu-icon" 
                onClick={()=>toggleMenuHandler()}/>
                <img src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg" alt="yt-icon" />
            </div>
            <div className='header-mid'>
                <input type="text" placeholder='Search'    
                />
                <button><i className="fa fa-search"></i></button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHx0H4Ph4j52U3znCmUr-T-AQu0tXVafZWrAVvuzc_w&s" alt="mic" />
            </div>
            <div className='header-right'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuCf253fG0Pm7Cyp9dsIkVVsELtzUDW_PrIQEOnuRLA&s" alt="video" />
                <img src="https://www.svgrepo.com/show/31480/notification-bell.svg" alt="notification" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEX///8BAAIAAADc3NyWlpbu7u709PTx8fHExMTKyspfX1/8/PygoKC1tbUkJCSysrLl5eWpqak/Pz+Hh4dWVlYbGxt6enpMTEwNDQ27u7uNjY0xMTJycnLW1tYWFhY3NzdoaGk+RDtzAAAChklEQVRoge3a25KiMBAGYDYclYAipxFRfP+nnARWR3fBdIeOMzXVfacXftWA0PmD51lVnMimzT8+8raRSWz3GzYVZa14qjaL3gKHMtfcn3vpT7kM3cu7/Mm96/nOMRxu/3dv+tZp4+eZjh86P7uTk2V4wo+u5ONr2aG9Mcna3riQ97VRVna9d0BvAbKyt/RyYT7c0yEvqOUYJmub+pbeAWVld7RyCm1at52S0sAzPdG0Z7sFy8puKeUYISub8kLLcHRGSJc4uiSkYXeyO014R0tPOPpE9/eK4H+tkRZ0U+K30hhZ2b+k62+j0wOOPhA+QHoc3dPJXoCjA0J6g6Mpx1LEpEA+KzQYuqGUTUue56YTUtrL4XROK3s7+DBMOSiMBb2riAO1DFnsTU07WPDBhiTS4ehWaQVZaVa08//fis1jkjg5ytDC2hRoXJwlOdHplS1E7jBDihazqzG9cpsZyoX4Sn0tncKqwn4+LezfkFR6+148hqTjh95FejNXYXEdvnLh4bp7R8dfup/Irmk6mfhvdbm4uLi4bGvvJ4UMZksWie/q8RWdy6oWL+tSlWf6SSUOhqen9MKkIsQhoB1K087EPvKU2wBHoHvXqXbaoisuu9L4leSU+wNW1vbgr5c3hiXHkl2v3tb1beAJX9l3eLGU9fbmunkRl1D+Y6/KF0rbwz3Sa5b5wBBj2bYON1LMxtqs3dpmDNm6pnXbtm+MDCtlZQ928sozPbVtF1ri9tUWbKvdNlQQvdy2zYVmfAsFRts8P+GvCLy0bTYjIOEggK4saIrjrY84Xk5JZGXjr7OQisY/On0qGr8uIKPxwwrTTDPNNNNMM80000wzzTTTTDPN9E+lPwHbdCd7s897vAAAAABJRU5ErkJggg==" alt="user" />
            </div>
        </div>
    )
}

export default Header
