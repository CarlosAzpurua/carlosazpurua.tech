import {
    useRef,
    useState,
    useEffect
  } from 'react';
  import PropTypes from 'prop-types';
  import ReactPlayer from 'react-player';
  import cn from 'classnames';
  import { Transition } from 'react-transition-group';
  
  import './player.css';
  
const Player = ({
    src,
    style = {},
    className = '',
    multiplier = 0.5624
}) => {
    const player = useRef(null);
    const [, setSeeking] = useState(false);
    const [played, setPlayed] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
  
    const [height, setHeight] = useState(300);

    useEffect(() => {
        setHeight(player.current.wrapper.offsetWidth * multiplier);
    }, [player]);
  
    const duration = 300;
  
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }
  
    const transitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
    };
  
    const handleSeekMouseDown = e => {
        e.stopPropagation();
        setSeeking(true);
    };
  
    const handleSeekChange = e => {
        e.stopPropagation();
        setPlayed(parseFloat(e.target.value));
    };

    const handleSeekMouseUp = e => {
        e.stopPropagation();
        setSeeking(false);
        player.current.seekTo(parseFloat(e.target.value));
    };

    const handleProgress = ({ seeking, played }) => {
        if (!seeking) {
            setPlayed(played);
        }
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
        <div className={cn(className)} style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        <ReactPlayer
            width='100%'
            height={height}
            ref={player}
            url={src}
            loop={true}
            volume={0}
            muted={true}
            playing={true}
            onProgress={handleProgress}
        />

        <Transition
        in={isHovered}
        timeout={duration}
        >
            { state => (
                <div
                className="w-full mt-10px flex"
                style={{
                    marginTop: -30,
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}
                onClick={e => e.stopPropagation()}
                >
                <input
                    style={{
                    width: "90%",
                    zIndex: 10
                    }}
                    className="w-full m-auto"
                    type='range'
                    min={0}
                    max={0.999999}
                    step='any'
                    value={played}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                />
                </div>
            )}
        </Transition>
            </div>
        );
    };
  
    Player.propTypes = {
      src: PropTypes.string.isRequired,
      style: PropTypes.object,
      className: PropTypes.string,
      multiplier: PropTypes.number
    };
  
export default Player;