
import { SearchOutlined, SendOutlined } from '@material-ui/icons';
import './App.css'


function App() {

  return (
    <div >
      <header className=' p-4 flex justify-between'>
        <a href='' className='flex items-center ml-4'>
          <SendOutlined className=' text-red-600 -rotate-90' style={{ fontSize: 50 }}></SendOutlined>
        <span className='text-[24px] font-bold text-red-600'>Home Booking</span>
        </a>
        <div className='flex border border-gray-500 rounded-full p500 items-center py-2 px-4  shadow-md shadow-gray-300'>
          <div className=' border-r border-gray-300 pr-4'>Anywhere</div>
          
          <div className=' border-r border-gray-300 pr-4 pl-4'>Any week</div>
          <div className=' border-r border-gray-300 pr-4 pl-4'>Add guests</div>

         <div className=' pl-2'> 
          <button className='  bg-primary text-white p-1 rounded-full '>
            <SearchOutlined style={{ fontSize: 25 }}></SearchOutlined>
          </button></div>
        </div>
      </header>
    </div>
  )
}

export default App
