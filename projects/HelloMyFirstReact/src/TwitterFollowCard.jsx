export function TwitterFollowCard({username, name, isFollowing}){
    return (
        <article className='tw-followcard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://media.licdn.com/dms/image/v2/D5603AQHcviLl6viirg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730367597378?e=1743033600&v=beta&t=qHfjlM5IffajaKYzv0LBZ-fFDrQE9EduF5vJfGB_PAA" alt="imagen_linkedin_avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-info-userName'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    )
}