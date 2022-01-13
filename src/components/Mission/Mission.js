import './Mission.css'

function Mission(props) {

        let {name, year, img} = props;

        return (
            <div className={'mission'}>
                <div>
                    <h2>{name}</h2>
                    <p>{year}</p>
                </div>
                <img src={img} alt={name}/>
            </div>
        );
}

export default Mission; 