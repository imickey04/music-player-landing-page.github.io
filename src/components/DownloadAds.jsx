import React from 'react'

const DownloadAds = () => {

    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem] hover:cursor-pointer hover:opacity-[80%]'

  return (
    <div className='download'>
        <div className="download_images flex">
            <img className={downloadImgStyle + ` mr-[2rem]`} src={require("../images/App Store.png")} alt="App-Store" />
            <img className={downloadImgStyle} src={require("../images/Google Play.png")} alt="Google-Play" />
        </div>
    </div>
  )
}

export default DownloadAds