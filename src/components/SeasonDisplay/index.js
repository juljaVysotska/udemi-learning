import './style.css';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    }else {
        return lat > 0 ?  'winter' : 'summer' ;
    }
}

const seasonConfig = {
    winter: {
        text: 'Burr, it\'s chilly!',
        icon: 'snowflake',
    },
    summer: {
        text: 'Let\'s got to the beach!',
        icon: 'sun'
    }
}
export const SeasonDisplay = ({lat}) => {
    const season = getSeason(lat, new Date().getMonth());
    const {text, icon} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
        <i className={`${icon} icon massive icon-left`}></i>
        <h1 className='title'>{text}</h1>
        <i className={`${icon} icon massive icon-right`}></i>
    </div>
    )
}