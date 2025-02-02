import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'axodaraph',
        name: 'Dariel',
        isFollowing: true
    },
    {
        userName: 'cathy',
        name: 'Catherine',
        isFollowing: true
    },
    {
        userName: 'kimiko',
        name: 'Anthony',
        isFollowing: true
    },
    {
        userName: 'melrodgar',
        name: 'Melissa',
        isFollowing: true
    }
]

export function App(){
    return (
        <section className='App'>
        {users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
            >
                {name}
            </TwitterFollowCard>
        ))
        }
        </section>
    )
}