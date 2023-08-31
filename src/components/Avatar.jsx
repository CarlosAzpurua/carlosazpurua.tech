

const Avatar = () => {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
            />
        </div>
    );
  };
  
export default Avatar;