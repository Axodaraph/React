import { useState } from "react";

export function TwitterFollowCard({ userName = 'unknows', children, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followcard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://media.licdn.com/dms/image/v2/D5603AQHcviLl6viirg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730367597378?e=1743033600&v=beta&t=qHfjlM5IffajaKYzv0LBZ-fFDrQE9EduF5vJfGB_PAA" alt="imagen_linkedin_avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-info-userName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}