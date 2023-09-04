import Player from './player'
import { videoAvatar } from '../assets/index'
const Avatar = () => {

    //const videoRef = useRef("https://res.cloudinary.com/versus/video/upload/v1693792724/Personal/CJVideoWithoutBg.mov")

    return (
        // <div className="absolute bottom-0 lg:bottom-0 lg:right-[8%] hidden xl:flex xl:max-w-none">
        //     <img
        //     src={avatarAnime}
        //     alt='avatar-carlos'
        //     className='rounded-full translate-z-0 w-[400px] h-full object-contain'
        //     />
        // </div>

        <div className="absolute bottom-0 lg:bottom-0 lg:right-[8%] hidden xl:flex xl:max-w-none">
             <Player
                className="w-full pb-20px"
                src={videoAvatar}
                />
        </div>
    );
  };
  
export default Avatar;